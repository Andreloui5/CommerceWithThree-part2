import React, { useState, useEffect } from "react";
import { useSpring, animated } from "react-spring";
import CartItem from "./CartItem";
import "./style.css";

function Cart(props) {
  const showCart = useSpring(
    props.isCartOpen
      ? {
          width: "50%",
          background: "#2D3047",
          opacity: 1,
        }
      : {
          width: "0%",
          background: "#eae6e5",
          opacity: 0,
        }
  );

  return (
    <animated.div className="cart" style={showCart}>
      <>
        {props.cart !== undefined ? (
          props.cart.line_items.map((item) => (
            <CartItem key={item.id} uniqueId={item.product_id} {...item} />
          ))
        ) : (
          <></>
        )}
        <p className="cart-total">
          {/* Total: {props.subtotal.formatted_with_symbol} */}
        </p>
      </>

      {/* : (<></>) */}
    </animated.div>
  );
}

export default Cart;
