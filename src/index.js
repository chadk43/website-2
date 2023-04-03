import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom/dist";
// import 'bootstrap/dist/css/bootstrap.min.css';
{/* <BrowserRouter>
    <App />
  </BrowserRouter> */}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
