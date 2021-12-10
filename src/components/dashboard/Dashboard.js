import React, { useContext } from "react";
import { GlobalContext } from "./context/GlobalState";

import { Balance } from "./subcomponents/Balance";
import { IncomeAndExpenses } from "./subcomponents/IncomeAndExpenses";
import { TransactionList } from "./subcomponents/TransactionList";
import { AddTransaction } from "./subcomponents/AddTransaction";

import Navbar from "../navbar/Navbar.js";

import "./Dashboard.css";

export const Dashboard = () => {
  const { accounts } = useContext(GlobalContext);
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
