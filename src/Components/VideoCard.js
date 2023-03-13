import React from "react";
import { useSelector } from "react-redux";
import { FaUserCircle } from "react-icons/fa";
import { AiFillEye } from "react-icons/ai";
import { calculateViews, timeAgo } from "./Config/helper";

const VideoCard = ({ snippet, statistics, videoType }) => {
  const isVisible = useSelector((store) => store.LeftHamburger.isVisible);
  console.log(snippet?.publishedAt);
  var Title =
    snippet?.title?.length > 60
      ? snippet.title.substring(0, 70) + "....."
      : snippet.title;

  return (
    <div
      className={
        isVisible
          ? "w-72 h-72 p-4 m-3 shadow-2xl rounded-lg cursor-pointer hover:scale-105   "
          : "w-80 h-72 p-4 m-3 shadow-2xl rounded-sm cursor-pointer hover:scale-105   "
      }
    >
      <img
        loading="lazy"
        className="rounded-md"
        alt="thumbnail"
        src={snippet?.thumbnails?.medium?.url}
      />
      <div className="flex">
        <FaUserCircle className="m-1 text-sm" /> <h1>{snippet.channelTitle}</h1>
      </div>
      <div className="flex my-1">
        <h1 className="font-semibold text-sm">{Title}</h1>
        {videoType === "live" ? (
          <h1 className="bg-red-500 text-center rounded-lg w-9 h-7 p-[0.2rem] ml-1 text-white">
            {snippet?.liveBroadcastContent.toUpperCase()}
          </h1>
        ) : null}
      </div>
      {videoType === "popular" ? (
        <div className="flex">
          <h1 className="flex my-1">
            {calculateViews(statistics?.viewCount)}{" "}
            <AiFillEye className="m-1" size={20} />
          </h1>
          <h1 className="px-2 my-1 opacity-70">
            {timeAgo(snippet?.publishedAt)}
          </h1>
        </div>
      ) : null}
    </div>
  );
};

export default VideoCard;
