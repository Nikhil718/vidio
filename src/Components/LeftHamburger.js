import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const LeftHamburger = () => {
  const isVisible = useSelector((Store) => Store.LeftHamburger.isVisible);
  if (isVisible === false) return null;
  return (
    <div className="w-48 p-5 h-full bg-gray-100 shadow-xl fixed ">
      <ul className="p-2">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>Shorts</li>
        <li>Subscriptions</li>
        <li>Live</li>
        <hr className="my-2 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-2" />
        <li>Library</li>
        <li>History</li>
        <li>Your video</li>
        <li>Your Movie</li>
        <li>Liked</li>
      </ul>
      <hr className="my-2 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-2" />
      <h1 className="font-bold">Subscriptions</h1>
      <ul className="p-1 ">
        <li className="mt-1">Flying Beast</li>
        <li className="mt-1">Akshay Saini</li>
        <li className="mt-1">Take You Forward</li>
        <li className="mt-1">Mortal Gaming</li>
        <li className="mt-1">s8Ul Esports</li>
        <li className="mt-1">GE Esports</li>
      </ul>
    </div>
  );
};

export default LeftHamburger;
