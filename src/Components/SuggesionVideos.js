import React, { useEffect, useState } from "react";
import { RELATED_VIDEOD_API } from "./Config/Constant";
import { FaUserCircle } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { addWatchedVideos } from "../Shared/HistorySlice";

const SuggesionVideos = ({ setId, videoId }) => {
  const [allRelatedVideos, setAllRelatedVideos] = useState([]);
  const dispatch = useDispatch();
  const handelSuggessions = (video) => {
    setId("v=" + video.id.videoId);
    dispatch(
      addWatchedVideos({
        id: video.id.videoId,
        snippet: video.snippet,
      })
    );
  };
  async function getSuggesionVideos() {
    const data = await fetch(RELATED_VIDEOD_API + videoId);
    const json = await data.json();

    setAllRelatedVideos(json.items);
  }
  useEffect(() => {
    getSuggesionVideos();
  }, [videoId]);
  return (
    <div className="my-2">
      {allRelatedVideos?.map((video) => (
        <div onClick={() => handelSuggessions(video)} key={video.id.videoId}>
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
              <div className="flex mt-2">
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
