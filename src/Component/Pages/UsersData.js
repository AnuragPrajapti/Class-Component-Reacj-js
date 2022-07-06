import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";


class UserData extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      phone: "",
      password: "",
      address: "",
      userData: [],
    };
  }
  componentDidMount() {

    this.userData = JSON.parse(localStorage.getItem('Register_user'));
    if (localStorage.getItem('Register_user')) {
      this.setState({
        userData: this.userData,
        name: this.userData.name,
        email: this.userData.email,
        phone: this.userData.phone,
        password: this.userData.password,
        address: this.userData.address
      })
    } else {
      this.setState({
        name: '',
        email: '',
        phone: '',
        password: '',
        address: ''

      })
    }
    // localStorage.removeItem('Register_user');
  //   function createItem() {
  //     localStorage. setItem('userData', 'Register_user');
  //     }
  //     createItem(
  //       this.state = {
  //         name: "",
  //         email: "",
  //         phone: "",
  //         password: "",
  //         address: "",
  //       }
  //     );
  
  //     function getValue() {
  //     return localStorage. getItem('userData');
  //     }
  }

  
  handleInputChange = (event) => {
    event.preventDefault();
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  editPost(id) {
    const editUser = this.state.userData[id];
    console.log(editUser);
    this.setState({
      name: editUser.name,
      email: editUser.email,
      password: editUser.password,
      phone: editUser.phone,
      address: editUser.address,
      data: this.state.userData,
      id: id,
    });
  }

  deletePost = (id) => {
    let data = this.state.userData;
    data.splice(id, 1);
    this.setState({
      data: data,
    });
  };
  UpdatePost = (id) => {
    let UpdateUsers = this.state.userData;
    let object_data = this.state.userData[id];
    let mydata = {
      name: object_data.name,
      email: object_data.email,
      password: object_data.password,
      phone: object_data.phone,
      address: object_data.address,
    };
    UpdateUsers.splice(id, 1, mydata);
    this.setState({
      name: "",
      email: "",
      password: "",
      phone: "",
      address: "",
      id: "",
    });
    UpdateUsers[id].name = this.state.name;
    UpdateUsers[id].email = this.state.email;
    UpdateUsers[id].password = this.state.password;
    UpdateUsers[id].phone = this.state.phone;
    UpdateUsers[id].address = this.state.address;

    console.log("Successfully Data Update!!");
  };

  render() {
    return (
      <div>
        <div>
          <center>
            <div className="center">
              <h1>Users Details</h1>
              <table>
                <thead>
                  <tr>
                    <th>id</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>phone</th>
                    <th>Password</th>
                    <th>Address</th>
                    <th>Edit</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {this.userData?.map((item, id) => (
                    <tr key={id}>
                      <td>{id + 1}</td>
                      {this.state.id === id ? (
                        <td>
                          <input
                            type="string"
                            className="form-control"
                            name="name"
                            placeholder="Full Name"
                            onChange={this.handleInputChange}
                            value={this.state.name}
                          />
                        </td>
                      ) : (
                        <td>{item.name}</td>
                      )}
                      {this.state.id === id ? (
                        <td>
                          <input
                            type="email"
                            className="form-control"
                            name="email"
                            placeholder="Email address"
                            onChange={this.handleInputChange}
                            value={this.state.email}
                          />
                        </td>
                      ) : (
                        <td>{item.email}</td>
                      )}
                      {this.state.id === id ? (
                        <td>
                          <input
                            type="phone"
                            className="form-control"
                            name="phone"
                            placeholder="Phone phone"
                            onChange={this.handleInputChange}
                            value={this.state.phone}
                          />
                        </td>
                      ) : (
                        <td>{item.phone}</td>
                      )}
                      {this.state.id === id ? (
                        <td>
                          <input
                            type="password"
                            className="form-control"
                            placeholder="Password"
                            name="password"
                            onChange={this.handleInputChange}
                            value={this.state.password}
                          />
                        </td>
                      ) : (
                        <td>{item.password}</td>
                      )}
                      {this.state.id === id ? (
                        <td>
                          <input
                            type="text"
                            className="form-control"
                            placeholder=" Enter address"
                            name="address"
                            onChange={this.handleInputChange}
                            value={this.state.address}
                          />
                        </td>
                      ) : (
                        <td>{item.address}</td>
                      )}

                      <td>
                        
                        <button
                          value="{{$item->id}} "
                          className="btn btn-primary editbtn btn-sm"
                          onClick={() => {
                            this.editPost(id);
                          }}
                        >
                          Edit
                        </button>
                      </td>
                      <td>
                        <button
                          className="btn btn-danger"
                          data-bs-dismiss="modal"
                          onClick={() => {
                            this.deletePost(id);
                          }}
                        >
                          Delete
                        </button>
                      </td>
                      <td>
                        <button
                          className="btn btn-warning"
                          onClick={() => {
                            this.UpdatePost(id);
                          }}
                        >
                          Update
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </center>
        </div>
        <center>
          <b>Don't have account? </b> <Link to="/register" className="btn btn-danger">Register</Link>
        </center>

      </div>
    );
  }
}

export default UserData;
