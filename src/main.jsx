import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { Toaster } from "react-hot-toast";
import App from "./App.jsx";
import Store from "./app/Store.js";
import "./index.css";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
      <Provider store={Store}>
        <Toaster position="top-right" reverseOrder={false} />
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
  </React.StrictMode>
);
