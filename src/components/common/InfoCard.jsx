import React from "react";
import "./InfoCard.css";

const Infocard = ({ image = null, title = "", subtitle = "" }) => {
  return (
    <div>
      {image && <img src={image.url} alt={image.alt} />}
      <h3>{title}</h3>
      <p>{subtitle}</p>
      <p>{"====>"}</p>
    </div>
  );
};

export default Infocard;
