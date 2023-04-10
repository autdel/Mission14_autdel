import React from "react";
import { Nav, NavLink, NavMenu } from "./NavbarElements";

// Navbar constant that contains the route paths to different pages
const Navbar = () => {
  return (
    <>
      <Nav>
        <NavMenu>
          <NavLink to="/">Homepage</NavLink>
          <NavLink to="/mypodcasts">My Podcasts</NavLink>
          <NavLink to="/movies">Movie Collection</NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};

export default Navbar;
