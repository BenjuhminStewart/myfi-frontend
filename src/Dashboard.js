import React from "react";

import { Balance } from "./components/Balance";
import { IncomeAndExpenses } from "./components/IncomeAndExpenses";
import { TransactionList } from "./components/TransactionList";
import { AddTransaction } from "./components/AddTransaction";

import Navbar from "./components/Navbar/Navbar.js";

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
