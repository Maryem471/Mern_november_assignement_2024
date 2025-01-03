import React from 'react';

function BoxDisplay({ boxes, onRemoveBox }) {
  return (
    <div className="box-container">
      {boxes.map((box, index) => (
        <div
          key={index}
          className="box"
          style={{
            backgroundColor: box.color,
            width: `${box.size}px`,
            height: `${box.size}px`,
          }}
        >
          <button className="remove-button" onClick={() => onRemoveBox(index)}>
            X
          </button>
        </div>
      ))}
    </div>
  );
}

export default BoxDisplay;
