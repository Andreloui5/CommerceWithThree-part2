import React, { useState } from "react";
import { Navbar, Nav, Button } from "react-bootstrap";
import Cart from "./Cart";
import FontAwesome from "./FontAwesome";

function Navigation() {
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
        <Nav className="mr-auto">
          {/* <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link> */}
        </Nav>
        <Button
          variant="dark"
          onClick={() =>
            isCartOpen ? setIsCartOpen(false) : setIsCartOpen(true)
          }
        >
          {/* If cart is closed, show cart fontAwesome, if it's open, change font to an x */}
          <FontAwesome isCartOpen={isCartOpen} />
        </Button>
      </Navbar>
      {isCartOpen ? <Cart /> : <></>}
    </>
  );
}

export default Navigation;
