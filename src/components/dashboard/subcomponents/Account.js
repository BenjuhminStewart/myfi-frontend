import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const Account = ({ account }) => {
  if (account.acc_type_id == 1) {
    return (
      <option value={account.acc_id}>{account.acc_name + " - Checking"}</option>
    );
  } else if (account.acc_type_id == 2) {
    return (
      <option value={account.acc_id}>{account.acc_name + " - Savings"}</option>
    );
  }
};
