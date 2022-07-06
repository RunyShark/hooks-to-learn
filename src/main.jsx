import React from "react";
import ReactDOM from "react-dom/client";
import { HooksApp } from "./HooksApp";
import { BrowserRouter } from "react-router-dom";
// impor t "./components/10-useReducer/useReducer";
ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <React.StrictMode>
      <HooksApp />
    </React.StrictMode>
  </BrowserRouter>
);
