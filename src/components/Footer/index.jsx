import React from "react";
import { NavLink } from "react-router";

export const Footer = () => {
  return (
    <footer>
      <div>
        <img src="lemon.png" alt="footer" />
        <h2>Little Lemon</h2>
      </div>
      <p>
        We are passionate about serving fresh, delicious meals made with love
        and the finest ingredients. We are your go-to spot for unforgettable
        dining experiences, whether it’s a cozy night out or a festive
        celebration.
      </p>
      <div className="footer-links-container">
        <div>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/reservations">Reservations</NavLink>
          <NavLink to="/menu">Menu</NavLink>
        </div>
        <p>Master Canteen, Bhubaneswar, India, +91 0000000000</p>
        <div>
          <a href="https://mail.google.com" target="_blank" rel="noopener noreferrer">Gmail</a>
          <a href="https://fb.com" target="_blank" rel="noopener noreferrer">Facebook</a>
          <a href="https://reddit.com" target="_blank" rel="noopener noreferrer">Reddit</a>
        </div>
      </div>
    </footer>
  );
};
