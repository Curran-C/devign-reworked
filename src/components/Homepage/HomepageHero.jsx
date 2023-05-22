import React from "react";

const HomepageHero = () => {
  return (
    <div>
      <div className="heroSectionContainer">
        <div className="heroSectionWrapper">
          <img
            src="assets/homepage/heroTitleBg.png"
            alt=""
            className="heroTitleBgImage"
          />
          <span className="heroTitleText">DEVIGN</span>
          <span className="heroText">
            We Design, Develop & Launch your Website!
          </span>
        </div>
        <button className="titleButtonHeroSection titleButton">Hi!</button>
      </div>
    </div>
  );
};

export default HomepageHero;
