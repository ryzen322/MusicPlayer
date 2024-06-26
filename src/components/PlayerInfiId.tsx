import { useParams } from "react-router";
import { IoMdPlay } from "react-icons/io";
import { IoShuffle } from "react-icons/io5";
import { IoIosMore } from "react-icons/io";

import PlayerLayout from "../layouts/PlayerLayout";
import useSpotifyInfo from "../hooks/useSpotifyInfo";
import InfoHeader from "./InfoHeader";
import { useEffect, useRef } from "react";
import PlayerList from "../utils/PlayerList";
import Album from "./Album";
import Artist from "./Artist";

const PlayerInfiId = () => {
  const { id } = useParams();
  const divRef = useRef<HTMLDivElement | null>(null);

  useSpotifyInfo(id);
  useEffect(() => {
    if (!divRef.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        entry;
      },
      {
        rootMargin: "-250px",
      }
    );
    observer.observe(divRef.current);
    return () => observer.disconnect();
  }, [divRef]);
  return (
    <PlayerLayout className="p-0 mr-2 rounded-md mt-1">
      {
        <>
          <InfoHeader />
          <div
            ref={divRef}
            className="  w-full px-4 py-3 flex items-center gap-3 overflow-hidden"
          >
            <div className=" h-[3rem] w-[3rem] rounded-full bg-green-600 flex  justify-center items-center cursor-pointer ">
              <IoMdPlay className=" text-black text-2xl" />
            </div>
            <div className=" flex items-center gap-2 ">
              <IoShuffle className=" text-3xl cursor-pointer" />
              <div className=" text-sm px-3 p-1 border rounded-xl  cursor-pointer border-stone-400">
                <h1>Follow</h1>
              </div>
              <IoIosMore className=" text-3xl text-stone-400 cursor-pointer" />
            </div>
          </div>
          <PlayerList />
          <Album />

          <Artist />
        </>
      }
    </PlayerLayout>
  );
};

export default PlayerInfiId;
