import "./style.css";
import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap-theme.css";
import { Link } from "react-router-dom";
import validator from "validator";


class Register extends Component {
  userData;
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      phone: "",
      password: "",
      address: "",
      data: [],
      errors: false,
      nameerror: "",
      emailerror: "",
      phoneerror: "",
      passworderror: "",
      addresserror: "",
    };
  }

  handleInputChange = (event) => {
    event.preventDefault();
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    let error = false;

    if (!this.state.name) {
      error = true;
      this.setState({ nameerror: "Please Enter a Name", errors: true });
    }
    else if (!this.state.email) {
      error = true;
      this.setState({ emailerror: "Please Enter a   Email", errors: true });
    }
    else if (!validator.isEmail(this.state.email)) {
      error = true;
      this.setState({ emailerror: "Please Enter a valid  Email", errors: true, });
    }
    else if (!this.state.password) {
      error = true;
      this.setState({ passworderror: "Please Enter a Password ", errors: true, });
    }
    else if (!this.state.phone) {
      error = true;
      this.setState({ phoneerror: "Please Enter a Phone Number ", errors: true, });
    }
    else if (!this.state.password) {
      error = true;
      this.setState({ passworderror: "Please Enter a Password ", errors: true, });
    }
    else if (!this.state.address) {
      error = true;
      this.setState({ addresserror: "Please Enter a address ", errors: true, });
    }

    if (error) {
      return null;
    }
    var list = JSON.parse(localStorage.getItem("Register_user"));
    let data = list ? list : [];
    data.push({
      name: this.state.name,
      email: this.state.email,
      phone: this.state.phone,
      password: this.state.password,
      address: this.state.address,
    });
    localStorage.setItem("Register_user", JSON.stringify(data));
    this.setState({
      errors: false,
      id: "",
      name: "",
      email: "",
      phone: "",
      password: "",
      address: "",
      data: data,
    });
    //  let data 
    //  axios.push('http://localhost:3000/register',data).then(
    //    res =>{
    //     console.log(res)
    //    }
    //  ).catch(
    //   err =>{
    //     console.log(err)
    //   }
    //  )
     
  };

  render() {
    return (
      <div>
        <nav className="header">
          <div className="row col-12 d-flex justify-content-center text-white">
            <h2>
              <b>Register Here!!!</b>
            </h2>
          </div>
        </nav>
        <div className="container">
          <div className="container-body">
            <div className="">
              <form className="registrationForm">
                <div>
                  <label className="container__label" htmlFor="name">
                    Name
                  </label>
                  <input
                    type="string"
                    className="form-control"
                    name="name"
                    placeholder="Full Name"
                    onChange={this.handleInputChange}
                    value={this.state.name}
                  />
                  {this.state.errors && (
                    <span style={{ color: "red" }}>{this.state.nameerror}</span>
                  )}
                </div>
                <div>
                  <label className="container__label" htmlFor="email">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    placeholder="Email address"
                    onChange={this.handleInputChange}
                    value={this.state.email}
                  />
                  {this.state.errors && (
                    <span style={{ color: "red" }}>
                      {this.state.emailerror}
                    </span>
                  )}
                </div>
                <div>
                  <label className="container__label" htmlFor="phone">
                    Phone_phone
                  </label>
                  <input
                    type="phone"
                    className="form-control"
                    name="phone"
                    placeholder="Phone phone"
                    onChange={this.handleInputChange}
                    value={this.state.phone}
                  />
                  {this.state.errors && (
                    <span style={{ color: "red" }}>
                      {this.state.phoneerror}
                    </span>
                  )}
                </div>
                <div>
                  <label className="container__label" htmlFor="password">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    max={8}
                    min={6}
                    placeholder="Password"
                    name="password"
                    onChange={this.handleInputChange}
                    value={this.state.password}
                  />
                  {this.state.errors ? (
                    <span style={{ color: "red" }}>
                      {this.state.passworderror}
                    </span>
                  ) : (
                    ""
                  )}
                </div>
                <div>
                  <label className="container__label" htmlFor="address">
                    Address
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Address"
                    name="address"
                    onChange={this.handleInputChange}
                    value={this.state.address}
                  />
                  {this.state.errors ? (
                    <span style={{ color: "red" }}>
                      {this.state.addresserror}
                    </span>
                  ) : (
                    ""
                  )}
                </div>
                <div className="mb-3">
                  <div className="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      id="customCheck1"
                     />
                    <label className="custom-control-label" htmlFor="customCheck1">
                        <p style={{color : 'red'}}> __Are you sure you want to mark register ?</p>
                    </label>
                  </div>
                </div>
                {/* <Link to="/userData"> */}
                <button
                  onClick={this.handleFormSubmit}
                  className="btn btn-primary"
                >
                  Register
                </button>
                {/* </Link> */}
                <p className="mt-2">
                  Already have account? <Link to="/login">Login</Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Register;
