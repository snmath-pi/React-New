import React, { useState } from "react";

function MyComponent2() {
  const [car, setCar] = useState({
    year: "2024",
    make: "Lamborghini",
    model: "Urus",
  });

  function handleYearChange(e) {
    setCar((c) => ({ ...c, year: e.target.value }));
  }
  function handleMakeChange(e) {
    setCar((c) => ({ ...car, make: e.target.value }));
  }
  function handleModelChange(e) {
    setCar((c) => ({ ...car, model: e.target.value }));
  }

  return (
    <div>
      <p>
        You favorite car is : {car.year} {car.make} {car.model}
      </p>
      <input type="number" value={car.year} onChange={handleYearChange} />
      <br />
      <input type="text" value={car.make} onChange={handleMakeChange} />
      <br />
      <input type="text" value={car.model} onChange={handleModelChange} />
      <br />
    </div>
  );
}

export default MyComponent2;
