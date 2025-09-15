import React from "react";
import { NavLink } from "react-router";

export const Footer = () => {
  return (
    <footer aria-label="Footer">
      <div aria-label="Brand information">
        <img src="lemon.png" alt="Little Lemon logo" />
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
          <NavLink to="/" aria-label="Navigate to Home page">
            Home
          </NavLink>
          <NavLink
            to="/reservations"
            aria-label="Navigate to Reservations page"
          >
            Reservations
          </NavLink>
          <NavLink to="/menu" aria-label="Navigate to Menu page">
            Menu
          </NavLink>
        </div>

        <p aria-label="Contact information">
          Master Canteen, Bhubaneswar, India, +91 0000000000
        </p>

        <div aria-label="Social media links">
          <a
            href="https://mail.google.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Open Gmail in new tab"
          >
            Gmail
          </a>
          <a
            href="https://fb.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Open Facebook in new tab"
          >
            Facebook
          </a>
          <a
            href="https://reddit.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Open Reddit in new tab"
          >
            Reddit
          </a>
        </div>
      </div>
    </footer>
  );
};
