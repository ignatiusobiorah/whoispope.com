import React from "react";
import "../styles/footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-grid-1">
        <div className="whoispope">
          <h4>WHOISPOPE</h4>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="https://drive.google.com/file/d/1ipQaSQIHZLaKRTyjT6EujRwzm5s7Xdt_/view?usp=sharing">
                Resume
              </a>
            </li>
            <li>
              <a href="https://medium.com/@whoispope_">Blog</a>
            </li>
            <li>
              <a href="https://wa.me/message/GRFP6ENKT6SLG1">Connect</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-grid-1">
        <div className="projects">
          <h4>PROJECTS</h4>
          <ul>
            <li>
              <a href="https://www.ecgemslimited.com/index.html">Ec Gems</a>
            </li>
            <li>
              <a href="https://www.ububa.org/training">Ububa</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-grid-2">
        <div className="social">
          <h4>SOCIAL</h4>
          <ul>
            <li>
              <i class="fa-brands fa-github"></i>
              <a href="https://github.com/ignatiusobiorah">Github</a>
            </li>
            <li>
              <i class="fa-brands fa-twitter"></i>
              <a href="https://twitter.com/whoispope_">Twitter</a>
            </li>
            <li>
              <i class="fa-brands fa-linkedin-in"></i>
              <a href="https://www.linkedin.com/in/ignatius-obiorah-5242a6191/">
                LinkedIn
              </a>
            </li>
            <li>
              <i class="fa-brands fa-medium"></i>
              <a href="https://medium.com/@whoispope_">Medium</a>
            </li>
            {/* <li>
              <i class="fa-brands fa-instagram"></i>
              <a href="/">Instagram</a>
            </li> */}
            <li>
              <i class="fa-brands fa-google"></i>
              <a href="https://mail.google.com/mail/u/0/#inbox?compose=new">
                Gmail
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-grid-2">
        <form>
          <h4>NEWSLETTER</h4>
          <p>Stay informed on latest updates about tech and exclusive offers</p>
          <input type="email" placeholder="Enter Your Email" />
          <button className="sub-btn">SUBSCRIBE</button>
        </form>
        <div className="copy-right">
          <p>Email: iobiorah23@gmail.com</p>
          <p>copyright 2022 @whoispope</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
