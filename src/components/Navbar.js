import React from "react";
import { Navbar, NavbarBrand } from "reactstrap";

const Appbar = () => {
  return (
    <div>
      <Navbar color="dark" dark expand="sm">
        <NavbarBrand>Letter Generator</NavbarBrand>
      </Navbar>
    </div>
  );
};

export default Appbar;
