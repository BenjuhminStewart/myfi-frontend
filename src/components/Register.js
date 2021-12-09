import React, { useState } from "react";
import "../App.css";
import "./dashboard/Dashboard.css";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import axios from "axios";

const RegisterForm = () => {
  const [fname, setFname] = useState("");
  const [minitial, setMinitial] = useState("");
  const [lname, setLname] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phoneNo, setPhoneNo] = useState("");

  // boolean values representing errors
  const pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
  const [passwordError, setPasswordError] = useState(false);
  const [passwordMatchError, setPasswordMatchError] = useState(false);

  // TODO: validate fname, minit, lname, phoneNo
  const [blankFnameError, setBlankFnameError] = useState(false);
  const [blankMinitialError, setBlankMinitialError] = useState(false);
  const [blankLnameError, setBlankLnameError] = useState(false);
  const [blankUsernameError, setBlankUsernameError] = useState(false);
  const [blankPasswordError, setBlankPasswordError] = useState(false);
  const [blankPhoneNoError, setBlankPhoneNoError] = useState(false);

  const [usernameErrorMsg, setUsernameErrorMsg] = useState("");

  const register = (e) => {
    e.preventDefault();

    if (password === confirmPassword) {
      setPasswordMatchError(false);

      // api route
      var APICallString = "https://tcss445-myfi.herokuapp.com/api/register/";
      const user = {
        first: fname,
        minit: minitial,
        last: lname,
        username: username,
        password: password,
        phoneNumber: phoneNo,
      };

      // validate against blank input IMPORTANT WHERE SHOULD I BE TRIMMING SHOULD I BE TRIMMING
      setBlankFnameError(fname.trim().length == 0);
      setBlankMinitialError(minitial.trim().length == 0);
      setBlankLnameError(lname.trim().length == 0);
      setBlankUsernameError(username.trim().length == 0);
      setBlankPasswordError(
        password.length == 0 && confirmPassword.length == 0
      );
      setBlankPhoneNoError(phoneNo.trim().length == 0);

      // validate against invalid input

      console.log("outside" + password.match(pattern));
      if (password.match(pattern)) {
        console.log("inside" + password.match(pattern));
        setPasswordError(false);
        axios
          .post(APICallString, user)
          .then((res) => {
            console.log("res: " + res);
            console.log("res.detail: " + res.detail);
            setUsernameErrorMsg(res.detail);
            if (res.data.success)
              window.location.href = "https://tcss445-myfi.herokuapp.com/";
          })
          .catch((err) => {
            console.log("err: " + err);
            console.log("err.detail: " + err.detail);
          });
      } else {
        setPasswordError(true);
      }
    } else {
      setPasswordMatchError(true);
      console.log("passwords don't match");
    }
  };

  return (
    <div className="box bg-dark text-white">
      <Form className="login-form" onSubmit={(e) => register(e)}>
        <h2 className="text-center mb-3 p-3">Register</h2>
        <FormGroup>
          <Label>First Name</Label>
          <Input
            type="first"
            placeholder="First"
            onChange={(e) => setFname(e.target.value)}
          />
          {blankFnameError && (
            <div>
              <span className="text-danger">First name cannot be blank</span>
            </div>
          )}
        </FormGroup>
        <FormGroup>
          <Label>Middle Initial</Label>
          <Input
            type="minitial"
            placeholder="M"
            maxLength="1"
            onChange={(e) => setMinitial(e.target.value)}
          />
          {blankMinitialError && (
            <div>
              <span className="text-danger">
                Middle initial cannot be blank
              </span>
            </div>
          )}
        </FormGroup>
        <FormGroup>
          <Label>Last Name</Label>
          <Input
            type="last"
            placeholder="Last"
            onChange={(e) => setLname(e.target.value)}
          />
          {blankLnameError && (
            <div>
              <span className="text-danger">Last name cannot be blank</span>
            </div>
          )}
        </FormGroup>
        <FormGroup>
          <Label>Username</Label>
          <Input
            type="username"
            placeholder="Username"
            autoComplete="off"
            onChange={(e) => setUsername(e.target.value)}
          />
          {blankUsernameError && (
            <div>
              <span className="text-danger">{usernameErrorMsg}</span>
            </div>
          )}
        </FormGroup>
        <FormGroup>
          <Label>Password</Label>
          <Input
            type="password"
            placeholder="Password"
            autoComplete="new-password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          {passwordError && (
            //text-center
            <div className="pt-3">
              <span className="text-danger">Password must contain:</span>
              <ul className="requirements pt-3">
                <li className="text-danger">At least one number</li>
                <li className="text-danger">
                  At least one lowercase character
                </li>
                <li className="text-danger">
                  At least one uppercase character
                </li>
                <li className="text-danger">At least 8 characters</li>
              </ul>
            </div>
          )}
        </FormGroup>
        <FormGroup>
          <Label>Confirm Password</Label>
          <Input
            type="password"
            placeholder="Confirm Password"
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          {passwordMatchError && (
            <div>
              <span className="text-danger">Passwords do not match</span>
            </div>
          )}
        </FormGroup>
        <FormGroup>
          <Label>Phone Number</Label>
          <Input
            type="phone-number"
            placeholder="123-456-7890"
            onChange={(e) => setPhoneNo(e.target.value)}
          />
          {blankPhoneNoError && (
            <div>
              <span className="text-danger">Phone number cannot be blank</span>
            </div>
          )}
        </FormGroup>
        <Button className="my-btn mt-3">
          <span>Register</span>
        </Button>
      </Form>
    </div>
  );
};

export default RegisterForm;
