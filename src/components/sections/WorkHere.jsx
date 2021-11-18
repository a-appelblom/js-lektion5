import React from "react";
import Button from "../common/Button";
import Sectionheading from "../common/SectionHeading";
import "./WorkHere.css";

const Workhere = () => {
  return (
    <section className="WorkHere">
      <Sectionheading title="För dig som jobbar eller vill jobba med oss." />
      <div className="WorkHere-CTA">
        <Button filled>Jobba hos oss</Button>
        <Button>Academedia som arbetsgivare</Button>
      </div>
    </section>
  );
};

export default Workhere;
