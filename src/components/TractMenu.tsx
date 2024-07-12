import { useState } from "react";
import { FaPlay } from "react-icons/fa";
import { IoSearch, IoShuffle } from "react-icons/io5";

import { useAppSelector } from "../slice/store";
import { TrackList } from "./Skelaton-UI/Track-ui";
import { TrackListMenu } from "./TrackListMenu";

export const TractMenu = () => {
  const [show, setShow] = useState(false);
  const { track } = useAppSelector((item) => item.tract);

  function ToggleSearch() {
    setShow(!show);
  }

  let context: JSX.Element;
  if (!track) {
    context = <TrackList />;
  } else {
    context = <></>;
  }

  return (
    <>
      <div className=" mb-[5rem] px-3">
        <div className=" flex justify-between text-white pt-4 px-2 ">
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
        {!track ? context : <TrackListMenu track={track} />}
      </div>
    </>
  );
};
