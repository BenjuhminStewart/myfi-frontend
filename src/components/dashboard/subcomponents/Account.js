import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const Account = ({ account }) => {
  return (
    <option value={account.checkings_id}>
      {account.checkings_id + ": " + account.bank_name + " - Checkings"}
    </option>
  );
};
