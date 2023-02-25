import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import CardContainer from "../Components/CardContainer";
import LeftHamburger from "../Components/LeftHamburger";
import WatchPage from "../Components/WatchPage";

const Body = () => {
  const isVisible = useSelector((store) => store.LeftHamburger.isVisible);
  return (
    <div className="grid grid-cols-7">
      <div className={isVisible ? " col-span-1" : "col-span-0"}>
        <LeftHamburger />
      </div>
      <div className={isVisible ? " col-span-6" : "col-span-7 ml-16"}>
        <Outlet />
      </div>
    </div>
  );
};
export default Body;
