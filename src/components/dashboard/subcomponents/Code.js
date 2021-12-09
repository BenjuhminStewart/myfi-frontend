import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const Code = ({ code }) => {
  return <option value={code}>{code}</option>;
};
