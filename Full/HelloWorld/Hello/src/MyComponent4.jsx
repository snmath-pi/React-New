import React, { useState } from "react";

function MyComponent4() {
  const [cars, setCars] = useState([]);
  const [carYear, setCarYear] = useState(new Date().getFullYear());
  const [carMake, setCarMake] = useState("");
  const [carModel, setCarModel] = useState("");

  function handleAddCar() {
    const newCar = { year: carYear, make: carMake, model: carModel };

    setCars((c) => [...c, newCar]);

    setCarYear(new Date().getFullYear());
    setCarMake("");
    setCarModel("");
  }
  function handleRemoveCar(index) {
    setCars((c) => c.filter((_, i) => i != index));
  }
  function handleYearChange(e) {
    setCarMake(e.target.value);
  }

  function handleMakeChange(e) {
    setCarMake(e.target.value);
  }

  function handleModelChange(e) {
    setCarModel(e.target.value);
  }

  return (
    <div>
      <h2>List of Car Object</h2>
      <ul>
        {cars.map((car, index) => (
          <li key={index} onClick={() => handleRemoveCar(index)}>
            {car.year} {car.make} {car.model}
          </li>
        ))}
      </ul>
      <input type="number" value={carYear} onChange={handleYearChange} />
      <br />
      <input
        type="text"
        value={carMake}
        onChange={handleMakeChange}
        placeholder="Enter Car Make"
      />{" "}
      <br />
      <input
        type="text"
        value={carModel}
        onChange={handleModelChange}
        placeholder="Enter Car Model"
      />{" "}
      <br />
      <button onClick={handleAddCar}>Add Car</button>
    </div>
  );
}

export default MyComponent4;
