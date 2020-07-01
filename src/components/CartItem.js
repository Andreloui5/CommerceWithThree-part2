import React from "react";
import { Col, Row } from "react-bootstrap";
import Animation from "./Animation";

const CartItem = (props) => {
  const handleIncrement = (e) => {
    e.preventDefault();
    props.updateCart(props.id, props.number + 1);
  };

  const handleDecrement = (e) => {
    e.preventDefault();
    props.updateCart(props.id, props.number - 1);
  };

  return (
    <>
      <Row style={{ maxHeight: "250px" }}>
        <Col className="cartItem">
          <Animation {...props} />
        </Col>
      </Row>
      <Row className="cartInfo">
        <Col xs={9}>
          <Row>
            <h4>{props.name}</h4>
          </Row>
          <Row>
            <Col>
              <p>
                Quantity:{" "}
                <span>
                  <button className="quantityButton" onClick={handleDecrement}>
                    <i class="fas fa-minus"></i>
                  </button>
                </span>{" "}
                {props.number}{" "}
                <span>
                  <button className="quantityButton" onClick={handleIncrement}>
                    <i class="fas fa-plus"></i>
                  </button>
                </span>
              </p>
            </Col>
          </Row>
        </Col>
        <Col xs={3}>
          <h4> {props.price.formatted_with_symbol}</h4>
        </Col>
      </Row>
    </>
  );
};

export default CartItem;
