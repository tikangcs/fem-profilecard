import React from "react";
import ReactDOM from "react-dom";
import Card from "./components/Card.jsx";

export default function App() {
  return (
    <div>
      <Card />
    </div>
  );
}

ReactDOM.render(<App className="App" />, document.getElementById("root"));
