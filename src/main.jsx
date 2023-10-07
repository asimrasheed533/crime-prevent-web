import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import UserAuth from "./Contexts/UserContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <UserAuth>
      <App />
    </UserAuth>
  </BrowserRouter>
);
