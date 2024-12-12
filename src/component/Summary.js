import React from "react";
import { useSelector } from "react-redux";

const Summary = () => {
  // Accessing the items in the cart
  const items = useSelector((state) => state.cart.cart);

  // Calculating total quantity and total price
  const totalQuantity = items.reduce((total, item) => total + item.quantity, 0);
  const totalAmount = items.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="card border-success mb-3 bg-dark text-white w-100" style={{ height: "60%" }}>
      <div className="card-header bg-transparent border-success">Summary</div>
      <div className="card-body text-white">
        <div className="d-flex justify-content-between">
          <p className="card-text">Total Quantity:</p>
          <p>{totalQuantity}</p>
        </div>
        <div className="d-flex justify-content-between">
          <p className="card-text">Total Amount:</p>
          <p>${totalAmount}</p>
        </div>
      </div>
      <div className="card-footer bg-transparent border-success">
        Total Price - <span>${totalAmount}</span>
      </div>
    </div>
  );
};

export default Summary;
