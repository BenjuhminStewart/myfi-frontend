import React from "react";
import { GlobalProvider } from "./context/GlobalState";

import "./App.css";
import { Dashboard } from "./Dashboard";

export default function App() {
  return (
    <GlobalProvider>
      <Dashboard />
    </GlobalProvider>
  );
}
