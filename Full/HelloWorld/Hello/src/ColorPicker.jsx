import React, { useState } from "react";
function ColorPicker() {
  const [color, setColor] = useState("#f08080");
  function handleColorChange(e) {
    setColor(e.target.value);
  }
  return (
    <div className="color-picker-container">
      <h1>Color Picker</h1>
      <div className="color-display" style={{ backgroundColor: color }}>
        <p>Select a Color</p>
      </div>
      <label>Select a Color: </label>
      <input type="color" value={color} onChange={handleColorChange} />
    </div>
  );
}

export default ColorPicker;
