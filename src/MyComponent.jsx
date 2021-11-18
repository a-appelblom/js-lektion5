/*
En vanlig react komponent.

En komponent kommer alltid att returnera JSX. DVS html liknande syntax.
Komponenters props kommer ofta genom att man gör object destructuring på variabeln props direkt i argument-parentesen
Allting kan skickas som props, objekt, arrayer, funktioner osv.
*/
const MyComponent = ({ str, doStuff }) => {
  console.log(str);
  const childObj = {
    a: "Vad",
    b: "schysst",
    c: "gjort",
  };
  doStuff(childObj);
  return (
    <div>
      {/* I React så ser kommentarer ut såhär. */}
      {/* När vi i våran HTML har måsvingar '{}' så betyder det att där använder vi en variabel eller javascript
          Valid javascript kan skrivas i dessa måsvingar. Exempelvis en ternary operator.
       */}
      <p>Hejsan {str} hoppsan</p>
    </div>
  );
};

// Du kan ha hur många exporter som helst från en fil
export const hej = "hej";

// Men det går att max ha en default export
export default MyComponent;
