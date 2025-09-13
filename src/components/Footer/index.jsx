import React from "react";

export const Footer = () => {
  return (
    <section className="footer">
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
          <a href="/">Home</a>
          <a href="/reservations">Reservations</a>
          <a href="/menu">Menu</a>
        </div>
        <p>Master Canteen, Bhubaneswar, India, +91 0000000000</p>
        <div>
          <a href="/">Home</a>
          <a href="/reservations">Reservations</a>
          <a href="/menu">Menu</a>
        </div>
      </div>
    </section>
  );
};
