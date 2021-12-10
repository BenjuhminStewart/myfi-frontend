import React, { useState, useEffect } from "react";
import axios from "axios";
import "../Home.css";
const HomeSummary = () => {
  return (
    <div className="p-3">
      <h4 className="text-center">Category Summary</h4>
      <ul className="list pt-2 mt-3">
        <li className="li-margin">max: </li>
        <li className="li-margin">avg: </li>
        <li className="li-margin">count: </li>
      </ul>
    </div>
  );
};

export default HomeSummary;
