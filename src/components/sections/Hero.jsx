import Button from "../common/Button";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="Hero">
      <div className="Hero-content">
        <h1 className="Hero-title">
          Vi driver <span>utvecklingen</span> av framtidens utbildning
        </h1>
        <p className="Hero-subtitle">
          AcadeMedia består av människor som brinner för att skapa ett bättre
          och mer hållbart samhälle, med utbildning och lärande som grund.
        </p>
        <div className="Hero-CTA">
          <Button filled>Våra utbildningar</Button>
          <Button>Jobba hos oss</Button>
        </div>
      </div>
      <img
        className="Hero-image"
        src="https://images.unsplash.com/photo-1585158531004-3224babed121?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=880&q=80"
        alt="2 young children reading"
      />
    </section>
  );
};

export default Hero;
