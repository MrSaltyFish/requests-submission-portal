// src/components/Footer.jsx
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white text-center py-4 mt-4">
      <p>&copy; {new Date().getFullYear()} MERN Portal. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
