import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const FrontLayout = ({ children }) => {
  return (
    <div className="front-layout">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default FrontLayout;

//I don't need a frontLayout on this project right now: this is for scalibity when i would need to render multiple pages in my app.
