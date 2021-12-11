import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";
import axios from "axios";

// initial state
const initialState = {
  categoryReports: [],
  history: [],
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

  async function getAccountsHistoryNM() {
    try {
      const res = await axios.get(
        "https://tcss445-myfi.herokuapp.com/api/accounts/summary/"
      );
      dispatch({
        type: "GET_ACCOUNT_HISTORY",
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: "ACCOUNT_HISTORY_ERROR",
        payload: err.details,
      });
    }
  }

  async function getAccountsHistory1N(id) {
    try {
      const res = await axios.get(
        `https://tcss445-myfi.herokuapp.com/api/accounts/summary/account/${id}`
      );
      dispatch({
        type: "GET_ACCOUNT_ID_HISTORY",
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: "ACCOUNT_ID_HISTORY_ERROR",
        payload: err.details,
      });
    }
  }

  async function getAccountsHistoryN1(id) {
    try {
      const res = await axios.get(
        `https://tcss445-myfi.herokuapp.com/api/accounts/summary/category/${id}`
      );
      dispatch({
        type: "GET_ACCOUNT_CATEGORY_HISTORY",
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: "ACCOUNT_CATEGORY_HISTORY_ERROR",
        payload: err.details,
      });
    }
  }

  async function getAccountsHistory11(aId, cId) {
    try {
      const res = await axios.get(
        `https://tcss445-myfi.herokuapp.com/api/accounts/summary/${aId}/${cId}`
      );
      dispatch({
        type: "GET_ACCOUNT_CATEGORY_ID_HISTORY",
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: "ACCOUNT_CATEGORY_ID_HISTORY_ERROR",
        payload: err.details,
      });
    }
  }

  async function getCategoryReport(id) {
    try {
      const res = await axios.get(
        `https://tcss445-myfi.herokuapp.com/api/accounts/category-report/${id}/`,
        { withCredentials: true }
      );
      dispatch({
        type: "GET_ID_CATEGORY_REPORT",
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: "ID_CATEGORY_REPORT_ERROR",
        payload: err.details,
      });
    }
  }

  async function getAllCategoryReport() {
    try {
      const res = await axios.get(
        "https://tcss445-myfi.herokuapp.com/api/accounts/category-report/",
        { withCredentials: true }
      );
      dispatch({
        type: "GET_CATEGORY_REPORT",
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: "CATEGORY_REPORT_ERROR",
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
        history: state.history,
        getAccountsHistoryNM,
        getAccountsHistory1N,
        getAccountsHistoryN1,
        getAccountsHistory11,
        getCodes,
        getCategories,
        categoryReports: state.categoryReports,
        getCategoryReport,
        getAllCategoryReport,
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
