import React from "react";
import Tecla from "../images/tecla.png";
import Dinma from "../images/dinma.png";
import Tj from "../images/tj.png";
import Apollo from "../images/apollo.png";
import "../styles/reviews.scss";

import Flicking from "@egjs/react-flicking";
import "@egjs/react-flicking/dist/flicking-inline.css";
function Reviews() {
  return (
    <div className="reviews">
      <h2>APPRAISALS</h2>
      <Flicking
        align="center"
        defaultIndex={1}
        horizontal={true}
        // moveType={"strict"}
        circular={true}
        onMoveEnd={(e) => {
          console.log(e);
        }}
      >
        <div className="reviews-container panel">
          <div className="reviews-text">
            <h4>
              "I’m so impressed with the work done, it’s amazing, will
              definitely recommend to others."
            </h4>
          </div>
          <div className="reviews-img">
            <img src={Tecla} alt="tecla" />
            <h5>Tecular Iwuh</h5>
            <p>UI/UX Designer</p>
          </div>
        </div>

        <div className="reviews-container panel">
          <div className="reviews-text">
            <h4>
              "I would recommend pope anytime. He is very professional, His
              project is user friendly with high quality and original content."
            </h4>
          </div>
          <div className="reviews-img">
            <img src={Dinma} alt="dinma" />
            <h5>Maryann Ndule</h5>
            <p>Senior Accountant Sankore Investment</p>
          </div>
        </div>

        <div className="reviews-container panel">
          <div className="reviews-text">
            <h4>
              "Pope is always diligent to his work. He has one of the best
              quality out there."
            </h4>
          </div>
          <div className="reviews-img">
            <img src={Tj} alt="tj" />
            <h5>Thompson Precious</h5>
            <p>Co-founder Swiftransact</p>
          </div>
        </div>

        <div className="reviews-container panel">
          <div className="reviews-text">
            <h4>
              "Pope is one of the most delightful person I had the pleasure of
              working with in my career. Not only did he have a unique ability
              to keep the team organized, but his constant communication helped
              lift our spirits in challenging situations."
            </h4>
          </div>
          <div className="reviews-img">
            <img src={Apollo} alt="apollo" />
            <h5>Joseph Minijere</h5>
            <p>Graphic Designer</p>
          </div>
        </div>
      </Flicking>
    </div>
  );
}

export default Reviews;
