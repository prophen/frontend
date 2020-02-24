import React, { Component } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";

export class Login extends Component {
  state = {
    username: "",
    password: "",
    userNiceName: "",
    userEmail: "",
    token: "",
    loggedIn: false,
    loading: false,
    error: ""
  };
  onFormSubmit = event => {
    event.preventDefault();
    const siteUrl = "http://localhost:8000";
    const loginData = {
      username: this.state.username,
      password: this.state.password
    };
    this.setState({ loading: true }, () => {
      axios
        .post(`${siteUrl}/wp-json/jwt-auth/v1/token`, loginData)
        .then(res => {
          console.log(res.data);
          if (undefined === res.data.token) {
            this.setState({ error: res.data.message, loading: false });
            return;
          }
          localStorage.setItem("token", res.data.token);
          localStorage.setItem("userName", res.data.user_nicename);

          this.setState({
            loading: false,
            token: res.data.token,
            userNiceName: res.data.user_nicename,
            userEmail: res.data.user_email,
            loggedIn: true
          });
        })
        .catch(err => {
          this.setState({ error: err.response.data, loading: false });
        });
    });
  };

  handleOnChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };
  render() {
    const { username, password, loggedIn, userNiceName } = this.state;

    const user = userNiceName ? userNiceName : localStorage.getItem("userName");
    if (loggedIn || localStorage.getItem("token")) {
      return <Redirect to={`/dashboard/${user}`} />;
    } else {
      return (
        <>
          <form onSubmit={this.onFormSubmit}>
            <label className="form-group">
              Username:
              <input
                type="text"
                className="form-control"
                name="username"
                value={username}
                onChange={this.handleOnChange}
              />
            </label>
            <br />
            <label className="form-group">
              Password:
              <input
                type="password"
                className="form-control"
                name="password"
                value={password}
                onChange={this.handleOnChange}
              />
            </label>
            <br />
            <button className="btn btn-primary" type="submit">
              Login
            </button>
          </form>
        </>
      );
    }
  }
}

export default Login;
