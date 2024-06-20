import React, { useState } from "react";

function Counter() {
  const [Count, setCount] = useState(0);

  const Increment = () => {
    // setCount(Count + 1); // doing this time it updates only once because they all get patched together

    // these are put in a queue and reacts updates one by one in order
    setCount((c) => c + 1);
    setCount((c) => c + 1);
    setCount((c) => c + 1);
    // increments count by 3 using this
    // setCount((Count) => Count + 1);
    // setCount((Count) => Count + 1);
    // setCount((Count) => Count + 1);
  };
  const Decrement = () => {
    // setCount(Count - 1);

    setCount((c) => c - 1);
    setCount((c) => c - 1);
  };
  const Reset = () => {
    setCount(0);
  };

  return (
    <div className="counter-container">
      <p className="counter-display">{Count}</p>
      <button className="counter-button" onClick={Increment}>
        Increment
      </button>
      <button className="counter-button" onClick={Decrement}>
        Decrement
      </button>
      <button className="counter-button" onClick={Reset}>
        Reset
      </button>
    </div>
  );
}

export default Counter;
