import React, { useState, useContext, useEffect } from "react";
import { GlobalContext } from "../../dashboard/context/GlobalState";
import { catId } from "./HomeCategory";
export var clicked = -1;
const HomeAccounts = () => {
  const {
    getCategoryReport,
    getAllCategoryReport,
    getAccountsHistory1N,
    getAccountsHistoryN1,
    getAccountsHistoryNM,
    getAccountsHistory11,
  } = useContext(GlobalContext);
  const { getAccounts, accounts } = useContext(GlobalContext);
  const [className, setClassName] = useState("");

  useEffect(() => {
    getAccounts();
    //clicked = -1;
  }, []);

  const handleEvent = (e) => {
    clicked = Number.parseInt(e.target.value);
    if (clicked == -1) {
      getAllCategoryReport();
      if (catId != -1) {
        getAccountsHistoryN1(catId);
      } else {
        getAccountsHistoryNM();
      }
    } else {
      getCategoryReport(clicked);
      if (catId != -1) {
        getAccountsHistory11();
      } else {
        getAccountsHistory1N(clicked);
      }
    }
  };

  return (
    <div className="p-3">
      <h4 className="text-center">Select an account</h4>
      <hr></hr>
      <ul className="list">
        <button
          value={-1}
          className="list-buttons"
          onClick={(e) => handleEvent(e)}
        >
          All Accounts
        </button>
      </ul>
      <h3>Checking</h3>
      <ul className="list">
        {accounts
          .filter((account) => account.acc_type_id == 1)
          .map((account) => {
            return (
              <button
                className="list-buttons"
                value={account.acc_id}
                onClick={(e) => handleEvent(e)}
              >
                {account.acc_name}
              </button>
            );
          })}
      </ul>
      <hr></hr>
      <h3>Savings</h3>
      <ul className="list">
        {accounts
          .filter((account) => account.acc_type_id == 2)
          .map((account) => {
            return (
              <button
                className="list-buttons"
                value={account.acc_id}
                onClick={(e) => handleEvent(e)}
              >
                {account.acc_name}
              </button>
            );
          })}
      </ul>
    </div>
  );
};

//  ...state,
// loading: false,
// transactions: state.filtered.filter(
//   (transaction) => transaction.aId == action.payload
// ),

export default HomeAccounts;
