import React, { useState, useEffect, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { Category } from "./Category";
import { Code } from "./Code";
import { selectedId } from "./Balance";

export const AddTransaction = () => {
  const { addTransaction, codes, getCodes, categories, getCategories } =
    useContext(GlobalContext);

  const [desc, setDesc] = useState("");
  const [amount, setAmount] = useState(0);
  const [code, setCode] = useState("");
  const [category, setCategory] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  console.log(selectedId);

  const onSubmit = (e) => {
    e.preventDefault();

    if (selectedId === -1) {
      setErrorMessage("No Account Selected");
    } else if (amount === 0) {
      setErrorMessage("Cannot have purchase of $0");
    } else if (code === "") {
      setErrorMessage("No currency code selected");
    } else if (category === "") {
      setErrorMessage("No category selected");
    } else {
      const transaction = {
        aId: selectedId,
        desc: desc,
        amount: +amount,
        curr_code: code,
        category: category,
      };

      console.log(JSON.stringify(transaction));
      setErrorMessage("");
      addTransaction(transaction);

      setAmount(0);
      setDesc("");
    }
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
          <label for="selectCurrency">Currency</label>
          <select
            className="form-select"
            onChange={(e) => setCode(e.target.value)}
          >
            <option value="none" selected disabled hidden>
              Select a Currency
            </option>
            {codes.map((cd) => {
              return <option value={cd}>{cd}</option>;
            })}
          </select>
        </div>
        <div>
          <label for="selectCategory">Category</label>
          <select
            className="form-select"
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="none" selected disabled hidden>
              Select a Category
            </option>
            {categories.map((cg) => (
              <Category key={cg} category={cg} />
            ))}
          </select>
        </div>
        <button className="my-btn mt-4">Add transaction</button>
        <p className="text-danger text-center">{errorMessage}</p>
      </form>
    </>
  );
};
