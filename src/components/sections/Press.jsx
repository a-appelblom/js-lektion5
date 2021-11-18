import React from "react";
import Sectionheading from "../common/SectionHeading";
import PressCard from "../common/PressCard";
import "./Press.css";
import Button from "../common/Button";

const data = [
  {
    title: "Medieblogg: Nej Aftonbladet, vi litar inte på att någon ljuger",
    subtitle: "På aftonbladets ledarsida...",
    type: "Blogg, Nyheter",
    date: "16 NOVEMBER 2021",
    image: {
      url: "https://images.unsplash.com/photo-1568572306502-33a58414762d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=880&q=80",
      alt: "Small child smiling at the camera",
    },
  },
  {
    title: "Rekordmånga deltar i internationella utbyten",
    subtitle: "Över 3 000 av Academedias elever och med...",
    type: "Debatt, Nyheter",
    date: "15 NOVEMBER 2021",
    image: {
      url: "https://images.unsplash.com/photo-1503944583220-79d8926ad5e2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=880&q=80",
      alt: "2 young children smiling at the camera",
    },
  },
  {
    title: "Blogg: Skolans metoder behövs i klimatomställningen",
    subtitle: "För att lyckas gå från ord till handling...",
    type: "Debatt, Nyheter",
    date: "12 NOVEMBER 2021",
    image: {
      url: "https://images.unsplash.com/photo-1503944583220-79d8926ad5e2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=880&q=80",
      alt: "2 young children smiling at the camera",
    },
  },
];

const Press = () => {
  return (
    <section className="Press">
      <Sectionheading title="Pressmeddelanden, nyheter och bloggar" />
      <div className="Press-grid">
        {data.map((item) => (
          <PressCard
            title={item.title}
            subtitle={item.subtitle}
            image={item.image}
            type={item.type}
            date={item.date}
          />
        ))}
      </div>
      <Button>Till vårt pressrum</Button>
    </section>
  );
};

export default Press;
