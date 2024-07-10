import { useState } from "react";
import { FaPlay } from "react-icons/fa";
import { IoSearch, IoShuffle } from "react-icons/io5";
import { converTime, dateFnsAgo } from "../utils";

export const TractMenu = () => {
  const [show, setShow] = useState(false);

  function ToggleSearch() {
    setShow(!show);
  }

  return (
    <>
      <div className=" flex justify-between text-white pt-4 px-2">
        <div className=" flex items-center gap-2">
          <div className=" h-[3rem] w-[3rem] rounded-full bg-green-500 flex items-center justify-center text-black text-xl cursor-pointer pl-1">
            <FaPlay />
          </div>
          <IoShuffle className=" text-4xl text-gray-400 cursor-pointer hover:text-white hover:scale-110 transition-all duration-200 " />
        </div>
        <div className=" flex gap-3 items-center ">
          {!show && (
            <IoSearch
              className="  cursor-pointer text-3xl text-stone-400  rounded-md p-1 hover:bg-gray-700 transition-all duration-200"
              onClick={ToggleSearch}
            />
          )}

          <div
            className={`${
              !show ? `w-0 opacity-0` : `w-[10rem] opacity-100`
            } h-[2rem]  rounded-sm flex items-center transition-all duration-400 ease-in `}
          >
            <div className=" bg-stone-400/25 h-full w-[2rem] flex items-center justify-center  rounded-l-sm">
              <IoSearch className=" bg-stone-400/2" />
            </div>
            <input
              type="text"
              className={`w-full h-full outline-none bg-stone-400/25 text-xs font-medium rounded-r-sm`}
              placeholder="Search in Playlist"
            />
          </div>
        </div>
      </div>
      <div className=" w-full overflow-x-scroll mt-6 keep-scrolling ">
        <ul className=" w-[50rem] flex flex-col gap-2 md:w-full">
          <li className="  w-full   grid grid-cols-5 text-stone-400 text-xs font-semibold gap-6 border-b border-b-stone-700">
            <div className=" h-[2rem] col-span-2 flex items-center pl-6  gap-3 ">
              <p>#</p>
              <h1>Title</h1>
            </div>
            <div className=" h-[2rem]  flex items-center">
              <h1>Album</h1>
            </div>
            <div className=" h-[2rem]  flex items-center justify-center">
              <h1>Date Added</h1>
            </div>
            <div className=" h-[2rem]  flex items-center justify-center">
              <h1>Time</h1>
            </div>
          </li>
          <TractList />
        </ul>
      </div>
    </>
  );
};

export const TractList = () => {
  return (
    <li className="  w-full   grid grid-cols-5 text-stone-400 text-sm rounded-md gap-6 hover:bg-stone-700/35 cursor-pointer transition-all duration-200 h-[3.5rem] sm:h-[4rem] group">
      <div className="  col-span-2 flex items-center pl-6 gap-3 py-[6px] overflow-hidden">
        <div className=" h-full w-[10px] max-w-[10px] min-w-[10px]  flex items-center">
          <h1 className=" text-base font-medium">
            <span className=" block group-hover:hidden">1</span>
            <FaPlay className=" text-[11px] hidden group-hover:block" />
          </h1>
        </div>
        <div className=" h-full w-[3rem] rounded-md bg-stone-400 flex-shrink-0 sm:w-[4rem]"></div>
        <div className=" flex flex-col justify-between h-full w-full  ">
          <h1 className=" text-sm font-semibold text-white truncate">
            Nanka Shiawasa(FLAME of Recca)
          </h1>
          <p className=" text-xs font-semibold">Miura Jam</p>
        </div>
      </div>
      <div className="  flex items-center ">
        <h1 className=" text-xs font-semibold truncate text-stone-400">
          Nanka Shiawasa(FLAME of Recca)
        </h1>
      </div>
      <div className="  flex items-center justify-center">
        <h1 className=" text-xs font-semibold truncate text-stone-400">
          {dateFnsAgo("2023-06-14T02:20:52Z")}
        </h1>
      </div>
      <div className="  flex items-center justify-center">
        <h1 className=" text-xs font-semibold truncate text-stone-400">
          {converTime(243017)}
        </h1>
      </div>
    </li>
  );
};
