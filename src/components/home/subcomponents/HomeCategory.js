import React, { useState, useEffect, useContext } from "react";
import { clicked } from "./HomeAccounts";
import { GlobalContext } from "../../dashboard/context/GlobalState";
export var catId = -1;

const HomeCategory = () => {
  console.log(`clicked in CATEGORY.js: ${clicked}`);
  console.log(`catID in CATEGORY.js: ${catId}`);
  const {
    categoryReports,
    getCategoryReport,
    getAllCategoryReport,
    history,
    getAccountsHistoryNM,
    getAccountsHistory1N,
    getAccountsHistoryN1,
    getAccountsHistory11,
  } = useContext(GlobalContext);

  console.log(clicked);

  useEffect(() => {
    if (clicked == -1) {
      getAllCategoryReport();
    } else {
      getCategoryReport(clicked);
    }
    //catId = -1;
  }, []);

  const handleEvent = (e) => {
    catId = Number.parseInt(e.target.value);
    if (clicked === -1 && catId === -1) {
      console.log("ALL ACCOUNTS, ALL CATEGORIES");
      getAccountsHistoryNM();
    } else if (clicked === -1 && catId !== -1) {
      console.log("ALL ACCOUNTS, Specific CATEGORY");
      getAccountsHistoryN1(catId);
    } else if (clicked !== -1 && catId == -1) {
      console.log("SPECIFIC ACCOUNT, ALL CATEGORIES (category)");
      getAccountsHistory1N(clicked);
    } else {
      getAccountsHistory11(clicked, catId);
      console.log("SPECIFIC ACCOUNT, SPECIFIC CATEGORY");
    }
  };

  return (
    <div className="p-3">
      <h4 className="text-center">Category Spending</h4>
      <ul className="list pt-3">
        <button
          className="list-buttons text-center"
          value={-1}
          onClick={(e) => handleEvent(e)}
        >
          All
        </button>
        <hr></hr>
        {categoryReports.map((category) => {
          if (category.totalSpent == 0) {
            return (
              <button
                className="list-buttons"
                value={category.catid}
                onClick={(e) => handleEvent(e)}
              >
                {category.category}
                <span className="text-white">${category.totalSpent}</span>
              </button>
            );
          } else if (category.totalSpent < 0) {
            return (
              <button
                className="list-buttons"
                value={category.catid}
                onClick={(e) => handleEvent(e)}
              >
                {category.category}
                <span className="text-danger">
                  -$
                  {Math.abs(category.totalSpent)
                    .toFixed(2)
                    .replace(/\d(?=(\d{3})+\.)/g, "$&,")}
                </span>
              </button>
            );
          } else {
            return (
              <button
                className="list-buttons"
                value={category.catid}
                onClick={(e) => handleEvent(e)}
              >
                {category.category}
                <span className="text-success">
                  $
                  {Math.abs(category.totalSpent)
                    .toFixed(2)
                    .replace(/\d(?=(\d{3})+\.)/g, "$&,")}
                </span>
              </button>
            );
          }
        })}
      </ul>
    </div>
  );
};

export default HomeCategory;
