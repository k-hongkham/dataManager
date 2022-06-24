import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "../style/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import AuthProvider from "./context/AuthContext";

import Navbar from "./NAVBAR/Navbar";

const App = () => {
  return (
    <Router>
      <AuthProvider>
        <Navbar />
      </AuthProvider>
    </Router>
  );
};

export default App;
