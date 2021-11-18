import { FaSchool } from "react-icons/fa";
import { IoIosPeople } from "react-icons/io";
import { GiArcheryTarget } from "react-icons/gi";
import "./IconsBanner.css";

import React from "react";
import Texticon from "../common/TextIcon";

const data = [
  {
    icon: FaSchool,
    text: "Fler än 660 skolor och vuxenutbildningar i Sverige och norra Europa.",
  },
  {
    icon: IoIosPeople,
    text: "Fler än 17 500 medarbetare",
  },
  {
    icon: GiArcheryTarget,
    text: "Hållbarhet genomsyrar alla delar av vårt arbete",
  },
];

const Iconsbanner = () => {
  return (
    <section className="IconsBanner">
      {data.map((item) => (
        <Texticon Icon={item.icon} text={item.text} />
      ))}
      {/* <Texticon
        Icon={FaSchool}
        text="Fler än 660 skolor och vuxenutbildningar i Sverige och norra Europa."
      />
      <Texticon
        Icon={FaSchool}
        text="Fler än 660 skolor och vuxenutbildningar i Sverige och norra Europa."
      />
      <Texticon
        Icon={FaSchool}
        text="Fler än 660 skolor och vuxenutbildningar i Sverige och norra Europa."
      /> */}
    </section>
  );
};

export default Iconsbanner;
