import React from "react";
import { useSpring, animated } from "react-spring";
import "./style.css";

function Cart() {
  const showCart = useSpring({
    from: {
      right: "0%",
      width: "0%",
      background: "#eae6e5",
    },
    to: {
      width: "30%",
      background: "#2D3047",
    },
  });

  return (
    <animated.div className="cart" style={showCart}>
      <p>hi</p>
    </animated.div>
  );
}

export default Cart;
