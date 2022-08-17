import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "../style/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import AuthProvider from "./context/AuthContext";
import LoginProvider from "./context/LoginContext";
import CustomerProvider from "./context/CustomerContext";

import Navbar from "./NAVBAR/Navbar";
import Main from "./MAINPAGE/Main";
import Sidebar from "./SIDEBAR/Sidebar";

const App = () => {
  return (
    <Router>
      <AuthProvider>
        <LoginProvider>
          <CustomerProvider>
            <main>
              <Navbar />
              <div className="content d-flex justify-content-around">
                <Sidebar />
                <Main />
              </div>
            </main>
          </CustomerProvider>
        </LoginProvider>
      </AuthProvider>
    </Router>
  );
};

export default App;
