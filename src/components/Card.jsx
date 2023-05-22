import React from "react";

const Card = ({ cardImage, cardTitle, cardContent }) => {
  return (
    <div className="card">
      <div className="cardWrapper">
        <img src={cardImage} alt="" className="cardImage" />
        <span className="cardTitle">{cardTitle}</span>
        <span className="cardContent">{cardContent}</span>
      </div>
    </div>
  );
};

export default Card;
