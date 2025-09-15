import React from "react";
import { Dialog } from "../Dialog";

export const TopPicks = ({ imgUrl, badgeTitle }) => {
  const [isDialogOpen, setDialogOpen] = React.useState(false);

  const addOrder = () => {
    setDialogOpen(true);
  };

  return (
    <section
      className="toppicks"
      onClick={addOrder}
      aria-label={`Top pick: ${badgeTitle}`}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          addOrder();
        }
      }}
    >
      <img
        src={imgUrl}
        alt={`Image of ${badgeTitle}`}
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = "placeholder.png";
        }}
      />
      <p>{badgeTitle}</p>

      <Dialog
        isOpen={isDialogOpen}
        onClose={() => setDialogOpen(false)}
        aria-label={`Order confirmation for ${badgeTitle}`}
      >
        <h2 style={{ color: "green" }}>Order Successful</h2>
        <p>{badgeTitle} has been booked for your table</p>
      </Dialog>
    </section>
  );
};
