import React, { useState } from 'react';


function PersonCard({ firstName, lastName, age, hairColor }) {
  const [currentAge, setCurrentAge] = useState(age);

  const handleBirthday = () => {
    setCurrentAge(currentAge + 1);
  };

  return (
    <div className="person-card">
      <h2>{lastName}, {firstName}</h2>
      <p>Age: {currentAge}</p>
      <p>Hair Color: {hairColor}</p>
      <button onClick={handleBirthday}>Birthday Button</button>
    </div>
  );
}

export default PersonCard;
