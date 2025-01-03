import React, { useState } from 'react';
import BoxForm from './components/BoxForm';
import BoxDisplay from './components/BoxDisplay';
import './App.css';

function App() {
  const [boxes, setBoxes] = useState([]);

  const addBox = (newBox) => {
    setBoxes([...boxes, newBox]);
  };

  const removeBox = (index) => {
    const filteredBoxes = boxes.filter((_, i) => i !== index);
    setBoxes(filteredBoxes);
  };

  return (
    <div className="App">
      <h1>Color Box Generator</h1>
      <BoxForm onAddBox={addBox} />
      <BoxDisplay boxes={boxes} onRemoveBox={removeBox} />
    </div>
  );
}

export default App;
