import React, { useState } from "react";

function MyComponent() {
  const [name, setName] = useState("Guest");

  const [quantity, setQuantity] = useState(0);

  const [comment, setComment] = useState("");

  const [payment, setPayment] = useState("");

  const handlePaymentChange = (e) => {
    setPayment(e.target.value);
  };
  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };
  function handleQuantityChange(e) {
    setQuantity(e.target.value);
  }

  function handleNameChange(e) {
    setName(e.target.value);
  }
  return (
    <div>
      <input value={name} onChange={handleNameChange} />
      <p>Name: {name}</p>

      <input value={quantity} onChange={handleQuantityChange} type="number" />
      <p>Quantity: {quantity}</p>

      <textarea
        value={comment}
        onChange={handleCommentChange}
        placeholder="Enter Delivery instructions"
      />
      <p>Comment: {comment}</p>

      <select value={payment} onChange={handlePaymentChange}>
        <option value="">Select an option</option>
        <option value="Visa">Visa</option>
        <option value="MasterCard">MasterCard</option>
        <option value="GiftCard">GiftCard</option>
      </select>
      <p>Payment: {payment}</p>
    </div>
  );
}

export default MyComponent;
