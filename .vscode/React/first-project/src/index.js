import React from "react";
import ReactDom from "react-dom/client";
// import "./index.css";

const carriers = [
  { carrier: "Web Development", color: "lightblue", emoji: "👌", id: 1 },
  { carrier: "Ethnical Hacking", color: "yellow", emoji: "👍", id: 2 },
  { carrier: "D J", color: "orange", emoji: "😊", id: 3 },
];

function App() {
  const color = false;
  const styles = { backgroundColor: "red" };

  return (
    <div className="container">
      {/* <Image />
      <Content /> */}
      <button onClick={!color}>Change</button>
    </div>
  );
}

let wifiAge = 30;

if (wifiAge === 30) {
  console.log("go born");
} else {
  console.log("use weapon");
}

wifiAge === 30 ? console.log("go born") : console.log("use weapon");

// function Image() {
//   return <img src="Images/wardude.jpg" alt="WarDude" />;
// }

// function Content() {
//   return (
//     <div className="content">
//       <h1>Ganiu Waris</h1>
//       <p>
//         My name is Waris, my nickname is WarDude I am going to become a Full
//         Stack Web developer, an Ethnical Hacker and a DJ , everything is just
//         with matter of time.
//       </p>
//       <Carrier />
//     </div>
//   );
// }

// function Carrier() {
//   return (
//     <div className="carriers">
//       {carriers.map((elem) => (
//         <div className="carrier" style={{ backgroundColor: elem.color }}>
//           <span>{elem.carrier}</span>
//           <span> {elem.emoji}</span>
//         </div>
//       ))}
//     </div>
//   );
// }

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
console.log("hello");
