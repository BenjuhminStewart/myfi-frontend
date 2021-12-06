import React from "react";
import Navbar from "./navbar/Navbar.js";
export const Savings = () => {
  const fetchSavings = () => {
    var APICallString = "https://tcss445-myfi.herokuapp.com/api/account/";
  };

  return (
    <div className="box bg-dark text-white">
      <Navbar />
    </div>
  );
};

export default Savings;
