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
      <Button>
        Профиль
      </Button>
      <Button>
        Войти
      </Button>
    </Navbar>
  </div>
);

export default NavBar;
