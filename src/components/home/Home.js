import React from "react";

import Navbar from "../navbar/Navbar.js";

import "./Home.scss";
import HomeAccounts from "./subcomponents/HomeAccounts.js";
import HomeCategory from "./subcomponents/HomeCategory.js";
import HomeSummary from "./subcomponents/HomeSummary.js";

export const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="group1">
        <div className="left-box">
          <HomeAccounts />
        </div>
        <div className="categories">
          <div className="center-box">
            <HomeSummary />
          </div>
          <div className="right-box">
            <HomeCategory />
          </div>
        </div>
      </div>
    </div>
  );
};
