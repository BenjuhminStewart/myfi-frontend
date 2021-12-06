import React from "react";

import { Balance } from "./subcomponents/Balance";
import { IncomeAndExpenses } from "./subcomponents/IncomeAndExpenses";
import { TransactionList } from "./subcomponents/TransactionList";
import { AddTransaction } from "./subcomponents/AddTransaction";

import Navbar from "../navbar/Navbar.js";

import "./Dashboard.css";

export const Dashboard = () => {
  return (
    <div>
      <Navbar />
      <div className="left-element">
        <Balance />
        <IncomeAndExpenses />
        <AddTransaction />
      </div>
      <div className="right-element">
        <TransactionList />
      </div>
    </div>
  );
};
