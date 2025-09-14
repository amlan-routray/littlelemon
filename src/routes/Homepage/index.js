import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router";

import { TopPicks } from "../../common/TopPicks";
import { fetchFakeApiData } from "../../utilities/fetchFakeApiData";
import { Skeleton } from "../../common/Skeleton";

export const HomePage = () => {
  const [topPicksData, setTopPicksData] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const fetchTopPicksData = async () => {
      const response = await fetchFakeApiData("forTopPicks");
      if (response) setTopPicksData(response);
    };
    fetchTopPicksData();
  }, []);

  const bookTableHandler = () => {
    navigate("/reservation");
  };

  return (
    <section className="homepage">
      <div>
        <h2>Top picks for the day</h2>
        <NavLink to={"/menu"}>Explore More</NavLink>
      </div>
      <div>
        {topPicksData.length ? (
          topPicksData.map(({ imgUrl, badgeTitle }) => (
            <TopPicks imgUrl={imgUrl} badgeTitle={badgeTitle} key={imgUrl} />
          ))
        ) : (
          <>
            <Skeleton style={{ width: "280px", height: "320px" }} />
            <Skeleton style={{ width: "280px", height: "320px" }} />
            <Skeleton style={{ width: "280px", height: "320px" }} />
          </>
        )}
      </div>
      <div className="homepage-book-table-section">
        <h2>Discover Flavors from Around the World</h2>
        <p>
          Explore a whole range of cuisines and satisfy your cravings. Whether
          you want to dine in or enjoy a meal at home, we’ve got you covered.
        </p>
        <button onClick={bookTableHandler}>Book a table</button>
      </div>
    </section>
  );
};
