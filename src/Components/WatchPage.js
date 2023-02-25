import React from "react";
import { useSearchParams } from "react-router-dom";

const WatchPage = () => {
  const [searchParms] = useSearchParams();
  console.log();
  return (
    <div className="p-10">
      <iframe
        width="800"
        height="450"
        src={"https://www.youtube.com/embed/" + searchParms.get("v")}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    </div>
  );
};

export default WatchPage;
