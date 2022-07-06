import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "../style/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import AuthProvider from "./context/AuthContext";
import LoginProvider from "./context/LoginContext";
import CustomerProvider from "./context/CustomerContext";

import Navbar from "./NAVBAR/Navbar";
import Main from "./MAINPAGE/Main";

const App = () => {
  return (
    <Router>
      <AuthProvider>
        <LoginProvider>
          <CustomerProvider>
            <Navbar />
            <Main />
          </CustomerProvider>
        </LoginProvider>
      </AuthProvider>
    </Router>
  );
};

export default App;
