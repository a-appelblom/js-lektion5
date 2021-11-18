import React from "react";
import { BsCalendarPlus } from "react-icons/bs";
import Button from "../common/Button";
import Sectionheading from "../common/SectionHeading";
import "./Investors.css";

const Investors = () => {
  return (
    <section className="Investors">
      <Sectionheading title="Investerarrelationer" />
      <details className="Investors-details">
        <summary className="Investors-summary">
          <div className="Investors-summary-left">
            <p>30</p>
            <p>November</p>
          </div>
          <div className="Investors-summary-right">
            <p>Årsstämma 2021</p>
            <p>kl 14:00 -</p>
          </div>
        </summary>
        <div className="Investors-text">
          AcadeMedias årsstämma äger rum tisdagen den 30 november 2021 i
          Stockholm.
        </div>
        <a className="Investors-calendar">
          <BsCalendarPlus size="25" /> <span>Lägg till i kalendern</span>
        </a>
      </details>
      <Button>Se alla datum</Button>
    </section>
  );
};

export default Investors;
