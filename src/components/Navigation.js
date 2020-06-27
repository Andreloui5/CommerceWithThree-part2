import React, { useState } from "react";
import { Navbar, Nav, Button } from "react-bootstrap";
import Cart from "./Cart";
import FontAwesome from "./FontAwesome";

function Navigation(props) {
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <>
      <Navbar
        bg="dark"
        variant="dark"
        sticky="top"
        className="mainNav"
        style={{ zIndex: 20 }}
      >
        <Navbar.Brand href="#home">Commerce</Navbar.Brand>
        <Nav className="mr-auto"></Nav>
        <Button
          id="cartButton"
          variant="dark"
          onClick={() =>
            isCartOpen ? setIsCartOpen(false) : setIsCartOpen(true)
          }
        >
          {/* If cart is closed, show cart fontAwesome, if it's open, change font to an x */}
          <FontAwesome
            isCartOpen={isCartOpen}
            // number={props.cart.total_unique_items}
          />
        </Button>
      </Navbar>
      <Cart
        isCartOpen={isCartOpen}
        cart={props.cart}
        products={props.products}
      />
    </>
  );
}

export default Navigation;
