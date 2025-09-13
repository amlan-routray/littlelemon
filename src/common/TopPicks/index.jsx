import React from "react";

export const TopPicks = ({imgUrl, badgeTitle}) => {
  return (
    <section className="toppicks">
      <img
        src={imgUrl}
        alt="top picks item"
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = "placeholder.png";
        }}
      />
      <p>
        {badgeTitle}
      </p>
    </section>
  );
};
