import React, { Component } from "react";
import InputWrapper from "./InputWrapper";
import userIcon from "../Assets/user-icon.svg";
import lockIcon from "../Assets/lock-icon.svg";
import axios from "axios";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // username: "eve.holt@reqres.in",
      // password: "5cityslicka",
      username: "",
      password: "",
      error: {
        isError: false,
        message: "",
      },
    };
  }

  _handleSubmitLoginForm = async () => {
    const { username, password } = this.state;
    const baseUrl = "https://reqres.in/api";
    const apiUrl = `${baseUrl}/login`;
    const data = {
      email: username,
      password: password,
    };
    try {
      const response = await axios({
        method: "post",
        url: apiUrl,
        data,
      });
      if (response.data.token) {
        this.setState({
          error: {
            isError: false,
            message: "Logged in successfully",
          },
        });
      }
    } catch (error) {
      if (error.response.data.error === "user not found") {
        this.setState({
          error: {
            isError: true,
            message: "Invalid username or password",
          },
        });
      }
    }
  };

  _handleEmailChange = (e) => {
    this.setState({
      username: e.target.value,
    });
  };

  _handlePasswordChange = (e) => {
    this.setState({
      password: e.target.value,
    });
  };

  render() {
    const { username, password, error } = this.state;

    return (
      <form>
        {error.isError ? (
          <div style={{ color: "red", marginBottom: 10 }}>{error.message}</div>
        ) : !error.isError && error.message ? (
          <div style={{ color: "green", marginBottom: 10 }}>
            {error.message}
          </div>
        ) : (
          ""
        )}
        <InputWrapper
          type="text"
          name="username"
          placeholder="Username"
          image={userIcon}
          value={username}
          onChange={this._handleEmailChange}
        />
        <InputWrapper
          type="password"
          name="password"
          placeholder="Password"
          image={lockIcon}
          value={password}
          onChange={this._handlePasswordChange}
        />
        <div className="login">
          {/* <button type="button">Login</button> */}
          <button type="button" onClick={this._handleSubmitLoginForm}>
            Login
          </button>
        </div>
        <div className="forgot-password">
          <button> Forgot Password?</button>
        </div>
      </form>
    );
  }
}

export default Form;
