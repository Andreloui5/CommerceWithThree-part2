import React from "react";

const FontAwesome = ({ isCartOpen }) => {
  return isCartOpen ? (
    <i className="fas fa-times" style={{ fontSize: "20px" }}></i>
  ) : (
    <i className="fas fa-shopping-cart" style={{ fontSize: "20px" }}></i>
  );
};
export default FontAwesome;
