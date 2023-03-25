import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Card from "../components/Card";
import Carousel from "../components/Carousel";

export const Home = () => {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className="m-2">
        <Carousel />
      </div>
      <div className="m-4">
        <Card/>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};
