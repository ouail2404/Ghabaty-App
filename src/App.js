import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/login";
import About from "./components/About";
import Reports from "./components/Reports";
import WildfireMap from "./components/WildfireMap";
import AuthLayout from "./components/layouts/auth-layout";
import Home from "./components/Home";
import Signup from "./components/signup";
import { AuthProvider } from "./context/AuthContext";
import AuthPageTest from "./components/auth-page-test";
import Contact from "./components/Contact";

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/Alerts" element={<WildfireMap />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/Contact" element={<Contact />} />

          <Route
            path="/"
            element={
              <AuthLayout>
                <Home />
              </AuthLayout>
            }
          />
          <Route
            path="/authtest"
            element={
              <AuthLayout>
                <AuthPageTest />
              </AuthLayout>
            }
          />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
