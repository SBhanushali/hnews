import React, { useState, useEffect } from "react";
import Loader from "../components/Loader";
import Story from "../components/Story";
import { getStories } from "../getStories";

const Jobs = () => {
  const [page, setPage] = useState(0);
  const [stories, setStories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [storySize, setStorySize] = useState(0);

  const handleScroll = (event) => {
    const { scrollTop, clientHeight, scrollHeight } = event.currentTarget;

    if (scrollHeight - scrollTop === clientHeight && page < storySize) {
      setPage((prev) => prev + 10);
    }
  };

  useEffect(() => {
    let isMounted = true;
    if (isMounted) {
      const loadStories = async () => {
        setLoading(true);
        const [newStories, storyLength] = await getStories(page, "job");
        setStorySize(storyLength);
        if (newStories) setStories((prev) => [...prev, ...newStories]);
        setLoading(false);
      };
      loadStories();
    }
    return () => {
      isMounted = false;
    };
  }, [page]);

  return (
    <div
      className="space-y-3 mx-5 lg:w-full lg:max-h-full overflow-y-auto h-156 lg:h-168"
      onScroll={handleScroll}
    >
      {stories &&
        stories.map(
          (story) =>
            story && story.url && <Story key={story.id} story={story} />
        )}

      {loading && <Loader />}
      {stories.length >= storySize && stories.length != 0 && (
        <p className="text-center dark:text-white">We have reached the end</p>
      )}
    </div>
  );
};

export default Jobs;
