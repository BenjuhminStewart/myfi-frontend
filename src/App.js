import React from "react";
import { GlobalProvider } from "./components/dashboard/context/GlobalState";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//import "./components/dashboard/Dashboard.css";
import { Dashboard } from "./components/dashboard/Dashboard";

import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./components/Home";
import Savings from "./components/Savings";
import { Settings } from "./components/settings/Settings";
import Checkings from "./components/Checkings";
import Transactions from "./components/Transactions";

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
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/transactions" element={<Transactions />} />
        <Route exact path="/checkings" element={<Checkings />} />
        <Route exact path="/savings" element={<Savings />} />
        <Route exact path="/settings" element={<Settings />} />
      </Routes>
    </Router>
  );
}
