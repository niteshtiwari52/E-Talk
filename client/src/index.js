import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import * as Sentry from "@sentry/react";

// Redux
import { Provider } from "react-redux";
import Store from "./Redux/Store";
import axios from "axios";

if (localStorage.ETalkUser) {
  const { token } = JSON.parse(localStorage.ETalkUser);
  axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
}

Sentry.init({
  dsn: process.env.REACT_APP_SENTRY_DSN,
  sendDefaultPii: true
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={Store}>
        {/* <button onClick={() => {throw new Error("This is your first error!");}}>Hit Sentry Error</button>; */}
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
