import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "../style/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import AuthProvider from "./context/AuthContext";
import LoginProvider from "./context/LoginContext";

import Navbar from "./NAVBAR/Navbar";

const App = () => {
  return (
    <Router>
      <AuthProvider>
        <LoginProvider>
          <Navbar />
        </LoginProvider>
      </AuthProvider>
    </Router>
  );
};

export default App;
