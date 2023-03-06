import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { YOUTUBE_SEARCHED_VIDEO_API } from "./Config/Constant";
import SearchedVideoCards from "./SearchedVideoCards";
import { Link } from "react-router-dom";

const SearchedVideos = () => {
  const [searchResult, setSearchResult] = useState([]);
  const [searchparam] = useSearchParams();
  const query = searchparam.get("search_query");
  console.log("hiiii");
  useEffect(() => {
    getSearchedVideo();
  }, []);
  async function getSearchedVideo() {
    const data = await fetch(YOUTUBE_SEARCHED_VIDEO_API + query);
    const json = await data.json();
    setSearchResult(json.items);
    console.log(json.items);
  }

  return (
    <div>
      {searchResult.map((video) => (
        <Link to={"/watch?v=" + video.id.videoId} key={video.id.videoId}>
          <SearchedVideoCards {...video} />
        </Link>
      ))}
    </div>
  );
};

export default SearchedVideos;
