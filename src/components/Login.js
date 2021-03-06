import React, { useState } from "react";
import "../App.css";
import "./dashboard/Dashboard.css";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { GithubLoginButton } from "react-social-login-buttons";
import { Link } from "react-router-dom";

import axios from "axios";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const login = (e) => {
    e.preventDefault();

    var APICallString = "https://tcss445-myfi.herokuapp.com/api/login/";

    const user = {
      username: username,
      password: password,
    };

    axios
      .post(APICallString, user, { withCredentials: true })
      .then((res) => {
        if (res.data.success) {
          setError(false);
          console.log("Signed in Successfully");
          window.location.href = "https://tcss445-myfi.herokuapp.com/home";
        } else {
          setError(true);
          console.log("no redirect");
        }
      })
      .catch((err) => {
        setError(true);
      });
  };

  console.log(`username: ${username} \npassword: ${password}`);

  return (
    <div>
      <Form className="login-form" onSubmit={(e) => login(e)}>
        <h1 className="text-center text-decoration-none mt-5">
          <span className="font-weight-bold">My</span>
          <span className="myfi-text-nohover">Fi</span>
        </h1>
        <FormGroup>
          <Label className="mt-4">Username</Label>
          <Input
            type="username"
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label>Password</Label>
          <Input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </FormGroup>
        <Button className="my-btn mt-3">
          <span>Log In</span>
        </Button>
        {error && (
          <div className="text-center pt-3">
            <span className="invalid-credentials">Invalid credentials!</span>
          </div>
        )}
        <div className="text-center pt-3 text-white">
          Or continue with your social account
        </div>
        <GithubLoginButton className="mt-3 mb-3" />
        <div className="text-center">
          <Link to="/register" className="text-decoration-none myfi-text">
            Register
          </Link>
          <span className="p-2">|</span>
          <Link to="/learn-more" className="text-decoration-none myfi-text">
            Learn More
          </Link>
        </div>
      </Form>
    </div>
  );
};

export default LoginForm;
