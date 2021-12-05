import React from "react";
import Navbar from "./Navbar";
export const Checkings = () => {
  const fetchCheckings = () => {
    var APICallString = "https://tcss445-myfi.herokuapp.com/api/account/";
  };

  return (
    <div className="box bg-dark text-white">
      <Navbar />
    </div>
  );
};

export default Checkings;
