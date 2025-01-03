import React from "react";
import { useParams } from "react-router-dom";

function DisplayWord() {
  const { word } = useParams();

  return (
    <div>
      <h1>The word is: {word}</h1>
    </div>
  );
}

export default DisplayWord;
