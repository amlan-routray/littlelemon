import React from "react";
import { Dialog } from "../Dialog";

export const MenuCard = ({ imgUrl, title, description }) => {
  const [isDialogOpen, setDialogOpen] = React.useState(false);

  const handleOrder = () => {
    setDialogOpen(true);
  };

  return (
    <section className="menucard" aria-label={`Menu item: ${title}`}>
      <img
        src={imgUrl}
        alt={`Image of ${title}`}
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = "placeholder.png";
        }}
      />
      <div>
        <h2>{title}</h2>
        <p>{description}</p>
        <button onClick={handleOrder} aria-label={`Order ${title} now`}>
          Order Now
        </button>
      </div>

      <Dialog
        isOpen={isDialogOpen}
        onClose={() => setDialogOpen(false)}
        aria-label={`Order confirmation for ${title}`}
      >
        <h2 style={{ color: "green" }}>Order Successful</h2>
        <p>{title} has been booked for your table</p>
      </Dialog>
    </section>
  );
};
