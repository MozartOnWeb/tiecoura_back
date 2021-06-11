import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "react-toastify/dist/ReactToastify.min.css";
import { BrowserRouter as Router } from "react-router-dom";

import { AuthProvider } from "./hooks/Auth";

ReactDOM.render(
    <AuthProvider>
      <Router>
        <App />
      </Router>
    </AuthProvider>,
  document.getElementById("root"),
);
