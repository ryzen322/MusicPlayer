import { IoIosMore } from "react-icons/io";
import MusicList from "./MusicList";
import { useAppSelector } from "../../slice/store";
import { IoMdPlay } from "react-icons/io";
import { convertDate } from "../../utils";
import ListAlbum from "../ListAlbum";

export function Music() {
  const { singleAlbum, single, featuring } = useAppSelector(
    (state) => state.playlist
  );

  return (
    <div className=" w-full flex flex-col p-4 gap-6 beha">
      <div className=" flex items-center justify-between">
        <div className=" flex gap-4 items-center text-stone-500">
          <div className=" h-[4rem] w-[4rem] rounded-full bg-[#1ED760]/90 flex justify-center items-center hover:scale-105 cursor-pointer pl-1">
            <IoMdPlay className=" text-black text-4xl" />
          </div>
          <div className=" h-[2rem] w-[2rem] border-[3px] rounded-full flex items-center justify-center p-1 border-stone-500"></div>
          <IoIosMore className=" text-4xl" />
        </div>
      </div>
      <ul className=" w-full  ">
        <li className=" w-full flex justify-between px-6 py-2 border-b mb-3">
          <div className=" flex items-center gap-4">
            <p className=" text-sm text-stone-500 font-semibold"># </p>
            <p>Title</p>
          </div>
        </li>
        {singleAlbum?.tracks.items.map((item) => (
          <MusicList
            disc_number={item.track_number}
            key={item.id}
            artist={item.artists.map((name) => name.name)}
            duration={item.duration_ms}
            title={item.name}
          />
        ))}
      </ul>

      <div className=" w-full flex flex-col text-xs gap-1  text-stone-400">
        <p>{convertDate(singleAlbum.release_date)}</p>
        {singleAlbum?.copyrights.map((item) => (
          <p key={item.text}>{item.text}</p>
        ))}
      </div>

      <div className=" w-full  flex flex-col">
        <h1 className=" text-2xl font-semibold">
          More by {singleAlbum.artists[0]?.name}
        </h1>
        <ListAlbum album={single} />
        <ListAlbum album={featuring} />
      </div>
    </div>
  );
}
