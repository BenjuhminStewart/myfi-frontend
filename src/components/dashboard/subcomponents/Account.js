import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const Account = ({ account }) => {
  return (
    <option value={account.bank_name}>
      {account.bank_name + ":" + account.checkings_id + " - Checkings"}
    </option>
  );
};
