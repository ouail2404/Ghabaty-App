import React, { useState } from "react";
import { Link } from "react-router-dom";
import backgroundImage from "../images/bg-1.jpg";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
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
              className={`p-1 hover:border-b-4 hover:border-red-400 hover:text-red-400 transition-all duration-200`}
            >
              <Link
                to={
                  link === "Home"
                    ? "/"
                    : `/${link.toLowerCase().replace(/\s+/g, "-")}`
                }
              >
                {link}
              </Link>
            </li>
          ))}
        </ul>
        <Link
          to="/login"
          className="px-8 py-3 bg-gradient-to-r from-red-400 to-red-600 rounded-full text-lg font-medium hover:from-red-500 hover:to-red-700 hover:shadow-lg transform hover:-translate-y-1 transition-all duration-200"
        >
          Login
        </Link>
      </nav>

      {/* Contact Section */}
      <div className="flex-1 flex flex-col justify-center items-center text-center px-6">
        <div className="bg-black bg-opacity-70 p-10 rounded-xl drop-shadow-lg max-w-3xl">
          <h1 className="text-4xl font-extrabold mb-4">Contact Us</h1>
          <p className="text-lg mb-8 leading-relaxed text-gray-300">
            Have questions, feedback, or need assistance? Fill out the form
            below and we’ll get back to you as soon as possible.
          </p>
          {formSubmitted ? (
            <p className="text-lg text-green-400 font-bold">
              Thank you for contacting us! We will get back to you shortly.
            </p>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-400"
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-400"
                />
              </div>
              <div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  rows="5"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-400"
                ></textarea>
              </div>
              <button
                type="submit"
                className="px-8 py-3 bg-gradient-to-r from-red-400 to-red-600 rounded-full text-lg font-medium hover:from-red-500 hover:to-red-700 hover:shadow-lg transform hover:-translate-y-1 transition-all duration-200"
              >
                Submit
              </button>
            </form>
          )}
        </div>
      </div>

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

export default Contact;
