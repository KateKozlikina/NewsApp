import React from 'react';
import {
  Navbar,
  Button,
  NavbarBrand,
} from 'reactstrap';

const NavBar = () => (
  <div>
    <Navbar color="light" light expand="md">
      <NavbarBrand href="/">Home</NavbarBrand>
      <Button href="/profile">
        Profile
      </Button>
      <Button href="/news">
        News
      </Button>
      <Button href="/login">
        Login
      </Button>
    </Navbar>
  </div>
);

export default NavBar;
