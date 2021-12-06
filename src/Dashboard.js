import React from "react";

import { Header } from "./components/Header";
import { Balance } from "./components/Balance";
import { IncomeAndExpenses } from "./components/IncomeAndExpenses";
import { TransactionList } from "./components/TransactionList";
import { AddTransaction } from "./components/AddTransaction";

import "./App.css";

export const Dashboard = () => {
  return (
    <div>
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
