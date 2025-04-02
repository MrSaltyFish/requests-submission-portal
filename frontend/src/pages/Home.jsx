// src/pages/Home.jsx
import React from "react";

import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";

const Home = () => {
  return (
    <>
      <Header />
      <div className="text-center">
        <h2 className="text-4xl font-bold">Welcome to the MERN Portal</h2>
        <p className="mt-4">This is the homepage of your portal!</p>
      </div>
      <Footer />
    </>
  );
};

export default Home;
