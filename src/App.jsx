import "./App.css";
import MyComponent, { hej } from "./MyComponent";

function App() {
  // const str = "Från min parent";
  // console.log("App.js is running");

  // const obj = {
  //   a: "hej",
  //   b: "på",
  //   c: "dig",
  // };
  const arr = ["din", "fina", "fisk"];

  // Ett exempel på object-destructuring
  // const { a, b, c } = obj;
  // Ett exempel på array-destructuring
  // const [d, e, f] = arr;

  // function doStuff({ a, b, c }) {
  //   console.log(a);
  //   console.log(b);
  //   console.log(c);
  // }

  // doStuff();

  return (
    <div className="App">
      <h1>Hej från experiment komponent</h1>
      {/* <MyComponent str={str} doStuff={doStuff} /> */}
      <button
        onClick={() => {
          // doStuff(obj);

          // En ternary operator är som en inline if-else-sats
          // Syntaxen är ett condition  eg  3 <= 2
          // Följt av ett frågetecken därefter du anger vad som ska returneras om du får true.
          // Detta följs sedan av ett kolon som indikerar vad som ska hända om ditt condition inte blir true.
          arr.length > 3 ? alert("Too big") : alert("hej");
        }}
      >
        Click
      </button>
    </div>
  );
}

export default App;
