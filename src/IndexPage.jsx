import "./App.css";
import Hero from "./components/sections/Hero";
import Education from "./components/sections/Education";
import Iconsbanner from "./components/sections/IconsBanner";
import Shortcuts from "./components/sections/Shortcuts";
import Faq from "./components/sections/FAQ";
import Workhere from "./components/sections/WorkHere";
import Press from "./components/sections/Press";
import Investors from "./components/sections/Investors";

function App() {
  return (
    <div className="App">
      <Hero />
      <Education />
      <Iconsbanner />
      <Press />
      <Faq />
      <Shortcuts />
      <Investors />
      <Workhere />
    </div>
  );
}

export default App;
