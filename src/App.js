import React from "react";
import { Switch, Route } from "react-router-dom";

// Import Global Styles
import { createGlobalStyle, ThemeProvider } from "styled-components";

import { ToastContainer } from "react-toastify";

// Import Components
import PhotoSerie from "./components/Serie/PhotoSerie";

// Import Pages
import Home from "./pages/Home";
import Login from "./pages/Login";
import PrivateRoute from "./pages/PrivateRoute";

// Create Global Styles
const GlobalStyles = createGlobalStyle`

body {
  font-family: "Poppins";
  background-color: #161616;
  .toast_conatiner {
    text-transform: uppercase;
  }
}

`;

const Theme = {
  mainFont: "Poppins",
  linkFont: "Monument",
  red: "#4361ee",
  white: "#FFFDFF",
  black: "#161616",
  breakpoints: {
    s: "320px",
    xs: "375px",
    sm: "576px",
    md: "768px",
    lg: "992px",
    xl: "1200px",
  },
};

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyles />
      <ToastContainer autoClose={2000} className="toast_conatiner" />
      <Switch>
        <PrivateRoute path="/" exact component={Home} />
        <Route path="/login" exact component={Login} />
        <Route path="/:serie" component={PhotoSerie} />
      </Switch>
    </ThemeProvider>
  );
}

export default App;
