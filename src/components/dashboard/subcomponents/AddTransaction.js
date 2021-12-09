import React, { useState, useEffect, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { Category } from "./Category";
import { Code } from "./Code";

export const AddTransaction = () => {
  const { addTransaction, codes, getCodes, categories, getCategories } =
    useContext(GlobalContext);

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

  useEffect(() => {
    getCodes();
    getCategories();
  }, []);

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
            {codes.map((code) => (
              <Code key={code} code={code} />
            ))}
          </select>
        </div>
        <div>
          <label for="selectCategory">Currency</label>
          <select className="form-select">
            <option value="none" selected disabled hidden>
              Select a Category
            </option>
            {categories.map((category) => (
              <Category key={category} category={category} />
            ))}
          </select>
        </div>
        <button className="my-btn mt-4">Add transaction</button>
      </form>
    </>
  );
};
