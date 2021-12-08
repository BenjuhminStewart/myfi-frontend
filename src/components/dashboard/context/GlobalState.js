import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";
import axios from "axios";

// initial state
const initialState = {
  transactions: [],
  accounts: [],
  error: null,
  loading: true,
};

// create context
export const GlobalContext = createContext(initialState);

// create provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  async function getAccounts() {
    try {
      const res = await axios.get(
        "https://tcss445-myfi.herokuapp.com/api/accounts/checkings"
      );
      dispatch({
        type: "GET_ACCOUNT",
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: "ACCOUNT_ERROR",
        payload: err.details,
      });
    }
  }

  async function getTransactions() {
    try {
      const res = await axios.get(
        "https://tcss445-myfi.herokuapp.com/api/transactions/checkings"
      );
      dispatch({
        type: "GET_TRANSACTION",
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: "TRANSACTION_ERROR",
        payload: err.details,
      });
    }
  }

  // actions, which calls reducer
  async function deleteTransaction(id) {
    try {
      const res = await axios.delete(
        `https://tcss445-myfi.herokuapp.com/api/transactions/${id}`
      );
      dispatch({
        type: "DELETE_TRANSACTION",
        payload: id,
      });
    } catch (err) {
      dispatch({
        type: "TRANSACTION_ERR",
        payload: err.details,
      });
    }
  }

  async function addTransaction(transaction) {
    try {
      const res = await axios.post(
        `https://tcss445-myfi.herokuapp.com/api/transactions/`,
        transaction
      );
      dispatch({
        type: "ADD_TRANSACTION",
        payload: res.data.transaction,
      });
    } catch (err) {
      dispatch({
        type: "TRANSACTION_ERR",
        payload: err.details,
      });
    }
  }

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        accounts: state.accounts,
        error: state.error,
        loading: state.loading,
        getAccounts,
        getTransactions,
        deleteTransaction,
        addTransaction,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
