// Header.jsx
import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-blue-500 p-4 mb-4">
      <div className="flex justify-between items-center">
        {/* Left-aligned content (Logo or Brand Name) */}
        <div className="text-white text-2xl">
          <Link to="/">MyApp</Link>
        </div>

        {/* Right-aligned buttons */}
        <div className="space-x-4">
          <Link to="/" className="text-white">
            Home
          </Link>
          <Link to="/about" className="text-white">
            About
          </Link>
          <Link to="/services" className="text-white">
            Services
          </Link>
          <Link to="/login" className="text-white">
            Login
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
