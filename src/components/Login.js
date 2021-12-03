import React, { useState } from "react";
import "../App.css";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { GithubLoginButton } from "react-social-login-buttons";

//import axios from 'axios';

import Register from "./Register.js";

import { BrowserRouter as Router, Link } from "react-router-dom";

// function validateLogin(event) {
//   var APICallString = "localhost:5000/login";
//   axios.post(APICallString).then(res => {
//     res ! empty
//   }).catch(err => {
//     console.log(err);
//   });
// }

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  console.log(`username: ${username} \npassword: ${password}`);

  return (
    <div className="box bg-dark text-white">
      <Form className="login-form" action="/home">
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
        <Button
          className="myfi-bg tcolor-black btn-lg w-100 mt-2"
          type="submit"
        >
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
