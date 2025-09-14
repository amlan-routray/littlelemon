// Private
const mockedResponses = {
  forTopPicks: [
    {
      badgeTitle: "Greek Salad",
      imgUrl: "greeksalad.jpg",
    },
    {
      badgeTitle: "Lemon Dessert",
      imgUrl: "lemon_dessert.jpg",
    },
    {
      badgeTitle: "Bruchetta",
      imgUrl: "bruchetta.jpg",
    },
  ],
  forMenuItems: [
    {
      title: "Greek Salad",
      description:
        "Fresh and vibrant, made with crisp cucumbers, ripe tomatoes, olives, and tangy feta cheese. Perfectly drizzled with olive oil and herbs for a light, refreshing taste.",
      imgUrl: "greeksalad.jpg",
    },
    {
      title: "Lemon Dessert",
      description:
        "Fresh and vibrant, made with crisp cucumbers, ripe tomatoes, olives, and tangy feta cheese. Perfectly drizzled with olive oil and herbs for a light, refreshing taste.",
      imgUrl: "lemon_dessert.jpg",
    },
    {
      title: "Bruchetta",
      description:
        "Fresh and vibrant, made with crisp cucumbers, ripe tomatoes, olives, and tangy feta cheese. Perfectly drizzled with olive oil and herbs for a light, refreshing taste.",
      imgUrl: "bruchetta.jpg",
    },
    {
      title: "Savory Eclairs",
      description:
        "Fresh and vibrant, made with crisp cucumbers, ripe tomatoes, olives, and tangy feta cheese. Perfectly drizzled with olive oil and herbs for a light, refreshing taste.",
      imgUrl: "savory_eclairs.jpg",
    },
  ],
};

// Public
export const fetchFakeApiData = (key) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockedResponses[key]);
    }, 1000);
  });
};
