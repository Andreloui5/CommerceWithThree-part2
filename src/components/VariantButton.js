import React from "react";
import { Button, Col } from "react-bootstrap";

function VariantButton(props) {
  return (
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
  );
}

export default VariantButton;
