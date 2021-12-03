import "./components/Login.js";
import Home from "./components/Home.js";
import Login from "./components/Login.js";
import Register from "./components/Register.js";
import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";

export default function App() {
  return (

    <Router>
       <Routes>
          <Route exact path = "/" element = {<Login />} />
          <Route path = "/register" element = {<Register />} />
          <Route path = "/home" element = {<Home />} />
        </Routes>
    </Router>

  )
}