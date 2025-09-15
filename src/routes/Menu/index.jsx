import React from "react";
import { fetchFakeApiData } from "../../utilities/fetchFakeApiData";
import { MenuCard } from "../../common/MenuCard";
import { Skeleton } from "../../common/Skeleton";

export const Menu = () => {
  const [menuItems, setMenuItems] = React.useState([]);

  React.useEffect(() => {
    const fetchMenuItems = async () => {
      const result = await fetchFakeApiData("forMenuItems");
      setMenuItems(result);
    };
    fetchMenuItems();
  }, []);

  return (
    <section className="menu" aria-label="Menu section">
      <h2 id="menu-heading">Explore our menu</h2>

      <div aria-labelledby="menu-heading">
        {menuItems.length ? (
          menuItems.map(({ imgUrl, title, description }) => (
            <MenuCard
              imgUrl={imgUrl}
              title={title}
              description={description}
              key={title}
            />
          ))
        ) : (
          <Skeleton
            style={{ width: "280px", height: "520px", marginRight: "16px" }}
            aria-label="Loading menu item"
          />
        )}
      </div>
    </section>
  );
};
