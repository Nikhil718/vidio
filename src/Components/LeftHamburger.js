import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { AiFillHome, AiFillVideoCamera, AiFillLike } from "react-icons/ai";
import { FaUserCircle } from "react-icons/fa";
import {
  MdSlowMotionVideo,
  MdOutlineLiveTv,
  MdVideoLibrary,
  MdHistory,
  MdVideocam,
  MdMovieFilter,
} from "react-icons/md";

const LeftHamburger = () => {
  const [isActive, setIsActive] = useState(false);
  const handleClick = (event) => {
    setIsActive((current) => !current);
  };
  const isVisible = useSelector((Store) => Store.LeftHamburger.isVisible);
  if (isVisible === false) return null;
  return (
    <div className="w-48 p-3 h-full bg-gray-100 shadow-xl fixed ">
      <ul className="p-1">
        <li className="flex p-1">
          <AiFillHome className="m-1" />
          <Link to="/">Home</Link>
        </li>
        <li className="flex p-1">
          <MdSlowMotionVideo className="m-1" /> Shorts
        </li>
        <li className="flex p-1">
          <AiFillVideoCamera className="m-1" />
          Subscriptions
        </li>
        <li className="flex p-1">
          <MdOutlineLiveTv className="m-1" />
          <Link to="/live">Live</Link>
        </li>
        <hr className="my-2 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-2" />
        <li className="flex p-1">
          <MdVideoLibrary className="m-1" />
          Library
        </li>
        <li className="flex p-1">
          <MdHistory className="m-1" />
          History
        </li>
        <li className="flex p-1">
          <MdVideocam className="m-1" />
          Videos
        </li>

        <li className="flex p-1">
          <MdMovieFilter className="m-1" />
          Movies
        </li>
        <li className="flex p-1">
          <AiFillLike className="m-1" />
          Liked
        </li>
      </ul>
      <hr className="my-2 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-2" />
      <h1 className="font-bold">Subscriptions</h1>
      <ul className="p-1 ">
        <li className="flex p-1">
          <FaUserCircle className="m-1" /> Flying Beast
        </li>
        <li className="flex p-1">
          <FaUserCircle className="m-1" /> Akshay Saini
        </li>
        <li className="flex p-1">
          <FaUserCircle className="m-1" /> Take U Forward
        </li>
        <li className="flex p-1">
          <FaUserCircle className="m-1" /> Mortal Gaming
        </li>
        <li className="flex p-1">
          <FaUserCircle className="m-1" /> S8ul
        </li>
        <li className="flex p-1">
          <FaUserCircle className="m-1" /> Fraz
        </li>
        <li className="flex p-1">
          <FaUserCircle className="m-1" /> Aditya Verma
        </li>
        <li className="flex p-1">
          <FaUserCircle className="m-1" /> Striver
        </li>
      </ul>
    </div>
  );
};

export default LeftHamburger;
