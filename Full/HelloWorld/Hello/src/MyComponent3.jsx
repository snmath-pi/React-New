import React, { useState } from "react";

function MyComponent3() {
  const [foods, setFoods] = useState(["Apple", "Orange", "Banana"]);

  function handleAddFood() {
    const newFood = document.getElementById("foodinput").value;
    document.getElementById("foodinput").value = "";

    setFoods((f) => [...f, newFood]);
  }
  function handleRemoveFood(index) {
    setFoods(foods.filter((_, i) => i != index));
  }

  return (
    <div>
      <h2>List of Food</h2>
      <ul>
        {foods.map((food, index) => (
          <li key={index} onClick={() => handleRemoveFood(index)}>
            {food}
          </li>
        ))}
      </ul>
      <input type="text" id="foodinput" placeholder="Enter Food Name" />
      <button onClick={handleAddFood}>Add Food</button>
    </div>
  );
}

export default MyComponent3;
