import Button from "../common/Button";
import React from "react";
import "./Education.css";
import Infocard from "../common/InfoCard";
import Sectionheading from "../common/SectionHeading";

const data = [
  {
    title: "Förskolor",
    subtitle:
      "AcadeMedia har nära 300 förskolor i Sverige, Norge och Tyskland.",
    image: {
      url: "https://images.unsplash.com/photo-1568572306502-33a58414762d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=880&q=80",
      alt: "Small child smiling at the camera",
    },
  },
  {
    title: "Grundskolor",
    subtitle:
      "AcadeMedia har 75 grundskolor varav 37 med integrerade förskolor.",
    image: {
      url: "https://images.unsplash.com/photo-1503944583220-79d8926ad5e2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=880&q=80",
      alt: "2 young children smiling at the camera",
    },
  },
  {
    title: "Gymnasieskolor",
    subtitle:
      "AcadeMedia har ett stort antal gymnasieskolor med både teoretiska och praktiska inriktningar. Det finns skolor med program och inriktningar inom exempelvis musik, design och teknik samt skolor med mer traditionella program som naturvetenskap, samhälle och ekonomi.",
    image: {
      url: "https://images.unsplash.com/photo-1568822617270-2c1579f8dfe2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=880&q=80",
      alt: "Woman in a library",
    },
  },
  {
    title: "Vuxenutbildningar",
    subtitle:
      "AcadeMedias segment för vuxenutbildning är Sveriges största och ledande aktör inom vuxenutbildning. Det finns ett brett utbud av kurser och utbildningar inom komvux, yrkeshögskola, arbetsmarknadstjänster och företagsutbildningar.",
    image: {
      url: "https://images.unsplash.com/photo-1623122245120-7eef6faa39c6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=880&q=80",
      alt: "Women sitting by a desk learning to code",
    },
  },
];

const Education = () => {
  return (
    <section className="Education">
      <Sectionheading
        title="Våra utbildningar"
        subtitle="AcadeMedia skapar möjligheter för människor att utvecklas. Vi finns i
        hela utbildningskedjan, från förskola till vuxenutbildning."
      />
      <div className="Education-grid">
        {data.map((item) => (
          <Infocard
            title={item.title}
            subtitle={item.subtitle}
            image={item.image}
          />
        ))}
      </div>
      <Button>Mer om våra utbildningar</Button>
    </section>
  );
};

export default Education;
