import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/Login";
import LandingPage from "./components/LandingPage";
// import Logout from "./components/Logout";
import ProtectedRoute from "./components/ProtectedRoute";
// import Demopage from "./components/Demopage";
import Dashboard from "./components/Dashboard";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              {/* <Logout /> */}
              <Dashboard/>
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
