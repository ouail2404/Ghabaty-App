import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";
import { AuthContext } from "../context/AuthContext";
import backgroundImage from "../images/reports-bg.jpg";

const Login = () => {
  const { setIsAuthenticated, setUser } = useContext(AuthContext);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(null);

    axios
      .post("http://localhost:5000/api/login", formData)
      .then((response) => {
        if (response.data.token) {
          Cookies.set("token", response.data.token, { expires: 7 });
          setIsAuthenticated(true);
          setUser(response.data.user);
          navigate("/");
        } else {
          setError("Login failed. Please try again.");
        }
      })
      .catch((error) => {
        console.error("Login error:", error);
        setError("Invalid email or password.");
      });
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center text-white flex flex-col justify-between"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      {/* Navigation Bar */}
      <nav className="w-full flex justify-between items-center px-8 py-4 bg-gradient-to-b from-black to-transparent">
        <h1 className="text-4xl font-extrabold cursor-pointer transform transition duration-200 hover:scale-110 hover:text-red-400">
          <Link to="/">GHABATY</Link>
        </h1>
        <ul className="flex gap-8 text-lg">
          {["Home", "Alerts", "Reports", "Contact", "About Us"].map((link) => (
            <li
              key={link}
              className="hover:border-b-4 hover:border-red-400 hover:text-red-400 transition-all duration-200"
            >
              <Link to={`/${link.toLowerCase().replace(/\s+/g, "-")}`}>
                {link}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Login Section */}
      <section className="flex-1 flex items-center justify-center text-center px-6">
        <div className="bg-black bg-opacity-70 p-10 rounded-xl shadow-lg max-w-md w-full">
          <h2 className="text-4xl font-extrabold mb-6">Log In</h2>
          {error && <p className="text-red-400 mb-4">{error}</p>}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-left font-medium mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-400"
                placeholder="Your Email"
                required
              />
            </div>
            <div>
              <label className="block text-left font-medium mb-2">
                Password
              </label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-400"
                placeholder="Your Password"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full px-4 py-3 bg-gradient-to-r from-red-400 to-red-600 rounded-lg text-lg font-medium hover:from-red-500 hover:to-red-700 hover:shadow-lg transform hover:-translate-y-1 transition-all duration-200"
            >
              Log In
            </button>
          </form>
          <p className="mt-4">
            Don't have an account?{" "}
            <Link to="/signup" className="text-red-400 hover:underline">
              Sign Up
            </Link>
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full py-6 bg-black bg-opacity-80 text-center text-sm">
        <ul className="flex justify-center gap-6 mb-4">
          {["Privacy Policy", "Terms of Service", "Help"].map((footerLink) => (
            <li
              key={footerLink}
              className="hover:text-red-400 hover:underline transition-all duration-200"
            >
              <a href={`#${footerLink.toLowerCase().replace(/\s+/g, "-")}`}>
                {footerLink}
              </a>
            </li>
          ))}
        </ul>
        <p className="text-gray-400">© 2024 Ghabaty. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Login;
