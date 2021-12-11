import React from "react";
import { GlobalProvider } from "./components/dashboard/context/GlobalState";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//import "./components/dashboard/Dashboard.css";
import { Dashboard } from "./components/dashboard/Dashboard";

import Login from "./components/Login";
import Register from "./components/Register";

import { Home } from "./components/home/Home";
import { Settings } from "./components/settings/Settings";
import { Accounts } from "./components/Accounts";

import Transactions from "./components/Transactions";
import LearnMore from "./components/LearnMore";

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
        <Route exact path="/learn-more" element={<LearnMore />} />

        <Route
          exact
          path="/home"
          element={
            <GlobalProvider>
              <Home />
            </GlobalProvider>
          }
        />
        <Route exact path="/transactions" element={<Transactions />} />
        <Route exact path="/accounts" element={<Accounts />} />
        <Route exact path="/settings" element={<Settings />} />
      </Routes>
    </Router>
  );
}
