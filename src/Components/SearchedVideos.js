import React, { useRef } from "react";
import { useSearchParams } from "react-router-dom";

import SearchedVideoCards from "./SearchedVideoCards";
import { Link } from "react-router-dom";
import useSearchedVideosFetch from "../Shared/useSearchedVideosFetch";

const SearchedVideos = () => {
  const [searchparam] = useSearchParams();

  const query = searchparam.get("search_query");
  const { searchedList } = useSearchedVideosFetch(query);
  console.log(searchedList);

  const loader = useRef(null);

  return (
    <div>
      {searchedList.map((item) => (
        <Link to={"/watch?v=" + item.id.videoId} key={item.id.videoId}>
          <SearchedVideoCards videoType="searched" video={item} />
        </Link>
      ))}

      <div ref={loader} />
    </div>
  );
};

export default SearchedVideos;
