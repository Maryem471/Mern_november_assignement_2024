import React from "react";
import { useParams } from "react-router-dom";

function DisplayStyledWord() {
  const { word, color1, color2 } = useParams();

  return (
    <div
      style={{
        color: color1,
        backgroundColor: color2,
        padding: "20px",
        borderRadius: "5px",
        display: "inline-block",
      }}
    >
      <h1>{word}</h1>
    </div>
  );
}

export default DisplayStyledWord;
