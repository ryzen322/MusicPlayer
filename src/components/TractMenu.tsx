import { useState } from "react";
import { FaPlay } from "react-icons/fa";
import { IoSearch, IoShuffle } from "react-icons/io5";

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
      <div className=" w-full overflow-x-scroll mt-3 keep-scrolling ">
        <ul className=" w-[50rem] flex flex-col gap-2">
          <li className="  w-full   grid grid-cols-5 text-stone-400 text-sm font-semibold gap-6 border-b border-b-stone-700">
            <div className=" h-[2rem] col-span-2 flex items-center pl-7  gap-3 ">
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
    <li className="  w-full   grid grid-cols-5 text-stone-400 text-sm rounded-md gap-6">
      <div className=" h-[3.5rem] col-span-2 flex items-center pl-7 gap-2 py-[6px] overflow-hidden">
        <h1 className=" text-xl font-medium">1</h1>
        <div className=" h-full w-[3rem] rounded-md bg-stone-400 flex-shrink-0"></div>
        <div className=" flex flex-col justify-between h-full w-full  ">
          <h1 className=" text-sm font-semibold text-white truncate">
            Nanka Shiawasa(FLAME of Recca)
          </h1>
          <p className=" text-xs font-semibold">Miura Jam</p>
        </div>
      </div>
      <div className=" h-[3.5rem] flex items-center ">
        <h1 className=" text-xs font-semibold truncate text-stone-400">
          Nanka Shiawasa(FLAME of Recca)
        </h1>
      </div>
      <div className=" h-[3.5rem] flex items-center justify-center">
        <h1 className=" text-xs font-semibold truncate text-stone-400">
          Added 4 Weeks ago
        </h1>
      </div>
      <div className=" h-[3.5rem] flex items-center justify-center">
        <h1 className=" text-xs font-semibold truncate text-stone-400">4:03</h1>
      </div>
    </li>
  );
};
