import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";

import LeftHamburger from "../Components/LeftHamburger";

import Header from "./Header";

const Body = () => {
  const isVisible = useSelector((store) => store.LeftHamburger.isVisible);
  return (
    <>
      <Header />

      <div className="grid grid-cols-7">
        <div className={isVisible ? "  col-span-1" : " col-span-0"}>
          <LeftHamburger />
        </div>
        <div className={isVisible ? " col-span-6" : "col-span-7 ml-16"}>
          <Outlet />
        </div>
      </div>
    </>
  );
};
export default Body;
