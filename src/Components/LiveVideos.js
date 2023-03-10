import React, { useEffect, useState } from "react";
import { LIVE_VIDEO_API } from "./Config/Constant";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";
import { MdOutlineLiveTv } from "react-icons/md";
import Shimmer from "./Shimmer";

const LiveVideos = () => {
  const [liveVideos, setLiveVideos] = useState([]);
  async function getLiveVideos() {
    const data = await fetch(LIVE_VIDEO_API);
    const json = await data.json();

    setLiveVideos(json.items);
  }
  useEffect(() => {
    getLiveVideos();
  }, []);
  return liveVideos.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="flex p-6 w-full fixed border-b-2 bg-white z-20">
        <MdOutlineLiveTv className="m-1" size={50} />
        <h1 className="font-semibold text-5xl">Live</h1>
      </div>
      <div className="flex flex-wrap my-36">
        {liveVideos.map((video) => (
          <Link to={"/watch?v=" + video.id.videoId} key={video.id}>
            <VideoCard videoType="live" {...video} />
          </Link>
        ))}
      </div>
    </>
  );
};

export default LiveVideos;
