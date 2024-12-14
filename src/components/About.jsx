import React, { useState } from "react";
import { Link } from "react-router-dom";
import TeamNav from "./TeamNav";
import backgroundImage from "../images/bg-3.jpg";

const About = () => {
  const [hoveredLink, setHoveredLink] = useState(null);

  return (
    <div
      className="min-h-screen bg-cover bg-center"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundAttachment: "fixed",
      }}
    >
      {/* Navbar Section */}
      <nav className="w-full flex justify-between items-center px-8 py-4 bg-black opacity-70 fixed top-0 left-0 z-50 text-white">
        <h1 className="text-4xl font-extrabold cursor-pointer transform transition duration-200 hover:scale-110 hover:text-red-400">
          <Link to="/">GHABATY</Link>
        </h1>
        <ul className="flex gap-8 text-lg">
          {["Home", "Alerts", "Reports", "Contact", "About Us"].map((link) => (
            <li
              key={link}
              className={`p-1 ${
                hoveredLink === null && link === "About Us"
                  ? "border-b-4 border-red-400 text-red-400"
                  : hoveredLink === link
                  ? "border-b-4 border-red-400 text-red-400"
                  : "hover:border-b-4 hover:border-red-400 hover:text-red-400"
              } transition-all duration-200`}
              onMouseEnter={() => setHoveredLink(link)}
              onMouseLeave={() => setHoveredLink(null)}
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
      </nav>

      {/* Hero Section */}
      <section className="relative text-white pt-16">
        <div className="h-screen w-full flex flex-col items-center justify-center bg-black bg-opacity-60 px-6 text-center">
          <h1 className="text-5xl font-extrabold mb-6">
            About <span className="text-red-500">Ghabaty</span>
          </h1>
          <p className="text-lg max-w-3xl leading-relaxed">
            Protecting our forests, safeguarding our future. Join us in our
            mission to combat wildfires and promote sustainable practices for a
            better tomorrow.
          </p>
          <Link
            to="/signup"
            className="px-6 py-3 mt-6 text-white bg-gradient-to-r from-red-500 to-orange-500 rounded-full hover:from-orange-500 hover:to-yellow-500 transition-all duration-300"
          >
            Get Involved
          </Link>
        </div>
      </section>

      {/* About Section */}
      <section className="container mx-auto p-8 bg-black bg-opacity-70 text-white rounded-lg shadow-lg my-12">
        <h2 className="text-4xl font-bold text-center mb-12">
          Our <span className="text-red-500">Story</span>
        </h2>
        <p className="text-lg text-gray-300 leading-relaxed">
          Ghabaty is committed to protecting forests, empowering communities,
          and promoting sustainable practices. With innovative technologies and
          collaborative efforts, we strive to prevent wildfires and safeguard
          our natural resources for future generations.
        </p>
      </section>

      {/* Mission and Vision */}
      <section className="container mx-auto p-8 grid gap-8 md:grid-cols-2">
        {/* Mission */}
        <div className="bg-gradient-to-br from-red-600 to-orange-500 p-8 rounded-lg shadow-lg text-white">
          <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
          <p className="text-lg">
            Ghabaty is dedicated to providing real-time wildfire alerts,
            ensuring the safety of forests, communities, and natural resources.
            By leveraging modern technologies, we aim to reduce the impact of
            wildfires and promote sustainable environmental practices.
          </p>
        </div>
        {/* Vision */}
        <div className="bg-gradient-to-br from-orange-500 to-yellow-500 p-8 rounded-lg shadow-lg text-black">
          <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
          <p className="text-lg">
            To become the leading platform in wildfire prevention and risk
            management by empowering communities with accurate and actionable
            insights.
          </p>
        </div>
      </section>

      {/* Meet the Team */}
      <section className="container mx-auto p-8 my-12">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">
          Meet the <span className="text-red-500">Team</span>
        </h2>
        <div className="bg-black bg-opacity-70 p-6 rounded-lg shadow-lg">
          <TeamNav />
        </div>
      </section>

      {/* Call to Action */}
      <section
        className="relative text-white py-16 bg-cover bg-center"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-80"></div>
        <div className="relative container mx-auto text-center">
          <h3 className="text-3xl font-bold mb-6">
            Join the <span className="text-orange-500">Mission</span>
          </h3>
          <p className="text-lg mb-8">
            Together, we can make a difference. Protecting forests, empowering
            communities, and ensuring a sustainable future starts here.
          </p>
          <Link
            to="/signup"
            className="px-6 py-3 bg-gradient-to-r from-red-500 to-orange-500 rounded-full hover:from-orange-500 hover:to-yellow-500 transition-all duration-300"
          >
            Get Involved
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full py-8 bg-black bg-opacity-90 text-gray-400">
        <div className="container mx-auto text-center">
          <p>© 2024 Ghabaty. All rights reserved.</p>
          <ul className="flex justify-center gap-4 mt-4">
            <li>
              <Link to="/privacy-policy" className="hover:text-white">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link to="/terms-of-service" className="hover:text-white">
                Terms of Service
              </Link>
            </li>
            <li>
              <Link to="/help" className="hover:text-white">
                Help
              </Link>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default About;
