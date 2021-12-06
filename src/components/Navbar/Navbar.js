import React from "react";
import "./Navbar.css";
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from "./NavbarElements";

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to="/home" className="logo-container">
          <span className="logo">My</span>
          <span className="logo-color">Fi</span>
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to="/home" activeStyle>
            Home
          </NavLink>
          <NavLink to="/dashboard" activeStyle>
            Transactions
          </NavLink>
          <NavLink to="/checkings" activeStyle>
            Checkings
          </NavLink>
          <NavLink to="/savings" activeStyle>
            Savings
          </NavLink>
          <NavLink to="/settings" activeStyle>
            Settings
          </NavLink>
        </NavMenu>
        <NavBtn>
          <NavBtnLink to="/">Log out</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};

export default Navbar;
