import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const AddTransaction = () => {
  const { addTransaction } = useContext(GlobalContext);

  const [desc, setDesc] = useState("");
  const [amount, setAmount] = useState(0);

  const onSubmit = (e) => {
    e.preventDefault();

    const transaction = {
      desc: desc,
      amount: +amount,
    };

    addTransaction(transaction);
  };

  return (
    <>
      <h3>Add new transaction</h3>
      <form onSubmit={onSubmit}>
        <div>
          <label htmlFor="text">Description</label>
          <input
            type="text"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            placeholder="Enter description..."
          />
        </div>
        <div>
          <label htmlFor="amount">Amount</label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount..."
          />
        </div>
        <div>
          <label htmlFor="selectCategory">Currency</label>
          <select className="form-select">
            <option value="none" selected disabled hidden>
              Select a Currency
            </option>
            <option>Groceries</option>
            <option>Charity</option>
            <option>Groceries</option>
          </select>
        </div>
        <div>
          <label for="selectCategory">Currency</label>
          <select className="form-select">
            <option value="none" selected disabled hidden>
              Select a Category
            </option>
            <option>Groceries</option>
            <option>Charity</option>
            <option>Groceries</option>
          </select>
        </div>
        <button className="btn mt-4">Add transaction</button>
      </form>
    </>
  );
};
