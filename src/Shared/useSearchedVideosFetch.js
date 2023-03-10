import { useState, useEffect, useCallback } from "react";
import { YOUTUBE_SEARCHED_VIDEO_API } from "../Components/Config/Constant";

const useSearchedVideosFetch = (query, page) => {
  const [searchedList, setSearchedList] = useState([]);

  const getSearchedVideo = useCallback(async () => {
    try {
      const data = await fetch(YOUTUBE_SEARCHED_VIDEO_API + query);
      const json = await data.json();

      setSearchedList(json.items);
    } catch (err) {
      console.log(err);
    }
  }, [query]);

  useEffect(() => {
    getSearchedVideo(query);
  }, [query, page, getSearchedVideo]);

  return { searchedList };
};

export default useSearchedVideosFetch;
