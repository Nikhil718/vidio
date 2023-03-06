import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { VIDEO_BY_ID } from "./Config/Constant";
import { FaUserCircle } from "react-icons/fa";
import { AiFillEye, AiFillLike } from "react-icons/ai";
import SuggesionVideos from "./SuggesionVideos";
import CommentsSection from "./CommentsSection";
import LiveChat from "./LiveChat";

const WatchPage = () => {
  const [searchParms, setSearchParams] = useSearchParams();
  const [videoDetails, setVideoDetails] = useState("");
  const [viewDesc, setViewDesc] = useState(false);
  const ID = searchParms.get("v");
  async function getVideoDetails() {
    const data = await fetch(VIDEO_BY_ID + ID);
    const json = await data.json();
    setVideoDetails(json.items[0]);
    console.log(json.items[0]);
  }
  useEffect(() => {
    getVideoDetails();
  }, [ID]);
  return (
    videoDetails && (
      <div className="flex">
        <div>
          <div className="p-5">
            <iframe
              width="800"
              height="450"
              src={"https://www.youtube.com/embed/" + ID + "?autoplay=1"}
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
          <div className="mx-5 w-[50rem]">
            <h1 className="font-bold text-lg">{videoDetails.snippet?.title}</h1>
            <div className="my-2 flex">
              <div className="flex">
                <FaUserCircle className="m-1" size={20} />
                <h1>{videoDetails.snippet?.channelTitle}</h1>
              </div>
              <div className="flex ml-80">
                <AiFillLike className="m-1" size={20} />
                <h1>{videoDetails.statistics?.likeCount}</h1>
                <div className="flex mx-3">
                  <AiFillEye className="m-1" size={20} />
                  <h1>{videoDetails.statistics?.viewCount}</h1>
                </div>
                <h1 className="mx-2  rounded-lg bg-red-900 p-1 text-white hover:cursor-pointer hover:bg-red-700">
                  Subscribe
                </h1>
              </div>
            </div>
            <button
              onClick={() => {
                setViewDesc(!viewDesc);
              }}
              className="rounded-lg bg-slate-800 text-white p-1 w-40 cursor-pointer"
            >
              Show Description ⬇️
            </button>
            {viewDesc && (
              <div className=" bg-slate-200  p-2 rounded-lg my-2">
                <p>{videoDetails.snippet?.description}</p>
              </div>
            )}
          </div>
          {videoDetails.snippet?.liveBroadcastContent === "none" ? (
            <CommentsSection />
          ) : null}
        </div>
        <div>
          <div className="p-2 m-2">
            {videoDetails.snippet?.liveBroadcastContent === "live" ? (
              <LiveChat />
            ) : null}
          </div>
          <SuggesionVideos setId={setSearchParams} videoId={ID} />
        </div>
      </div>
    )
  );
};

export default WatchPage;
