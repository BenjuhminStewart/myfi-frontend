import React from "react";

import Navbar from "../navbar/Navbar.js";

import "./Home.css";
import HomeAccounts from "./subcomponents/HomeAccounts.js";
import HomeCategory from "./subcomponents/HomeCategory.js";
import HomeSummary from "./subcomponents/HomeSummary.js";

export const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="left-box">
        <HomeAccounts />
      </div>
      <div className="center-box">
        <HomeCategory />
      </div>
      <div className="right-box">
        <HomeSummary />
      </div>
    </div>
  );
};
