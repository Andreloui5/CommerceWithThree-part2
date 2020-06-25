import React from "react";
import { Col, Row } from "react-bootstrap";
import Animation from "./Animation";

const CartItem = (props) => {
  return (
    <>
      <Row>
        <Col>
          <div className="cartItem">
            <Animation {...props} />
          </div>
        </Col>
      </Row>
      <Row>
        <Col xs={9}>
          <Row>
            <h4>{props.name}</h4>
          </Row>
          <Row>
            <p>text</p>
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
