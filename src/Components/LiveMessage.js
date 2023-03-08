import React from "react";
import { FaUserCircle } from "react-icons/fa";

const LiveMessage = ({ dp, name, message }) => {
  return (
    <div>
      <div className="flex p-2 text-sm ml-2 ">
        {dp === "" ? (
          <FaUserCircle className="my-1" size={20} />
        ) : (
          <span>{dp}</span>
        )}
        <h1 className="font-semibold  mx-1">{name}</h1>
        <h1 className="mx-2 text-sm">{message}</h1>
      </div>
    </div>
  );
};

export default LiveMessage;
