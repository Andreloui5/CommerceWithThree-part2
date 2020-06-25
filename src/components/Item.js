// Import our dependencies
import React, { useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import Animation from "./Animation";
import "./style.css";

// Build a card that will show our products
function Item(props) {
  const [color, setColor] = useState();
  const [optionId, setOptionId] = useState();
  // need to take out the pTags included with description string
  // if value is null(the default), returns empty string
  const description =
    props.description !== null
      ? props.description.slice(3, props.description.length - 4)
      : "";

  const variantsAvailable = props.variants !== undefined;

  const handleAddToCart = (e) => {
    e.preventDefault();
    optionId !== null
      ? props.addToCart(props.id, 1, { [props.variants[0].id]: optionId })
      : console.log("error adding item to cart");
  };

  return (
    <Row className="item">
      <Col sm={6} style={{ padding: 0 }}>
        <Animation {...props} color={color} />
      </Col>
      <Col className="info">
        <h2>{props.name}</h2>
        <br />
        <br />
        <p>{description}</p>
        <Row className="buttonRow">
          {/* checks for available color variants, and either renders buttons or an empty column */}
          {variantsAvailable ? (
            <Col>
              <p>Available Colors:</p>
              {/* maps through the different color variants, dynamically providing id name (to match CSS) and then provides correct hex color options */}
              {props.variants[0].options.map((variant, index) => (
                <Button
                  key={props.variants[1].options[index].name}
                  className={"colorButton"}
                  style={{
                    backgroundColor: props.variants[1].options[index].name,
                  }}
                  onClick={() =>
                    setColor(props.variants[1].options[index].name) &&
                    setOptionId(props.variants[0].options[index].id)
                  }
                ></Button>
              ))}
            </Col>
          ) : (
            <Col></Col>
          )}
          <Col style={{ textAlign: "right" }}>
            <p>Price: {props.price.formatted_with_symbol}</p>
            <Button id="buy" variant="primary" onClick={handleAddToCart}>
              Add to Cart
            </Button>
          </Col>
        </Row>
      </Col>
    </Row>
  );
}

export default Item;
