import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "../style/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import AuthProvider from "./context/AuthContext";

const App = () => {
  return (
    <Router>
      <AuthProvider></AuthProvider>
    </Router>
  );
};

export default App;
