import React, { useEffect, useState } from "react";
import { RELATED_VIDEOD_API } from "./Config/Constant";
import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

const SuggesionVideos = ({ setId, videoId }) => {
  const [allRelatedVideos, setAllRelatedVideos] = useState([]);
  async function getSuggesionVideos() {
    const data = await fetch(RELATED_VIDEOD_API + videoId);
    const json = await data.json();
    console.log(videoId);
    setAllRelatedVideos(json.items);
    console.log(json.items);
  }
  useEffect(() => {
    getSuggesionVideos();
  }, [videoId]);
  return (
    <div className="my-2">
      {allRelatedVideos?.map((video) => (
        <div
          onClick={() => setId("v=" + video.id.videoId)}
          key={video.id.videoId}
        >
          <div className="flex bg-slate-100 p-1 m-1 rounded-lg cursor-pointer">
            <img
              className="rounded-lg p-1 "
              alt="thumbnail"
              src={video.snippet?.thumbnails?.default?.url}
            />
            <div>
              {video.snippet.title.length > 50 ? (
                <h1>{video.snippet.title.substring(0, 50) + "....."}</h1>
              ) : (
                <h1>{video.snippet.title}</h1>
              )}
              <div className="flex">
                <FaUserCircle className="m-1" />{" "}
                <h1>{video.snippet.channelTitle}</h1>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SuggesionVideos;
