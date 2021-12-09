import axios from "axios";
import React, { useState, useContext, useEffect } from "react";
import "../App.css";
import Navbar from "./navbar/Navbar.js";
import { GlobalContext } from "./dashboard/context/GlobalState";

export const Accounts = () => {
  const [codes, setCodes] = useState([]);

  const [bankName, setBankName] = useState("");
  const [balance, setBalance] = useState(0);
  const [code, setCode] = useState("");
  const [type, setType] = useState(0);

  const [success, setSuccess] = useState(false);

  var APICallString = "https://tcss445-myfi.herokuapp.com/api/codes/";

  const fetchCodes = async () => {
    await axios
      .get(APICallString, { withCredentials: true })
      .then((res) => {
        setCodes(res.data.codes);
      })
      .catch((err) => {
        window.location.href = "/";
      });
  };
  useEffect(() => {
    fetchCodes();
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();

    if (type === 0) {
      setSuccess(false);
    } else {
      const account = {
        bankName: bankName,
        currBal: balance,
        limit: 1,
        curr_code: code,
        // accountType: type,
      };

      try {
        axios.post(
          "https://tcss445-myfi.herokuapp.com/api/accounts/checkings",
          account,
          { withCredentials: true }
        );
        setSuccess(true);
      } catch (error) {
        setSuccess(false);
      }
    }
  };

  return (
    <>
      <Navbar />
      <div className="center-element">
        <h3>Add New Account</h3>
        <form onSubmit={onSubmit}>
          <div className="pb-3">
            <label htmlFor="text">Bank Name</label>
            <input
              type="text"
              value={bankName}
              onChange={(e) => setBankName(e.target.value)}
              placeholder="Enter bank name..."
            />
          </div>
          <div className="pb-3">
            <label htmlFor="amount">Balance</label>
            <input
              type="number"
              value={balance}
              onChange={(e) => setBalance(e.target.value)}
              placeholder="Enter Initial Balance..."
            />
          </div>
          <div className="pb-3">
            <label htmlFor="text">Currency</label>
            <select
              className="form-select"
              onChange={(e) => setCode(e.target.value)}
            >
              <option value="none" selected disabled hidden>
                Select a Currency
              </option>
              {codes.map((code) => {
                if (code == "USD") {
                  return (
                    <option value={code} selected>
                      {code}
                    </option>
                  );
                } else {
                  return <option value={code}>{code}</option>;
                }
              })}
            </select>
          </div>
          <div className="pb-3">
            <label htmlFor="text">Account Type</label>
            <select
              className="form-select"
              onChange={(e) => setType(e.target.value)}
            >
              <option value={0} selected disabled hidden>
                Select an Account Type
              </option>
              <option value={1}>Checkings</option>
              <option value={2}>Savings</option>
            </select>
          </div>
          <button className="my-btn mt-4">Add Account</button>
        </form>
      </div>
    </>
  );
};

export default Accounts;
