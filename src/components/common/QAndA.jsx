import React from "react";
import "./QAndA.css";

const Qanda = ({ question = "", answer = "" }) => {
  return (
    <div className="QAndA">
      <details className="QAndA-details">
        <summary className="QAndA-summary">{question}</summary>
        {answer}
      </details>
    </div>
  );
};

export default Qanda;
