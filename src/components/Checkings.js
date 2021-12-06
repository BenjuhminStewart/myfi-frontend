import axios from "axios";
import React, { useState } from "react";
import "../App.css";
import { Form } from "reactstrap";
import Navbar from "./navbar/Navbar.js";

export const Checkings = () => {
  const [codes, setCodes] = useState([]);
  const [memberid, setMemberid] = useState(0);

  var APICallString = "https://tcss445-myfi.herokuapp.com/api/codes/";

  const fetchCodes = async () => {
    await axios
      .get(APICallString, { withCredentials: true })
      .then((res) => {
        console.log(res.data.id);
        console.log(res.data);
        setCodes(res.data.codes);
        setMemberid(res.data.id);
      })
      .catch((err) => {
        window.location.href = "https://tcss445-myfi.herokuapp.com/";
      });
  };

  const X = () => {
    React.useEffect(() => {
      fetchCodes();
    }, []);
  };

  X();
  return (
    <div className="box bg-dark text-white">
      <Navbar />
      <Form className="center">
        <div className="form-row align-items-center pt-3 checkings-form">
          <h1 className="text-center pt-3">Add Accounts</h1>
          <div className="form-group pb-3">
            <label for="enterBank">Bank Name</label>
            <input
              type="bankName"
              className="form-control"
              id="enterBank"
              placeholder="ex: Bank of America"
            ></input>
          </div>
          <div className="form-group pb-3">
            <label for="enterBalance">Balance</label>
            <div className="input-group mb-2">
              <div class="input-group-prepend">
                <div class="input-group-text">$</div>
              </div>
              <input
                type="number"
                className="form-control"
                id="enterBalance"
                placeholder="ex: 12000"
              ></input>
            </div>
          </div>
          <div className="form-group pb-3">
            <label for="enterSpendingLimit">Spending Limit</label>
            <div className="input-group mb-2">
              <div class="input-group-prepend">
                <div class="input-group-text">$</div>
              </div>
              <input
                type="number"
                className="form-control"
                id="enterSpendingLimit"
                placeholder="ex: 12000"
              ></input>
            </div>
          </div>
          <div className="form-group pb-3">
            <label for="selectCategory">Codes</label>
            <select className="form-control" id="selectCategory">
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
        </div>
      </Form>
    </div>
  );
};

export default Checkings;
