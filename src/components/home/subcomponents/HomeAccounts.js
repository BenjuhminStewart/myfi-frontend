import React, { useContext, useEffect } from "react";
import { GlobalContext } from "../../dashboard/context/GlobalState";
import Account from "./Account";

const HomeAccounts = () => {
  const { getAccounts, accounts } = useContext(GlobalContext);

  useEffect(() => {
    getAccounts();
  }, []);

  return (
    <div className="p-3">
      <h4 className="text-center">Select an account</h4>
      <hr></hr>
      <ul className="list">
        <button className="list-buttons">All Accounts</button>
      </ul>
      <h5>Checkings</h5>
      <ul className="list">
        {accounts
          .filter((account) => account.acc_type_id == 1)
          .map((account) => (
            <Account key={account.aId} account={account} />
          ))}
      </ul>
      <hr></hr>
      <h5>Savings</h5>
      <ul className="list">
        {accounts
          .filter((account) => account.acc_type_id == 2)
          .map((account) => (
            <Account key={account.aId} account={account} />
          ))}
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
