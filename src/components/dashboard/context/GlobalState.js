import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";
import axios from "axios";

// initial state
const initialState = {
  transactions: [],
  filtered: [],
  accounts: [],
  codes: [],
  categories: [],
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
        "https://tcss445-myfi.herokuapp.com/api/accounts/"
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
        "https://tcss445-myfi.herokuapp.com/api/transactions/",
        { withCredentials: true }
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

  async function filterTransactions(id) {
    dispatch({
      type: "FILTER_TRANSACTIONS",
      payload: id,
    });
  }

  // actions, which calls reducer
  async function deleteTransaction(id) {
    try {
      const res = await axios.delete(
        `https://tcss445-myfi.herokuapp.com/api/transactions/${id}`,
        { withCredentials: true }
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
        transaction,
        { withCredentials: true }
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

  async function getCategories() {
    try {
      const res = await axios.get(
        "https://tcss445-myfi.herokuapp.com/api/categories"
      );
      dispatch({
        type: "GET_CATEGORIES",
        payload: res.data.categories,
      });
    } catch (err) {
      dispatch({
        type: "CATEGORIES_ERROR",
        payload: err.details,
      });
    }
  }

  async function getCodes() {
    try {
      const res = await axios.get(
        "https://tcss445-myfi.herokuapp.com/api/codes"
      );
      dispatch({
        type: "GET_CODES",
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: "CODES_ERROR",
        payload: err.details,
      });
    }
  }

  return (
    <GlobalContext.Provider
      value={{
        codes: state.codes,
        categories: state.categories,
        transactions: state.transactions,
        filtered: state.filtered,
        accounts: state.accounts,
        error: state.error,
        loading: state.loading,
        getCodes,
        getCategories,
        getAccounts,
        getTransactions,
        filterTransactions,
        deleteTransaction,
        addTransaction,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
