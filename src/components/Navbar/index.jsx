import React from "react";
import { NavLink } from "react-router";

export const Navbar = () => {
  return (
    <nav>
      <NavLink to={"/"}>Home</NavLink>
      <NavLink to={"/menu"}>Menu</NavLink>
      <NavLink to={"/reservation"}>Reservation</NavLink>
    </nav>
  );
};
