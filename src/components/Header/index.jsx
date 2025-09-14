import React from "react";

export const Header = ({ headerHeight }) => {
  const calculateAlpha = () => {
    const m = -1 / 840;
    const c = 15 / 14;
    return m * headerHeight + c;
  };
  const getHeroImage = () => {
    const { pathname } = window.location;
    if (pathname === "/menu") return "menu_hero.jpg";
    if (pathname === "/reservation") return "reservation_hero.jpg";
    return "home_hero.jpg";
  };
  return (
    <header>
      <img
        style={{ height: `${headerHeight}px` }}
        src={getHeroImage()}
        alt="header"
      />
      <div
        style={{
          height: `${headerHeight}px`,
          backgroundColor: `rgba(73,94,87,${calculateAlpha()})`,
        }}
      />
      <div
        className="header-text-block"
        style={{ display: headerHeight < 320 ? "none" : "flex" }}
      >
        <img src="lemon.png" alt="main icon" />
        <h1>
          little
          <br />
          lemon
        </h1>
      </div>
      <h1 style={{ display: headerHeight > 320 ? "none" : "inline" }}>
        little lemon
      </h1>
    </header>
  );
};
