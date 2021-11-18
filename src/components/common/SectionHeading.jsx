import React from "react";
import "./SectionHeading.css";

const Sectionheading = ({ title, subtitle = "" }) => {
  return (
    <div className="SectionHeading">
      <h2 className="SectionHeading-title">{title}</h2>
      {subtitle && <p className="SectionHeading-subtitle">{subtitle}</p>}
    </div>
  );
};

export default Sectionheading;
