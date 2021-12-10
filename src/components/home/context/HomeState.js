import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";
import axios from "axios";

// create initial state
const initialState = {
  checkings: [],
  savings: [],
  categories: [],
  error: null,
  loading: true,
};
