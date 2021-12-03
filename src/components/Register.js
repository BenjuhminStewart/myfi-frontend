import React, { useState } from "react";
import "../App.css";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import axios from "axios";

function register(
  e,
  fname,
  minitial,
  lname,
  username,
  password,
  confirmPassword,
  phoneNo
) {
  // prevent event from refreshing page.
  e.preventDefault();

  // https://cors-anywhere.herokuapp.com/
  if (password === confirmPassword) {
    // api route
    // https://tcss445-myfi.herokuapp.com
    var APICallString = "https://tcss445-myfi.herokuapp.com/api/register/";
    const user = {
      first: fname,
      minit: minitial,
      last: lname,
      username: username,
      password: password,
      phoneNumber: phoneNo,
    };

    //console.log(user);
    //console.log(JSON.stringify(user));
    axios
      .post(APICallString, user)
      .then((res) => {
        console.log(res.data);
        console.log(res.data.success);
        console.log(
          "Successfully created user with the following credentials:"
        );
        console.log(`username: ${username} \npassword: ${password}`);
        if (res.data.success)
          window.location.href = "https://tcss445-myfi.herokuapp.com/";
        else console.log("no redirect");
      })
      .catch((err) => {
        console.log(err);
      });
  } else {
    console.log("incorrect password");
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

  return (
    <div className="box bg-dark text-white">
      <Form
        className="login-form"
        onSubmit={(e) =>
          register(
            e,
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
        <Button className="myfi-bg tcolor-black btn-lg w-100 mt-2">
          <span>Register</span>
        </Button>
      </Form>
    </div>
  );
};

export default RegisterForm;
