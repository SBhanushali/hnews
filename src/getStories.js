export const getStories = async (page, type) => {
  const STORIES_URL = `https://hacker-news.firebaseio.com/v0/${type}stories.json`;
  try {
    const newStories = await fetch(STORIES_URL);
    const endPoints = await newStories.json();
    let stories;
    if (page + 10 <= endPoints.length) {
      const promises = endPoints
        .slice(page, page + 10)
        .map((endPoint) =>
          fetch(
            `https://hacker-news.firebaseio.com/v0/item/${endPoint}.json`
          ).then((response) => response.json())
        );
      stories = await Promise.all(promises);
    }

    return [stories, endPoints.length];
  } catch (error) {
    console.log(error);
  }
};
