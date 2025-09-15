import React from "react";
import { useLocation } from "react-router";

export const Header = ({ headerHeight }) => {
  const { pathname } = useLocation();

  const calculateAlpha = () => {
    const m = -1 / 840;
    const c = 15 / 14;
    return m * headerHeight + c;
  };

  const getHeroImage = () => {
    if (pathname === "/menu") return "menu_hero.jpg";
    if (pathname === "/reservation") return "reservation_hero.jpg";
    return "home_hero.jpg";
  };

  return (
    <header aria-label="Page header">
      {/* Hero image */}
      <img
        style={{ height: `${headerHeight}px` }}
        src={getHeroImage()}
        alt={
          pathname === "/menu"
            ? "Menu page hero image"
            : pathname === "/reservation"
            ? "Reservation page hero image"
            : "Home page hero image"
        }
      />

      {/* Overlay */}
      <div
        style={{
          height: `${headerHeight}px`,
          backgroundColor: `rgba(73,94,87,${calculateAlpha()})`,
        }}
        aria-hidden="true"
      />

      {/* Header text block for large headers */}
      <div
        className="header-text-block"
        style={{ display: headerHeight < 320 ? "none" : "flex" }}
        aria-label="Brand title"
      >
        <img src="lemon.png" alt="Little Lemon main icon" />
        <h1>
          little
          <br />
          lemon
        </h1>
      </div>

      {/* Header text for small headers */}
      <h1
        style={{ display: headerHeight > 320 ? "none" : "inline" }}
        aria-label="Brand title"
      >
        little lemon
      </h1>
    </header>
  );
};
