import React from "react";
import { useSelector } from "react-redux";

const VideoCard = ({ snippet, statistics }) => {
  const isVisible = useSelector((store) => store.LeftHamburger.isVisible);
  var title =
    snippet.title.length > 60
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
        className="rounded-md"
        alt="thumbnail"
        src={snippet.thumbnails.medium.url}
      />
      <h1 className="font-bold">{title}</h1>
      <h1>{statistics?.viewCount} Views</h1>
    </div>
  );
};

export default VideoCard;
