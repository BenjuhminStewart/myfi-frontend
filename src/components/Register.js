import React from "react";
import "../App.css";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

import Login from "./Login.js";
import { Link } from "react-router-dom";

const RegisterForm = () => {
  return (
    <div className="box bg-dark text-white">
      <Form className="login-form" action="/">
        <h2 className="text-center mb-3 p-3">Register</h2>
        <FormGroup>
          <Label>First Name</Label>
          <Input type="first" placeholder="First" />
        </FormGroup>
        <FormGroup>
          <Label>Middle Initial</Label>
          <Input type="minitial" placeholder="M" />
        </FormGroup>
        <FormGroup>
          <Label>Last Name</Label>
          <Input type="last" placeholder="Last" />
        </FormGroup>
        <FormGroup>
          <Label>Username</Label>
          <Input type="username" placeholder="Username" />
        </FormGroup>
        <FormGroup>
          <Label>Password</Label>
          <Input type="password" placeholder="Password" />
        </FormGroup>
        <FormGroup>
          <Label>Confirm Password</Label>
          <Input type="password" placeholder="Confirm Password" />
        </FormGroup>
        <p className="text-center mt-3 pt-3">Optional</p>
        <FormGroup>
          <Label>Phone Number</Label>
          <Input type="phone-number" placeholder="123-456-7890" />
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
