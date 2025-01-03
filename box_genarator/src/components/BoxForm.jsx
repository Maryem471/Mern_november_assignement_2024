import React, { useState } from 'react';

function BoxForm({ onAddBox }) {
  const [color, setColor] = useState('');
  const [size, setSize] = useState(50);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (color.trim() === '' || size <= 0) return;

    onAddBox({ color, size: parseInt(size) });
    setColor('');
    setSize(50);
  };

  return (
    <form onSubmit={handleSubmit} className="box-form">
      <div>
        <label>Color: </label>
        <input
          type="text"
          value={color}
          onChange={(e) => setColor(e.target.value)}
          placeholder="Enter a color"
        />
      </div>
      <div>
        <label>Size: </label>
        <input
          type="number"
          value={size}
          onChange={(e) => setSize(e.target.value)}
          placeholder="Enter size in px"
        />
      </div>
      <button type="submit">Add Box</button>
    </form>
  );
}

export default BoxForm;
