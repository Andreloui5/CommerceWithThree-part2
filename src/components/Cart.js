import React from "react";
import { useSpring, animated } from "react-spring";
import { Row, Col, Button } from "react-bootstrap";
import CartItem from "./CartItem";
import "./style.css";

function Cart(props) {
  const showCart = useSpring(
    props.isCartOpen
      ? {
          width: "30%",
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
      {props.cart !== undefined ? (
        <div>
          {props.cart.line_items.map((item) => (
            <CartItem
              key={item.id}
              uniqueId={item.product_id}
              number={props.number}
              updateCart={props.updateCart}
              {...item}
            />
          ))}
          <Row>
            <Col>
              <h3 id="total">
                Total: {props.cart.subtotal.formatted_with_symbol}
              </h3>
            </Col>
          </Row>
          <Row>
            <Col>
              <a href={props.cart.hosted_checkout_url}>
                <Button id="buy" variant="primary">
                  Buy Now
                </Button>
              </a>
            </Col>
          </Row>
        </div>
      ) : (
        <></>
      )}
    </animated.div>
  );
}

export default Cart;
