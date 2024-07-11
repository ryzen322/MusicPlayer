import { FaPlay } from "react-icons/fa";
import { converTime, dateFnsAgo } from "../utils";

interface TrackCompoments {
  time: number;
  title: string;
  date: string;
  number: number;
  feat?: string[];
  image?: string;
  album?: string;
}

export const TractList = ({
  date,
  time,
  title,
  number,
  feat,
  image,
  album,
}: TrackCompoments) => {
  return (
    <li className="  w-full   grid grid-cols-5 text-stone-400 text-sm rounded-md gap-6 hover:bg-stone-700/35 cursor-pointer transition-all duration-200 h-[3.5rem] sm:h-[4rem] group">
      <div className="  col-span-2 flex items-center pl-6 gap-3 py-[6px] overflow-hidden">
        <div className=" h-full w-[10px] max-w-[10px] min-w-[10px]  flex items-center">
          <h1 className=" text-base font-medium">
            <span className=" block text-xs group-hover:hidden">{number}</span>
            <FaPlay className=" text-[11px] hidden group-hover:block" />
          </h1>
        </div>
        <div className=" h-full w-[3rem] rounded-md  flex-shrink-0 overflow-hidden sm:w-[4rem]">
          <img src={image} alt="" className=" w-full h-full object-cover" />
        </div>
        <div className=" flex flex-col justify-between h-full w-full  ">
          <h1 className=" text-sm font-semibold text-white truncate">
            {title}
          </h1>
          <div className=" flex gap-1">
            {feat?.map((item) => (
              <p key={item} className="  text-xs font-semibold">
                {item}
              </p>
            ))}
          </div>
        </div>
      </div>
      <div className="  flex items-center ">
        <h1 className=" text-xs font-semibold truncate text-stone-400">
          {album}
        </h1>
      </div>
      <div className="  flex items-center justify-center">
        <h1 className=" text-xs font-semibold truncate text-stone-400">
          {dateFnsAgo(date)}
        </h1>
      </div>
      <div className="  flex items-center justify-center">
        <h1 className=" text-xs font-semibold truncate text-stone-400">
          {converTime(time)}
        </h1>
      </div>
    </li>
  );
};
