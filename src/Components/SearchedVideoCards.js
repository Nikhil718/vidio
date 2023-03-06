import React from "react";
import { FaUserCircle } from "react-icons/fa";

function SearchedVideoCards({ snippet }) {
  return (
    <div className="w-full h-48 p-4 m-3 shadow-2xl rounded-sm cursor-pointer   ">
      <div className="flex">
        <img
          className="rounded-md w-64 "
          alt="thumbnail"
          src={snippet.thumbnails.medium.url}
        />
        <div>
          <h1 className="p-1 mx-2 font-semibold text-lg">{snippet.title}</h1>
          <p className=" flex p-1 mx-2">
            <FaUserCircle className="m-1" /> {snippet.channelTitle}
          </p>
          <p className="p-1 mx-2">{snippet.description}</p>
        </div>
      </div>
    </div>
  );
}

export default SearchedVideoCards;
