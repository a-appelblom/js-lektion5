import "./FAQ.css";
import React from "react";
import Qanda from "../common/QAndA";
import Button from "../common/Button";
import Sectionheading from "../common/SectionHeading";

const data = [
  {
    question: "Vem äger AcadeMedia?",
    answer:
      "AcadeMedia är ett börsnoterat bolag och huvudägare sedan 2016 är familjeföretaget Mellby Gård. Här kan du läsa mer om hur de ser på sitt ägande i AcadeMedia.",
  },
  {
    question: "Jag vill jobba hos er. Var hittar jag lediga jobb?",
    answer:
      "Alla våra lediga jobb och hur det är att arbeta inom AcadeMedia hittar du information om på vår karriärsida.",
  },
  {
    question: "Hur många går på någon av AcadeMedias utbildningar?",
    answer:
      "Under ett år går över 180 000 barn, elever och deltagare på någon av Academedias utbildningar.",
  },
  {
    question:
      "Jag har svårt att bestämma mig för vilken utbildning jag ska välja. Var kan jag få hjälp?",
    answer:
      "Under ”våra utbildningar” hittar du samtliga av våra utbildningar. Testa också vår tjänst snackamedsyv.",
  },
];

const Faq = () => {
  return (
    <div className="FAQ">
      <Sectionheading
        title="Vanliga frågor"
        subtitle="Vi får många frågor om våra verksamheter. Här hittar du de just nu vanligaste frågorna och svaren."
      />
      <div className="FAQ-questions">
        {data.map((item) => (
          <Qanda question={item.question} answer={item.answer} />
        ))}
      </div>
      <Button>Till alla vanliga frågor</Button>
    </div>
  );
};

export default Faq;
