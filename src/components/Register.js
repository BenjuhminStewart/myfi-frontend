import React, { useState } from "react";
import "../App.css";
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
  const [blankFnameError, setBlankFnameError] = useState("");
  const [blankMinitialError, setBlankMinitialError] = useState("");
  const [blankLnameError, setBlankLnameError] = useState("");
  const [blankUsernameError, setBlankUsernameError] = useState("");
  const [blankPasswordError, setBlankPasswordError] = useState("");
  const [blankPhoneNoError, setBlankPhoneNoError] = useState("");

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

      // validate against invalid input

      if (password.match(pattern)) {
        setPasswordError(false);
        axios
          .post(APICallString, user)
          .then((res) => {
            if (res.data.success)
              window.location.href = "https://tcss445-myfi.herokuapp.com/";
          })
          .catch((err) => {
            console.log(err);
          });
      } else {
        setPasswordError(true);
      }
    } else {
      setPasswordMatchError(true);
      setPasswordError(false);
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
        </FormGroup>
        {blankFnameError && (
          <div>
            <span className="invalid-credentials">
              First name cannot be blank
            </span>
          </div>
        )}
        <FormGroup>
          <Label>Middle Initial</Label>
          <Input
            type="minitial"
            placeholder="M"
            onChange={(e) => setMinitial(e.target.value)}
          />
        </FormGroup>
        {blankMinitialError && (
          <div>
            <span className="invalid-credentials">
              Middle initial cannot be blank
            </span>
          </div>
        )}
        <FormGroup>
          <Label>Last Name</Label>
          <Input
            type="last"
            placeholder="Last"
            onChange={(e) => setLname(e.target.value)}
          />
        </FormGroup>
        {blankLnameError && (
          <div>
            <span className="invalid-credentials">
              Last name cannot be blank
            </span>
          </div>
        )}
        <FormGroup>
          <Label>Username</Label>
          <Input
            type="username"
            placeholder="Username"
            autoComplete="off"
            onChange={(e) => setUsername(e.target.value)}
          />
        </FormGroup>
        {blankUsernameError && (
          <div>
            <span className="invalid-credentials">
              Username cannot be blank
            </span>
          </div>
        )}
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
        </FormGroup>
        <FormGroup>
          <Label>Confirm Password</Label>
          <Input
            type="password"
            placeholder="Confirm Password"
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </FormGroup>
        {blankUsernameError && (
          <div>
            <span className="invalid-credentials">
              Passwords cannot be blank
            </span>
          </div>
        )}
        <p className="text-center mt-3 pt-3">Optional</p>
        <FormGroup>
          <Label>Phone Number</Label>
          <Input
            type="phone-number"
            placeholder="123-456-7890"
            onChange={(e) => setPhoneNo(e.target.value)}
          />
        </FormGroup>
        <Button className="myfi-bg tcolor-black btn-lg w-100 mt-2">
          <span>Register</span>
        </Button>
        {passwordMatchError && (
          <div className="text-center pt-3">
            <span className="invalid-credentials">Passwords do not match</span>
          </div>
        )}
        {passwordError && (
          <div className="text-center pt-3">
            <span className="invalid-credentials">
              Password must meet the following criteria:
            </span>
            <ul className="pt-3">
              <li className="invalid-credentials">
                Contains at least one number character
              </li>
              <li className="invalid-credentials">
                Contains at least one lowercase character
              </li>
              <li className="invalid-credentials">
                Contains at least one uppercase character
              </li>
              <li className="invalid-credentials">
                Is at least 8 characters long
              </li>
            </ul>
          </div>
        )}
      </Form>
    </div>
  );
};

export default RegisterForm;
