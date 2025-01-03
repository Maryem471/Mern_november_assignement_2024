import React from "react";
import { useParams } from "react-router-dom";

function DisplayNumber() {
  const { number } = useParams();
  
  return (
    <div>
      <h1>
        {isNaN(+number) ? "Invalid number" : `The number is: ${number}`}
      </h1>
    </div>
  );
}

export default DisplayNumber;
