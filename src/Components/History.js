import React from "react";
import { useSelector } from "react-redux";
import SearchedVideoCards from "./SearchedVideoCards";

import { MdHistory } from "react-icons/md";

const History = () => {
  const watchedVideos = useSelector((store) => store.History.watchedVideos);
  console.log(watchedVideos);
  return (
    <>
      <div className="flex p-6 w-full fixed border-b-2 bg-white z-20">
        <MdHistory className="m-1" size={30} />
        <h1 className="font-semibold text-3xl">Watch history</h1>
      </div>
      <div className=" flex flex-wrap justify-center my-28">
        {watchedVideos.length === 0 ? (
          <h1 className="font-bold text-2xl text-red-600">
            No History to Show
          </h1>
        ) : (
          <div>
            {watchedVideos.map((item) => (
              <SearchedVideoCards videoType="watched" video={item} />
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default History;
