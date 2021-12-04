import React, { useState } from "react";
import "../App.css";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { GithubLoginButton } from "react-social-login-buttons";
import { Link } from "react-router-dom";

import axios from "axios";

function login(e, username, password) {
  e.preventDefault();

  var APICallString = "https://tcss445-myfi.herokuapp.com/api/login/";

  const user = {
    username: username,
    password: password,
  };

  axios
    .get(APICallString, user)
    .then((res) => {
      console.log("Signed in Successfully");
      // if (res.data.success) {
      //   window.location.href = "https://tcss445-myfi.herokuapp.com/home/";
      // } else {
      //   console.log("no redirect");
      // }
    })
    .catch((err) => {
      console.log("hello - fail");
      console.log(user.username);
      console.log(user.password);
      console.log(err);
    });
}

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  console.log(`username: ${username} \npassword: ${password}`);

  return (
    <div className="box bg-dark text-white">
      <Form
        className="login-form"
        onSubmit={(e) => login(e, username, password)}
      >
        <h1 className="text-center text-decoration-none mt-5">
          <span className="font-weight-bold">My</span>
          <span className="myfi-text">Fi</span>
        </h1>
        <FormGroup>
          <Label className="mt-4">Username</Label>
          <Input
            type="username"
            placeholder="username"
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
        <Button className="myfi-bg tcolor-black btn-lg w-100 mt-2">
          <span>Log In</span>
        </Button>
        <div className="text-center pt-3">
          Or continue with your social account
        </div>
        <GithubLoginButton className="mt-3 mb-3" />
        <div className="text-center">
          <Link to="/Register" className="text-decoration-none myfi-text">
            Register
          </Link>
          <span className="p-2">|</span>
          <a href="/learn-more" className="text-decoration-none myfi-text">
            Learn More
          </a>
        </div>
      </Form>
    </div>
  );
};

export default LoginForm;
