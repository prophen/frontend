import React, { Component } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";
import { Button, Box } from "rebass";
import { Input, Label } from "@rebass/forms";
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
          <Box as="form" onSubmit={this.onFormSubmit}>
            <Label htmlFor="username">Username:</Label>
            <Input
              width={300}
              type="text"
              name="username"
              value={username}
              onChange={this.handleOnChange}
            />

            <br />
            <Label htmlFor="password">Password:</Label>
            <Input
              width={300}
              type="password"
              name="password"
              value={password}
              onChange={this.handleOnChange}
            />

            <br />
            <Button type="submit">Login</Button>
          </Box>
        </>
      );
    }
  }
}

export default Login;
