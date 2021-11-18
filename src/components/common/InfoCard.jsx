import { BsArrowRight } from "react-icons/bs";
import React from "react";
import "./InfoCard.css";

const Infocard = ({ image = null, title = "", subtitle = "" }) => {
  return (
    <div className="InfoCard">
      {image && (
        <img className="InfoCard-image" src={image.url} alt={image.alt} />
      )}
      <h3 className="InfoCard-title">{title}</h3>
      <p className="InfoCard-subtitle">{subtitle}</p>
      <BsArrowRight size="50" className="InfoCard-arrow" />
    </div>
  );
};

export default Infocard;
