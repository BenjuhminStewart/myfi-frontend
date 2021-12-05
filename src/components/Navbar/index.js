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
        <NavLink to="/home" className="logo">
          MyFi
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to="/home" activeStyle>
            Home
          </NavLink>
          <NavLink to="/transactions" activeStyle>
            Transactions
          </NavLink>
          <NavLink to="/accounts" activeStyle>
            Accounts
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
