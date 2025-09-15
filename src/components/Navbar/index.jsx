import React from "react";
import { NavLink } from "react-router";

export const Navbar = () => {
  return (
    <nav aria-label="Main navigation">
      <ul style={{ display: "flex", listStyle: "none", padding: 0, margin: 0 }}>
        <li>
          <NavLink to={"/"} aria-label="Navigate to Home page">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to={"/menu"} aria-label="Navigate to Menu page">
            Menu
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/reservation"}
            aria-label="Navigate to Reservation page"
          >
            Reservation
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
