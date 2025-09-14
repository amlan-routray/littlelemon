import React from "react";
import { fetchFakeApiData } from "../../utilities/fetchFakeApiData";
import { MenuCard } from "../../common/MenuCard";

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
    <section className="menu">
      <h2>Explore our menu</h2>
      <div>
        {menuItems.map(({ imgUrl, title, description }) => (
          <MenuCard imgUrl={imgUrl} title={title} description={description} key={title} />
        ))}
      </div>
    </section>
  );
};
