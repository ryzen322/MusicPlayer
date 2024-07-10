import { useState } from "react";
import { FaPlay } from "react-icons/fa";
import { IoSearch, IoShuffle } from "react-icons/io5";
import { TractList } from "./TractList";
import { useAppSelector } from "../slice/store";

export const TractMenu = () => {
  const [show, setShow] = useState(false);
  const { track } = useAppSelector((item) => item.tract);

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
          {track?.tracks.items.map((item, index) => (
            <TractList
              key={item.added_at}
              date={item.added_at}
              time={item.track.duration_ms}
              title={item.track.name}
              number={index + 1}
              feat={item.track.artists?.map((list) => list.name)}
              image={item.track.album?.images[2].url}
            />
          ))}
        </ul>
      </div>
    </>
  );
};
