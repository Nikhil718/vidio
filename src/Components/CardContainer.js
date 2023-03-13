import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addWatchedVideos } from "../Shared/HistorySlice";
import { YOUTUBE_VIDEO_URL } from "./Config/Constant";
import Shimmer from "./Shimmer";
import TopButtonList from "./TopButtonList";
import VideoCard from "./VideoCard";

const CardContainer = () => {
  const [allVideos, setAllVideos] = useState([]);
  const dispatch = useDispatch();
  console.log(process.env.REACT_APP_API_KEY);
  const addToHistory = (video) => {
    dispatch(
      addWatchedVideos({
        id: video.id,
        snippet: video.snippet,
      })
    );
  };
  async function getAllVideos() {
    const data = await fetch(YOUTUBE_VIDEO_URL);
    const json = await data.json();
    setAllVideos(json.items);
  }

  useEffect(() => {
    getAllVideos();
  }, []);
  return allVideos?.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <TopButtonList />
      <div className="flex flex-wrap my-14 p-3 font-roboto ">
        {allVideos &&
          allVideos.map((video) => (
            <Link
              onClick={() => addToHistory(video)}
              to={"/watch?v=" + video.id}
              key={video.id}
            >
              <VideoCard videoType="popular" {...video} />
            </Link>
          ))}
      </div>
    </>
  );
};
export default CardContainer;
