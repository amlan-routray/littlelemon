import React from "react";
import { Dialog } from "../Dialog";

export const TopPicks = ({ imgUrl, badgeTitle }) => {
  const [isDialogOpen, setDialogOpen] = React.useState(false);
    const addOrder = () => {
      setDialogOpen(true);
    };
  return (
    <section className="toppicks" onClick={addOrder}>
      <img
        src={imgUrl}
        alt="top picks item"
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = "placeholder.png";
        }}
      />
      <p>{badgeTitle}</p>
      <Dialog isOpen={isDialogOpen} onClose={() => setDialogOpen(false)}>
        <h2 style={{ color: "green" }}>Order Successful</h2>
        <p>{badgeTitle} has been booked for your table</p>
      </Dialog>
    </section>
  );
};
