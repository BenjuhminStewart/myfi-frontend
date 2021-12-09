import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const Category = ({ category }) => {
  return <option value={category}>{category}</option>;
};
