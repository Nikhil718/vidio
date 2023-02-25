const Shimmer = () => {
  return (
    <>
      <div className="mt-16">
        <div className="flex flex-wrap justify-center  ">
          {Array(10)
            .fill("")
            .map((e, index) => (
              <div
                className=" animate-pulse w-72 h-72 p-2 my-5 mx-3"
                key={index}
              >
                <div className="w-72 h-44 bg-gray-400 mb-3"></div>
                <div className="w-56 h-8 bg-gray-400 mb-3"></div>
                <div className="w-3/4 h-8 bg-gray-400 mb-3"></div>
                <div className="flex w-56 h-5 gap-2 justify-between">
                  <div className="w-1/4 bg-gray-400"></div>
                  <div className="w-1/4 bg-gray-400"></div>
                  <div className="w-1/4 bg-gray-400"></div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default Shimmer;
