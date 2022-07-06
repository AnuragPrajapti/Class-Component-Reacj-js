import React, { Component } from "react";
import "./style.css";
import { Link , Navigate } from "react-router-dom";
export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      erroremail: "",
      errorpassword: "",
      redirect:false
    };
  }
  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  // valid(){
  //   let error = false;
  //   if (!this.state.email) {
  //     error = true;
  //     this.setState({ erroremail: "Please Enter a Email", errors: true });
  //   } else if (!this.state.password) {
  //     error = true;
  //     this.setState({
  //       errorpassword: "Please Enter a   Password",
  //       errors: true,
  //     });
  //   }
  //   return false;
  // }

  valid() {
    if (
      this.state.email === "" ||
      (this.state.email === null && this.state.password === "") ||
      this.state.password === null
    ) {
      this.setState({
        erroremail: "Required",
        errorpassword: "Required",
      });
    } else if (this.state.email === "" || this.state.email === null) {
      this.setState({
        erroremail: "Required",
      });
    } else if (this.state.password === "" || this.state.password === null) {
      this.setState({
        errorpassword: "Required",
      });
    } else {
      return true;
    }
  }

  handelSubmit = (e) => {
    e.preventDefault();
    this.setState({
      erroremail: "",
      errorpassword: "",
    });
    if (this.valid()) {
      console.log(this.state);
      const UserLogin = JSON.parse(localStorage.getItem("Register_user"));
      UserLogin.forEach(element => {
        if(element.email === this.state.email && element.password === this.state.password){
          alert("login successfully");
          window.location.href="/userData";
        }else{
          alert("invalid email or Password or you have not account")
        }
      });
      console.log('Users Details',UserLogin)
      // const test = JSON.parse(UserLogin);
      // console.log("test", test);
    }
  };

  render() {
    const { email, password } = this.state;
    return (
      <div>
        <nav className="header">
          <div className="row col-12 d-flex justify-content-center text-white">
            <h2>
              <b>Login Here!!!</b>
            </h2>
          </div>
        </nav>
        <div className="container">
          <div className="container-body">
            <div className="">
              <form className="LoginForm" onSubmit={this.handelSubmit}>
                <div>
                  <label className="container__label" htmlFor="email">
                    UserName *
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    placeholder="Email address"
                    value={email}
                    onChange={(e) => {
                      this.setState({ email: e.target.value });
                    }}
                  />
                  {this.state.erroremail && (
                    <span style={{ color: "red" }}>
                      {this.state.erroremail}
                    </span>
                  )}
                </div>
                <div>
                  <label className="container__label" htmlFor="password">
                    Password *
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Password"
                    name="password"
                    value={password}
                    onChange={(e) => {
                      this.setState({ password: e.target.value });
                    }}
                  />
                  {this.state.erroremail ? (
                    <span style={{ color: "red" }}>
                      {this.state.errorpassword}
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
                    <label
                      className="custom-control-label"
                      htmlFor="customCheck1"
                    >
                      Remember me
                    </label>
                  </div>
                </div>
                {/* <Link to="/userData"> */}
                <button className="btn btn-primary" type="submit">
                  Login
                </button>
                {/* </Link> */}
                <p className="mt-2">
                  Don't have account? <Link to="/register">Register</Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
