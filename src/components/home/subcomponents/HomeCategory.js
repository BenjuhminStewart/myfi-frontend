import React, { useState, useEffect, useContext } from "react";
import { clicked } from "./HomeAccounts";
import { GlobalContext } from "../../dashboard/context/GlobalState";
export var catId = -1;

const HomeCategory = () => {
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
  };

  return (
    <div className="p-3">
      <h4 className="text-center">Category Spending</h4>
      <ul className="list pt-3">
        {categoryReports.map((category) => {
          return (
            <button
              className="list-buttons"
              value={category.catid}
              onClick={(e) => handleEvent(e)}
            >
              {category.category}
              <span className="list-span">${category.totalSpent}</span>
            </button>
          );
        })}
      </ul>
    </div>
  );
};

export default HomeCategory;
