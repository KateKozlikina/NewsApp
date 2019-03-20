import React from 'react';
import {
  Navbar,
  Button,
  NavbarBrand,
} from 'reactstrap';
import { Redirect, Link } from 'react-router-dom';
import { FaUserCircle } from "react-icons/fa";
import { DiReact } from "react-icons/di";
import { IoIosLogIn } from "react-icons/io";
import { IoIosLogOut } from "react-icons/io";

const NavBar = () => (
  <div>
    <Navbar color="primary" light expand="md">
      <div className="container">
        <NavbarBrand href="/"><DiReact size={64} />Home</NavbarBrand>
        <div className="d-flex justify-content-end">      
        <Button className="nav-item" >
        <Link to="/news">
          News</Link>
        </Button>
        <Link to="/profile">
          <FaUserCircle size={32} color="white"/>
        </Link>
        <Link to="/login">
          <IoIosLogIn size={32} color="white" />
        </Link>
        </div>
      </div>
    </Navbar>
  </div>
);

export default NavBar;
