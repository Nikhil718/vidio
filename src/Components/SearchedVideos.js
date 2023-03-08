import React, { useEffect, useState, useCallback, useRef } from "react";
import { useSearchParams } from "react-router-dom";

import SearchedVideoCards from "./SearchedVideoCards";
import { Link } from "react-router-dom";
import useSearchedVideosFetch from "../Shared/useSearchedVideosFetch";

const SearchedVideos = () => {
  const [searchparam] = useSearchParams();
  const [page, setPage] = useState(1);
  const query = searchparam.get("search_query");
  const { searchedList } = useSearchedVideosFetch(query);

  const loader = useRef(null);

  return (
    <div>
      {searchedList.map((video) => (
        <Link to={"/watch?v=" + video.id.videoId} key={video.id.videoId}>
          <SearchedVideoCards {...video} />
        </Link>
      ))}

      <div ref={loader} />
    </div>
  );
};

export default SearchedVideos;
