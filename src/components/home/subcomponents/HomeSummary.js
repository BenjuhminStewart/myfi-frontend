import React, { useState, useEffect } from "react";
import axios from "axios";
const HomeSummary = () => {
  return (
    <div className="p-3">
      <h4 className="text-center">Category Summary</h4>
      <ul className="list pt-2">
        <li>max: </li>
        <li>avg: </li>
        <li>count: </li>
      </ul>
    </div>
  );
};

export default HomeSummary;
