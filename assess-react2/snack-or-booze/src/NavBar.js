import React from "react";
import "./css/NavBar.css";
import {NavLink} from "react-router-dom";
import { Navbar, Nav, NavItem } from "reactstrap";


/**
 * Simple NavBar links to the snacks, drinks, or current order
 */
function NavBar() {
  return (
    <div>
      <Navbar expand="md">
        <NavLink exact to="/" className="navbar-brand">
          Snack or Booze
        </NavLink>

        <Nav className="ml-auto" navbar>
          <NavItem>
            <NavLink to="/order">Your Order</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/snacks">Snacks</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/drinks">Drinks</NavLink>
          </NavItem>
        </Nav>
      </Navbar>
    </div>
  );
}

export default NavBar;
