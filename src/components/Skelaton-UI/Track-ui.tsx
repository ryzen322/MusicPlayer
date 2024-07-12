export const TrackHeader = () => {
  return (
    <>
      <div className=" w-full h-[14rem] bg-stone-700 rounded-t-md flex flex-col relative p-3 lg:h-[18rem]">
        <div className=" h-[2rem] w-full  flex justify-between sm:h-[2.5rem] ">
          <div className=" h-full w-[2rem] rounded-full bg-green-400 flex items-center justify-center sm:w-[2.5rem] "></div>
          <div className=" flex gap-2">
            <div className=" h-full w-[2rem] rounded-full bg-green-400 flex items-center justify-center sm:w-[2.5rem] "></div>
            <div className=" h-full w-[2rem] rounded-full bg-green-400 flex items-center justify-center sm:w-[2.5rem] "></div>
            <div className=" h-full w-[2rem] rounded-full bg-green-400 flex items-center justify-center sm:w-[2.5rem] "></div>
          </div>
        </div>
        <div className=" flex gap-2 mt-auto sm:gap-4">
          <div className=" h-[7.5rem] w-[8rem] bg-stone-900 animate-pulse rounded-md shadow-black sm:h-[9rem] sm:w-[9rem] lg:h-[12rem] lg:w-[12rem] shrink-0"></div>
          <div className=" grid grid-rows-4 gap-1 h-full w-full">
            <div className=" w-[40%] bg-stone-900 animate-pulse rounded-sm"></div>
            <div className=" w-[50%] bg-stone-900 animate-pulse rounded-sm"></div>
            <div className=" w-[60%] bg-stone-900 animate-pulse rounded-sm"></div>
            <div className=" w-[80%] bg-stone-900 animate-pulse rounded-sm"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export const TrackList = () => {
  return (
    <div className=" w-full  mt-6 keep-scrolling ">
      <ul className=" w-[50rem] flex flex-col gap-2 md:w-full">
        <li className=" bg-stone-600 h-[3rem] flex items-center rounded-md"></li>
        <li className=" bg-stone-600 h-[3rem] flex items-center rounded-md"></li>
        <li className=" bg-stone-600 h-[3rem] flex items-center rounded-md"></li>
        <li className=" bg-stone-600 h-[3rem] flex items-center rounded-md"></li>
        <li className=" bg-stone-600 h-[3rem] flex items-center rounded-md"></li>
        <li className=" bg-stone-600 h-[3rem] flex items-center rounded-md"></li>
      </ul>
    </div>
  );
};
