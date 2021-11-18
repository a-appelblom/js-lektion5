import React from "react";
import "./Shortcuts.css";
import InfoCard from "../common/InfoCard";
import Sectionheading from "../common/SectionHeading";

const data = [
  {
    title: "Vår öppna medarbetarwebb",
    subtitle:
      "På vår medarbetarwebb som är öppen för alla, hittar du som medarbetare nyheter, information och stödmaterial som hjälper dig i ditt arbete.",
  },
  {
    title: "Vårt hållbarhetsarbete",
    subtitle:
      "AcadeMedias främsta bidrag till ett hållbart samhälle är vår kärnverksamhet – god utbildning för alla (FN:s 4:e globala mål).",
  },
  {
    title: "Vårt kvalitetsarbete och våra kvalitetsresultat",
    subtitle:
      "Här kan du läsa mer om AcadeMediamodellen och de samlade kvalitetsresultaten för alla skolformer.",
  },
];

const Shortcuts = () => {
  return (
    <section className="Shortcuts">
      <Sectionheading title="Genvägar" />
      <div className="Shortcuts-grid">
        {data.map((item) => (
          <InfoCard title={item.title} subtitle={item.subtitle} />
        ))}
      </div>
    </section>
  );
};

export default Shortcuts;
