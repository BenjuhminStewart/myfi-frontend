import React, { useState, useEffect } from "react";
import "../../App.css";
import "./Settings.css";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import axios from "axios";

import Navbar from "../navbar/Navbar.js";

export const Settings = () => {
  const [fname, setFname] = useState("");
  const [minitial, setMinitial] = useState("");
  const [lname, setLname] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [salt, setSalt] = useState("");

  // boolean values representing errors
  const pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
  const [passwordError, setPasswordError] = useState(false);
  const [passwordMatchError, setPasswordMatchError] = useState(false);

  // TODO: validate fname, minit, lname, phoneNo
  const [blankFnameError, setBlankFnameError] = useState(false);
  const [blankMinitialError, setBlankMinitialError] = useState(false);
  const [blankLnameError, setBlankLnameError] = useState(false);
  const [blankPasswordFlag, setBlankPasswordFlag] = useState(true);
  const [invalidPhoneNoError, setInvalidPhoneNoError] = useState(false);

  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  function getUser() {
    axios
      .get("https://tcss445-myfi.herokuapp.com/api/user/", {
        withCredentials: true,
      })
      .then((res) => {
        setFname(res.data.rows[0].first_name);
        setMinitial(res.data.rows[0].middle_initial);
        setLname(res.data.rows[0].last_name);
        setUsername(res.data.rows[0].username);
        setPhoneNo(res.data.rows[0].phone_number);
        setSalt(res.data.rows[0].salt);
      });
  }

  useEffect(() => {
    getUser();
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();

    // validate against blank input IMPORTANT WHERE SHOULD I BE TRIMMING SHOULD I BE TRIMMING
    setBlankFnameError(fname.trim().length == 0);
    setBlankMinitialError(minitial.trim().length == 0);
    setBlankLnameError(lname.trim().length == 0);
    setBlankPasswordFlag(password.length == 0 && confirmPassword.length == 0);
    setInvalidPhoneNoError(!/^\d+$/.test(phoneNo) || phoneNo.length != 10);

    if (password === confirmPassword) {
      setSuccess(false);
      setPasswordMatchError(false);
      const data = {
        first_name: fname,
        middle_initial: minitial,
        last_name: lname,
        password: password,
        phone_number: phoneNo,
        salt: salt,
      };

      if (password.match(pattern) || password.trim().length == 0) {
        try {
          axios.patch("https://tcss445-myfi.herokuapp.com/api/user/", data, {
            withCredentials: true,
          });
          setSuccess(true);
          setPassword("");
          setConfirmPassword("");
          setError(false);
        } catch (err) {
          // set overall err to top priority
          setError(true);

          setPasswordError(false);
          setPasswordMatchError(false);
          setBlankFnameError(false);
          setBlankMinitialError(false);
          setBlankLnameError(false);
          setBlankPasswordFlag(false);
          setInvalidPhoneNoError(false);
        }
      } else {
        setSuccess(false);
        setPasswordError(true);
      }
    } else {
      setSuccess(false);
      setPasswordMatchError(true);
    }
  };

  return (
    <div className="box bg-dark text-white">
      <Navbar />
      <Form className="login-form" onSubmit={onSubmit}>
        <FormGroup>
          <Label className="mt-4" htmlFor="text">
            First Name
          </Label>
          <Input
            className="input"
            type="text"
            value={fname}
            onChange={(e) => setFname(e.target.value)}
            placeholder="First"
          />
          {blankFnameError && (
            <div>
              <span className="text-danger">First name cannot be blank</span>
            </div>
          )}
        </FormGroup>
        <FormGroup>
          <Label className="mt-2" htmlFor="text">
            Middle Initial
          </Label>
          <Input
            className="input"
            type="text"
            value={minitial}
            maxLength="1"
            onChange={(e) => setMinitial(e.target.value)}
            placeholder="M"
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
          <Label className="mt-2" htmlFor="text">
            Last Name
          </Label>
          <Input
            className="input"
            type="text"
            value={lname}
            onChange={(e) => setLname(e.target.value)}
            placeholder="Last"
          />
          {blankLnameError && (
            <div>
              <span className="text-danger">Last name cannot be blank</span>
            </div>
          )}
        </FormGroup>
        <FormGroup>
          <Label className="mt-2" htmlFor="text">
            Username
          </Label>
          <Input
            className="input"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter description..."
            disabled
          />
        </FormGroup>
        <FormGroup>
          <Label className="mt-2" htmlFor="text">
            New Password
          </Label>
          <Input
            className="input"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
          {passwordError && (
            //text-center
            <div className="pt-1">
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
          <Label className="mt-2" htmlFor="text">
            Confirm New Password
          </Label>
          <Input
            className="input"
            type="password"
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Confirm Password"
          />
          {passwordMatchError && (
            <div>
              <span className="text-danger">Passwords do not match</span>
            </div>
          )}
        </FormGroup>
        <FormGroup>
          <Label className="mt-2" htmlFor="text">
            Phone Number
          </Label>
          <Input
            className="input"
            type="text"
            value={phoneNo}
            onChange={(e) => setPhoneNo(e.target.value)}
            placeholder="(123) 456-7890"
          />
          {invalidPhoneNoError && (
            <div>
              <span className="text-danger">
                Invalid phone number
                <br />
                (ex: 1234567890)
              </span>
            </div>
          )}
        </FormGroup>
        <Button className="btn mt-3">Save Changes</Button>
        {error && (
          <p className="text-center text-danger">
            Something went wrong... <br />
            Please try again.
          </p>
        )}
        {success && <p className="text-center text-success">Changes saved!</p>}
      </Form>
    </div>
  );
};
