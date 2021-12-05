import "./components/Login.js";
import Home from "./components/Home.js";
import Login from "./components/Login.js";
import Register from "./components/Register.js";
import Transactions from "./components/Transactions.js";
import Settings from "./components/Settings.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Checkings from "./components/Checkings.js";
import Savings from "./components/Savings.js";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
        <Route path="/transactions" element={<Transactions />} />
        <Route path="/checkings" element={<Checkings />} />
        <Route path="/savings" element={<Savings />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </Router>
  );
}
