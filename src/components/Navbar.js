import React from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { useRef } from "react";
import afrodroid from "../images/afrodroid.png";

const Navbar = () => {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <header>
      <a href="/">
        <img src={afrodroid} alt="profile-img" />
      </a>
      <div id="navigation">
        <nav ref={navRef}>
          <a id="home-link" href="/">
            HOME
          </a>
          <a href="https://drive.google.com/file/d/1ipQaSQIHZLaKRTyjT6EujRwzm5s7Xdt_/view?usp=sharing">
            RESUME
          </a>
          <a href="https://medium.com/@whoispope_">BLOG</a>
          <a href="https://wa.me/message/GRFP6ENKT6SLG1">CONNECT</a>

          <button className="nav-btn nav-close-btn" onClick={showNavbar}>
            <FaTimes />
          </button>
        </nav>

        <button className="nav-btn" onClick={showNavbar}>
          <FaBars />
        </button>
      </div>
    </header>
  );
};

export default Navbar;
