// Import our dependencies
import React, { useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import Animation from "./Animation";
import "./style.css";

// Build a card that will show our products
function Item(props) {
  const [color, setColor] = useState();

  // need to take out the pTags included with description string
  // if value is null(the default), returns empty string
  const description =
    props.description !== null
      ? props.description.slice(3, props.description.length - 4)
      : "";

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
                onClick={() => setColor(props.variants[1].options[index].name)}
              ></Button>
            ))}
          </Col>
          <Col style={{ textAlign: "right" }}>
            <p>Price: {props.price.formatted_with_symbol}</p>
            <a href={props.checkout_url.display}>
              <Button id="buy" variant="primary">
                Buy Now
              </Button>
            </a>
          </Col>
        </Row>
      </Col>
    </Row>
  );
}

export default Item;
