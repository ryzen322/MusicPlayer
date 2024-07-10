export const Menu = () => {
  return (
    <>
      <div className=" h-[2rem] w-full  flex justify-between sm:h-[2.5rem] ">
        <div className=" h-full w-[2rem] rounded-full bg-green-400 flex items-center justify-center sm:w-[2.5rem] "></div>
        <div className=" flex gap-2">
          <div className=" h-full w-[2rem] rounded-full bg-green-400 flex items-center justify-center sm:w-[2.5rem] "></div>
          <div className=" h-full w-[2rem] rounded-full bg-green-400 flex items-center justify-center sm:w-[2.5rem] "></div>
          <div className=" h-full w-[2rem] rounded-full bg-green-400 flex items-center justify-center sm:w-[2.5rem] "></div>
        </div>
      </div>
      <div className=" flex gap-2 mt-auto sm:gap-4">
        <div className=" h-[7.5rem] w-[8rem] bg-stone-900 rounded-md shadow-black sm:h-[9rem] sm:w-[9rem] lg:h-[12rem] lg:w-[12rem]"></div>
        <div className=" flex flex-col justify-between">
          <h1 className=" text-xs font-semibold text-white sm:text-sm lg:text-lg">
            Public PlayList
          </h1>
          <h1 className=" text-white font-bold text-4xl sm:text-6xl lg:text-8xl">
            Anime
          </h1>
          <div className=" flex gap-1 items-center sm:gap-2">
            <div className=" h-[1.5rem] w-[1.5rem] bg-stone-400  rounded-full sm:h-[2rem] sm:w-[2rem] "></div>
            <h1 className=" text-white font-bold text-xs sm:text-sm">XQc ·</h1>
            <p className=" text-white/70 text-xs font-semibold sm:text-sm">
              9 songs, 36 min 9 sec
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
