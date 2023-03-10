import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Hamburger from "../Assets/Images/Hamburger_icon.png";
import Logo from "../Assets/Images/Logo_Vidio.png";
import User from "../Assets/Images/user.jpg";
import { toggleHamburger } from "../Shared/LeftHamburgerSlice";
import { CiSearch } from "react-icons/ci";
import { YOUTUBE_SEARCH_API } from "../Components/Config/Constant";
import { Link } from "react-router-dom";
import { MdNotificationsActive, MdFavorite } from "react-icons/md";
import { cacheResults } from "../Shared/SearchSlice";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchQueryVisible, setSearchQueryVisible] = useState(false);
  const [suggestions, setSuggestions] = useState([]);
  const searchCache = useSelector((Store) => Store.Search);
  const dispatch = useDispatch();
  const handelSearchClick = (option) => {
    setSearchQuery(option);
    setSearchQueryVisible(false);
  };
  useEffect(() => {
    async function getSearchSuggession() {
      const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
      const json = await data.json();
      setSuggestions(json[1]);

      dispatch(
        cacheResults({
          [searchQuery]: json[1],
        })
      );
    }
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } else {
        getSearchSuggession();
      }
    }, 200);
    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery, searchCache, dispatch]);

  return (
    <div className="grid grid-flow-col shadow-lg p-3 sticky top-0 z-40 bg-white">
      <div className="flex cursor-pointer col-span-1">
        <img
          onClick={() => dispatch(toggleHamburger())}
          className=" h-7 m-2"
          alt="Hamburger_img"
          src={Hamburger}
        ></img>
        <img className="h-8  m-2" alt="Logo" src={Logo}></img>
      </div>
      <div>
        <div className="col-span-10 px-80 mt-2">
          <div className="flex h-11">
            <div className=" flex w-[30rem] border-2 border-solid p-2 rounded-l-full">
              <input
                className="w-[29rem] p-2 rounded-l-full outline-none border-none"
                type="text"
                placeholder="Search any video"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={() => setSearchQueryVisible(true)}
                // onBlur={() => setSearchQueryVisible(false)}
              />
              {searchQuery && (
                <h1
                  onClick={() => setSearchQuery("")}
                  className="mx-1 p-1 opacity-50 hover:bg-slate-200 rounded-full cursor-pointer"
                >
                  X
                </h1>
              )}
            </div>
            <button className="bg-gray-200 rounded-r-full p-2 m-1">🔍</button>
          </div>
          {searchQueryVisible && (
            <div className="  rounded-lg w-[30rem] fixed bg-white">
              <ul>
                {suggestions.map((suggestion) => {
                  return (
                    <Link to={"/results?search_query=" + suggestion}>
                      <li
                        onClick={() => handelSearchClick(suggestion)}
                        className="flex mx-2 my-2 p-1 shadow-sm rounded hover:bg-slate-100 cursor-pointer"
                      >
                        <CiSearch className="m-1" />
                        {suggestion}
                      </li>
                    </Link>
                  );
                })}
              </ul>
            </div>
          )}
        </div>
      </div>
      <div className="flex col-span-1">
        <MdFavorite className="m-4 cursor-pointer" size={25} />

        <MdNotificationsActive className="m-4" size={25} />

        <img
          className="rounded-full h-9 m-2 cursor-pointer"
          alt="user"
          src={User}
        />
      </div>
    </div>
  );
};
export default Header;
