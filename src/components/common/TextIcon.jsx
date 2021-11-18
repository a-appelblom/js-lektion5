import React from "react";

const Texticon = ({ Icon, text }) => {
  return (
    <div>
      <Icon size="225" />
      <p>{text}</p>
    </div>
  );
};

export default Texticon;
