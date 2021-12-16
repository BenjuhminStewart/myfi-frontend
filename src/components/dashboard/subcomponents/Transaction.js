import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const Transaction = ({ transaction }) => {
  const { deleteTransaction } = useContext(GlobalContext);

  const sign = transaction.amount < 0 ? "-" : "+";
  const type = transaction.amount < 0 ? "minus" : "plus";
  return (
    <li className={type}>
      {transaction.desc}
      <span>
        {sign}$
        {Math.abs(transaction.amount)
          .toFixed(2)
          .replace(/\d(?=(\d{3})+\.)/g, "$&,")}
      </span>
      <button
        className="delete-btn"
        onClick={() => deleteTransaction(transaction.tId)}
      >
        x
      </button>
    </li>
  );
};
