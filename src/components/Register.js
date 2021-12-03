import React, { useState } from "react";
import "../App.css";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import axios from "axios";

import Login from "./Login.js";
import { Link } from "react-router-dom";

let i = 0;

function register(
  fname,
  minitial,
  lname,
  username,
  password,
  confirmPassword,
  phoneNo
) {
  //console.log(`fname: ${fname} \nminitial: ${minitial} \nlname: ${lname} \nusername: ${username} \npassword: ${password} \npasswordConf: ${confirmPassword} \nphoneNo: ${phoneNo}`);
  // https://cors-anywhere.herokuapp.com/
  if (password === confirmPassword) {
    // api route
    // https://tcss445-myfi.herokuapp.com
    var APICallString = "http://localhost:5000/categories";
    const user = {
      first: fname,
      minit: minitial,
      last: lname,
      username: username,
      password: password,
      phoneNumber: phoneNo,
    };

    axios
      .get(APICallString, user)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }
}

const RegisterForm = () => {
  const [fname, setFname] = useState("");
  const [minitial, setMinitial] = useState("");
  const [lname, setLname] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phoneNo, setPhoneNo] = useState("");

  //console.log(`fname: ${fname} \nminitial: ${minitial} \nlname: ${lname} \nusername: ${username} \npassword: ${password} \npasswordConf: ${confirmPassword} \nphoneNo: ${phoneNo}`);

  // action="/"

  return (
    <div className="box bg-dark text-white">
      <Form
        className="login-form"
        onSubmit={() =>
          register(
            fname,
            minitial,
            lname,
            username,
            password,
            confirmPassword,
            phoneNo
          )
        }
      >
        <h2 className="text-center mb-3 p-3">Register</h2>
        <FormGroup>
          <Label>First Name</Label>
          <Input
            type="first"
            placeholder="First"
            onChange={(e) => setFname(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label>Middle Initial</Label>
          <Input
            type="minitial"
            placeholder="M"
            onChange={(e) => setMinitial(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label>Last Name</Label>
          <Input
            type="last"
            placeholder="Last"
            onChange={(e) => setLname(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label>Username</Label>
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
        <FormGroup>
          <Label>Confirm Password</Label>
          <Input
            type="password"
            placeholder="Confirm Password"
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </FormGroup>
        <p className="text-center mt-3 pt-3">Optional</p>
        <FormGroup>
          <Label>Phone Number</Label>
          <Input
            type="phone-number"
            placeholder="123-456-7890"
            onChange={(e) => setPhoneNo(e.target.value)}
          />
        </FormGroup>
        <Button
          className="myfi-bg tcolor-black btn-lg w-100 mt-2"
          type="submit"
        >
          <span>Register</span>
        </Button>
      </Form>
    </div>
  );
};

export default RegisterForm;
