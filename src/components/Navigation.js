import React, { useState } from "react";
import { Navbar, Nav, Button } from "react-bootstrap";
import Cart from "./Cart";

function Navigation() {
  const [isNavOpen, setIsNavOpen] = useState(false);

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
          onClick={() => (isNavOpen ? setIsNavOpen(false) : setIsNavOpen(true))}
        >
          <i className="fas fa-shopping-cart" style={{ fontSize: "20px" }}></i>
        </Button>
      </Navbar>
      {isNavOpen ? <Cart /> : <></>}
    </>
  );
}

export default Navigation;
