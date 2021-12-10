import React from "react";

const Account = ({ account }) => {
  return (
    <button className="list-buttons" value={account.acc_id}>
      {account.acc_name}
    </button>
  );
};

export default Account;
