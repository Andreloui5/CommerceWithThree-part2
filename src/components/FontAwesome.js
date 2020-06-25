import React from "react";

const FontAwesome = ({ isCartOpen, number }) => {
  // const numberOfItems = number !== undefined ? number : " ";
  return isCartOpen ? (
    <i
      className="fas fa-times"
      style={{ fontSize: "25px", padding: "12px" }}
    ></i>
  ) : (
    <div style={{ marginTop: "10px" }}>
      <i className="fas fa-shopping-cart" style={{ fontSize: "25px" }}></i>
      <p id="cartNumber">{number}</p>
    </div>
  );
};
export default FontAwesome;
