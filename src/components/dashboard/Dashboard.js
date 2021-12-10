import React, { useContext, useEffect } from "react";
import { GlobalContext } from "./context/GlobalState";

import { Balance } from "./subcomponents/Balance";
import { IncomeAndExpenses } from "./subcomponents/IncomeAndExpenses";
import { TransactionList } from "./subcomponents/TransactionList";
import { AddTransaction } from "./subcomponents/AddTransaction";

import Navbar from "../navbar/Navbar.js";

import "./Dashboard.css";

export const Dashboard = () => {
  const { accounts, getAccounts } = useContext(GlobalContext);

  // if we decided against this because of the annoying popup before refresh
  // get rid of useeffect here and only use return in else statement

  useEffect(() => {
    getAccounts();
  }, []);

  if (accounts.length == 0) {
    return (
      <div>
        <Navbar />
        <div className="centered-transactions">
          <h5>
            You currently have no accounts. Click{" "}
            <a className="here-link" href="/accounts">
              here
            </a>{" "}
            to add one.
          </h5>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <Navbar />
        <div className="centered-transactions">
          <div className="left-element">
            <Balance />
            {/*<IncomeAndExpenses />*/}
            <AddTransaction />
          </div>
          <div className="right-element">
            <TransactionList />
          </div>
        </div>
      </div>
    );
  }
};
