import axios from "axios";
import React, { useState, useEffect } from "react";
import "../App.css";
import Navbar from "./navbar/Navbar.js";

export const Accounts = () => {
  const [codes, setCodes] = useState([]);
  const [types, setTypes] = useState([]);

  const [bankName, setBankName] = useState("");
  const [balance, setBalance] = useState(0);
  const [code, setCode] = useState("");
  const [type, setType] = useState(-1);

  const [message, setMessage] = useState("");
  const [className, setClassName] = useState("");
  const [success, setSuccess] = useState(false);

  var APICallString = "https://tcss445-myfi.herokuapp.com/api/codes/";
  var APICallTypeString =
    "https://tcss445-myfi.herokuapp.com/api/accountTypes/";

  var APIPostString = "https://tcss445-myfi.herokuapp.com/api/accounts";

  const fetchCodes = async () => {
    await axios
      .get(APICallString)
      .then((res) => {
        setCodes(res.data);
      })
      .catch((err) => {
        //window.location.href = "/";
      });
  };

  const fetchTypes = async () => {
    await axios
      .get(APICallTypeString)
      .then((response) => {
        console.log(response.data);
        console.log(response.data.types);
        setTypes(response.data);
      })
      .catch((err) => {
        //window.location.href = "/";
      });
  };

  const postAccount = async () => {
    const account = {
      bankName: bankName,
      currBal: balance,
      currCode: code,
      accType: type,
    };
    try {
      await axios.post(APIPostString, account, { withCredentials: true });
    } catch (error) {
      console.log("Request Error -> at Accounts.java postAccount() method");
    }
  };

  useEffect(() => {
    fetchCodes();
    fetchTypes();
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();

    if (bankName === "") {
      setMessage("No Bank Name Entered");
      setClassName("text-danger text-center");
    } else if (type === -1) {
      setMessage("No Account Type Entered");
      setClassName("text-danger text-center");
    } else {
      postAccount();
      setClassName("text-success text-center");
      setMessage("Successfully Added Account");
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
              <option value={-1} selected disabled hidden>
                Select an Account Type
              </option>
              {types.map((type) => {
                return <option value={type}>{type}</option>;
              })}
            </select>
          </div>
          <button className="my-btn mt-4">Add Account</button>

          <p className={className}>{message}</p>
        </form>
      </div>
    </>
  );
};

export default Accounts;
