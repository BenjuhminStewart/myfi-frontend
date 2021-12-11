import React, { useState, useEffect, useContext } from "react";
import { GlobalContext } from "../../dashboard/context/GlobalState";
import axios from "axios";
import "../Home.css";
import { clicked } from "./HomeAccounts";
import { catId } from "./HomeCategory";

const HomeSummary = () => {
  const {
    history,
    getAccountsHistoryNM,
    getAccountsHistory1N,
    getAccountsHistoryN1,
    getAccountsHistory11,
  } = useContext(GlobalContext);
  useEffect(() => {
    if (clicked == -1 && catId == -1) {
      console.log("ALL ACCOUNTS, ALL CATEGORIES");
      getAccountsHistoryNM();
    } else if (clicked == -1 && catId != -1) {
      console.log("ALL ACCOUNTS, Specific CATEGORY");
      getAccountsHistoryN1(catId);
    } else if (clicked != -1 && catId == -1) {
      getAccountsHistory1N(clicked);
      console.log("SPECIFIC ACCOUNT, ALL CATEGORIES");
    } else {
      getAccountsHistory11(clicked, catId);
      console.log("SPECIFIC ACCOUNT, SPECIFIC CATEGORY");
    }
  }, []);

  return (
    <div className="p-3">
      <h4 className="text-center">Category Summary</h4>
      <ul className="list pt-2 mt-3">
        <li className="li-margin">
          Highest Deposited:
          <span className="text-success">${history.maxDeposited}</span>
        </li>
        <li className="li-margin">
          Highest Spent:{" "}
          <span className="text-danger">${history.maxspent}</span>
        </li>
        <li className="li-margin">
          Average: <span className="text-white">${history.averageCost}</span>
        </li>
        <li className="li-margin">
          Total Transactions:
          <span className="text-white">{history.transactions}</span>
        </li>
      </ul>
    </div>
  );
};

export default HomeSummary;
