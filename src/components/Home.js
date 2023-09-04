import React from "react";
import "../styles/home.scss";
import Hello from "../images/hello2.png";
import Profile from "../images/profile1.png";

const Home = () => {
  return (
    <div className="home">
      <div className="home-text">
        <img src={Hello} alt="hello" />
        <p>
          I'm <span>Pope</span> a frontend developer with strong proficiency in
          React, always looking for opportunities to learn and improve my
          skills. I am passionate about creating intuitive and user-friendly web
          experiences for users. Additionally, I have a keen intrest in
          blockchain technology and i'm always exploring new ways to integrate
          it into my work. I am excited to bring my skills and knowledge to a
          team and help create innovative projects that push the boundaries of
          technology.
        </p>
        <a href="https://wa.me/message/GRFP6ENKT6SLG1">
          <button className="home-btn">
            CONNECT<i class="fa-solid fa-circle-arrow-right"></i>
          </button>
        </a>
      </div>
      <div className="home-img">
        <div className="home-img-container">
          <img src={Profile} alt="profile-img" />
        </div>
      </div>
    </div>
  );
};

export default Home;
