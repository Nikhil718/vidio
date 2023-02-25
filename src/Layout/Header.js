import { useDispatch } from "react-redux";
import Hamburger from "../Assets/Images/Hamburger_icon.png";
import Logo from "../Assets/Images/Logo_Vidio.png";
import User from "../Assets/Images/user.jpg";
import { toggleHamburger } from "../Shared/LeftHamburgerSlice";
const Header = () => {
  const dispatch = useDispatch();
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
      <div className="col-span-10 px-80 mt-2">
        <input
          className="w-2/3 border-2 border-solid p-2 rounded-l-full"
          type="text"
          placeholder="Search any video"
        />
        <button className="bg-gray-200 rounded-r-full p-2 m-1">🔍</button>
      </div>
      <div className="col-span-1">
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
