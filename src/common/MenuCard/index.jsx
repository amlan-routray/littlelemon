import React from "react";
import { Dialog } from "../Dialog";

export const MenuCard = ({ imgUrl, title, description }) => {
  const [isDialogOpen, setDialogOpen] = React.useState(false);
  const handleOrder = () => {
    setDialogOpen(true);
  };

  return (
    <section className="menucard">
      <img
        src={imgUrl}
        alt="menu item"
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = "placeholder.png";
        }}
      />
      <div>
        <h2>{title}</h2>
        <p>{description}</p>
        <button onClick={handleOrder}>Order Now</button>
      </div>
      <Dialog isOpen={isDialogOpen} onClose={() => setDialogOpen(false)}>
        <h2 style={{color:'green'}}>Order Successful</h2>
        <p>{title} has been booked for your table</p>
      </Dialog>
    </section>
  );
};
