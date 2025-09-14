// Private
const mockedResponses = {
  forTopPicks: [
    {
      badgeTitle: "Greek Salad",
      imgUrl: "greeksalad.jpg",
    },
    {
      badgeTitle: "Greek Salad",
      imgUrl: "greeksalad.jpg",
    },
    {
      badgeTitle: "Greek Salad",
      imgUrl: "greeksalad.jpg",
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
      title: "Greek Salad",
      description:
        "Fresh and vibrant, made with crisp cucumbers, ripe tomatoes, olives, and tangy feta cheese. Perfectly drizzled with olive oil and herbs for a light, refreshing taste.",
      imgUrl: "greeksalad.jpg",
    },
    {
      title: "Greek Salad",
      description:
        "Fresh and vibrant, made with crisp cucumbers, ripe tomatoes, olives, and tangy feta cheese. Perfectly drizzled with olive oil and herbs for a light, refreshing taste.",
      imgUrl: "greeksalad.jpg",
    },
    {
      title: "Greek Salad",
      description:
        "Fresh and vibrant, made with crisp cucumbers, ripe tomatoes, olives, and tangy feta cheese. Perfectly drizzled with olive oil and herbs for a light, refreshing taste.",
      imgUrl: "greeksalad.jpg",
    },
    {
      title: "Greek Salad",
      description:
        "Fresh and vibrant, made with crisp cucumbers, ripe tomatoes, olives, and tangy feta cheese. Perfectly drizzled with olive oil and herbs for a light, refreshing taste.",
      imgUrl: "greeksalad.jpg",
    },
    {
      title: "Greek Salad",
      description:
        "Fresh and vibrant, made with crisp cucumbers, ripe tomatoes, olives, and tangy feta cheese. Perfectly drizzled with olive oil and herbs for a light, refreshing taste.",
      imgUrl: "greeksalad.jpg",
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
