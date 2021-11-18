import { BsArrowRight } from "react-icons/bs";
import React from "react";
import "./PressCard.css";

const PressCard = ({
  image = null,
  title = "",
  subtitle = "",
  type = "",
  date = "",
}) => {
  return (
    <div className="PressCard">
      {image && (
        <img className="PressCard-image" src={image.url} alt={image.alt} />
      )}
      <div>
        <p className="PressCard-type">{type} |</p>
        <p className="PressCard-date">{date}</p>
      </div>
      <h3 className="PressCard-title">{title}</h3>
      <p className="PressCard-subtitle">{subtitle}</p>
      <BsArrowRight size="50" className="PressCard-arrow" />
    </div>
  );
};

export default PressCard;
