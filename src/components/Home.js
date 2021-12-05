import React from "react";
import Accounts from "./Accounts";
import Navbar from "./Navbar";
import Settings from "./Settings";
import Transactions from "./Transactions";
import Login from "./Login";
import { Link } from "react-router";
const Home = () => {
  return (
    <div className="box bg-dark text-white">
      <Navbar />
      <h1>HOME</h1>
    </div>
  );
};

export default Home;
