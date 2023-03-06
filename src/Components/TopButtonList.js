import { BsChevronDoubleLeft, BsChevronDoubleRight } from "react-icons/bs";
import { useSelector } from "react-redux";

const buttonList = [
  "All",
  "Cricket",
  "Football",
  "Science",
  "Web",
  "Music",
  "Computer",
  "Pubg ",
  "Beach",
  "Mountain",
  "Cars",
  "Bike",
  "Watched",
  "Recent",
  "C++",
  "Java",
  "Live",
  "Cricket",
  "Football",
  "Science",
  "Web",
  "Music",
  "Computer",
  "Pubg ",
  "Beach",
  "Mountain",
  "Cars",
  "Bike",
  "Watched",
  "Recent",
  "C++",
  "Java",
];

const TopButtonList = () => {
  const isVisible = useSelector((store) => store.LeftHamburger.isVisible);
  const slideLeft = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 300;
  };
  const slideRight = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 300;
  };
  return (
    <div
      className={
        isVisible
          ? " mx-auto  max-w-[1270px] bg-white fixed flex  items-center rounded-lg z-20 mr-3"
          : " mx-auto  max-w-[1430px] bg-white fixed flex  items-center rounded-lg z-20 mr-3"
      }
    >
      <div className="p-3">
        <BsChevronDoubleLeft
          onClick={() => slideLeft()}
          className="absolute left-0 top-4 bg-white cursor-pointer opacity-50 hover:opacity-100 hover:scale-105"
          size={20}
        />
        <BsChevronDoubleRight
          onClick={() => slideRight()}
          className={
            isVisible
              ? "absolute left-[80rem] top-4 bg-white cursor-pointer opacity-50 hover:opacity-100 hover:scale-105"
              : "absolute left-[1436px] top-4 bg-white cursor-pointer opacity-50 hover:opacity-100 hover:scale-105"
          }
          size={20}
        />
      </div>
      <div
        id="slider"
        className=" overflow-y-auto flex flex-row gap-2 scrollbar-hide scroll-smooth"
      >
        {buttonList.map((item, i) => (
          <h1 key={i} className="bg-gray-100 rounded-lg inline-block p-2 m-2 ">
            {item}
          </h1>
        ))}
      </div>

      <hr className="my-6 border-gray-200 sm:mx-auto border-1 dark:border-gray-500 lg:my-0 " />
    </div>
  );
};
export default TopButtonList;
