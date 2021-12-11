import React, { useState, useEffect, useContext } from "react";
import { GlobalContext } from "../../dashboard/context/GlobalState";
import axios from "axios";
import "../Home.scss";
import { clicked } from "./HomeAccounts";
import { catId } from "./HomeCategory";

const HomeSummary = () => {
  console.log(`clicked in SUMMARY.js: ${clicked}`);
  console.log(`catID in SUMMARY.js: ${catId}`);
  const {
    history,
    getAccountsHistoryNM,
    getAccountsHistory1N,
    getAccountsHistoryN1,
    getAccountsHistory11,
  } = useContext(GlobalContext);

  useEffect(() => {
    if (clicked === -1 && catId === -1) {
      console.log("ALL ACCOUNTS, ALL CATEGORIES");
      getAccountsHistoryNM();
    } else if (clicked === -1 && catId !== -1) {
      console.log("ALL ACCOUNTS, Specific CATEGORY");
      getAccountsHistoryN1(catId);
    } else if (clicked !== -1 && catId === -1) {
      console.log("SPECIFIC ACCOUNT, ALL CATEGORIES (summary)");
      getAccountsHistory1N(clicked);
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
          {history.map((hist) => {
            if (hist.maxDeposited < 0) {
              return <span className="text-success">${0}</span>;
            } else {
              return <span className="text-success">${hist.maxDeposited}</span>;
            }
          })}
        </li>
        <li className="li-margin">
          Highest Spent:
          {history.map((hist) => {
            if (hist.maxSpent < 0) {
              return (
                <span className="text-danger">-${Math.abs(hist.maxSpent)}</span>
              );
            } else {
              return <span className="text-white">${0}</span>;
            }
          })}
        </li>
        <li className="li-margin">
          Average:
          {history.map((hist) => {
            if (hist.averageCost < 0) {
              return (
                <span className="text-white">
                  -${Math.abs(hist.averageCost)}
                </span>
              );
            }
            return <span className="text-white">${hist.averageCost}</span>;
          })}
        </li>
        <li className="li-margin">
          Total Transactions:
          {history.map((hist) => {
            return <span className="text-white">{hist.transactions}</span>;
          })}
        </li>
      </ul>
    </div>
  );
};

export default HomeSummary;
