import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { YOUTUBE_VIDEO_URL } from "./Config/Constant";
import Shimmer from "./Shimmer";
import TopButtonList from "./TopButtonList";
import VideoCard from "./VideoCard";

const CardContainer = () => {
  const [allVideos, setAllVideos] = useState([]);
  async function getAllVideos() {
    const data = await fetch(YOUTUBE_VIDEO_URL);
    const json = await data.json();
    setAllVideos(json.items);

    console.log(json.items);
  }

  useEffect(() => {
    getAllVideos();
  }, []);
  return allVideos?.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <TopButtonList />
      <div className="flex flex-wrap my-14 p-3  ">
        {allVideos.map((video) => (
          <Link to={"/watch?v=" + video.id} key={video.id}>
            <VideoCard {...video} />
          </Link>
        ))}
      </div>
    </>
  );
};
export default CardContainer;
