import React from "react";
import { GlobalProvider } from "./context/GlobalState";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./Dashboard.css";
import { Dashboard } from "./Dashboard";

import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./components/Home";
import Savings from "./components/Savings";
import Settings from "./components/Settings";
import Checkings from "./components/Checkings";
import Transactions from "./components/Transactions";

const comp1 = () => {
  return (
    <GlobalProvider>
      <Dashboard />
    </GlobalProvider>
  );
};

export default function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route
          exact
          path="/dashboard"
          element={
            <GlobalProvider>
              <Dashboard />
            </GlobalProvider>
          }
        />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/home" element={<Dashboard />} />
        <Route exact path="/transactions" element={<Dashboard />} />
        <Route exact path="/checkings" element={<Checkings />} />
        <Route exact path="/savings" element={<Savings />} />
        <Route exact path="/settings" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}
