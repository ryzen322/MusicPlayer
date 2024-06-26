import { Link } from "react-router-dom";
import { Artist } from "../types";
import { converTime } from "../utils";
import { FaCheck } from "react-icons/fa6";

interface Tracks {
  time: number;
  image: string;
  title: string;
  name: string;
  index: number;
  artists: Artist[];
}

const ListPlayerTractks = ({
  time,
  image,
  title,
  name,
  index,
  artists,
}: Tracks) => {
  return (
    <li className=" w-full h-[3.5rem] rounded-sm px-3 flex items-center py-1 text-xs cursor-pointer hover:bg-stone-700/45 group/hover relative">
      <div className=" flex items-center h-full gap-3 w-[25rem] relative lg:w-[30rem]">
        <p className=" mr-3">{index}</p>
        <div className=" w-[3rem] h-full rounded-sm bg-stone-600 flex items-center justify-center overflow-hidden">
          <img
            src={image}
            alt=""
            className=" w-full h-full object-contain rounded-sm"
          />
        </div>
        <div className=" flex flex-col gap-1 ">
          <p className=" font-semibold text-sm leading-[14px]">{title}</p>
          <div className=" flex items-center gap-1 font-semibold">
            <div className=" w-[1rem] h-[1rem] rounded-sm bg-stone-600 flex items-center justify-center font-semibold">
              <p>E</p>
            </div>
            {artists.map((item, index) => (
              <Link key={index} to={""} className=" hover:underline">
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className=" w-[10rem] h-full flex  items-center justify-between px-4 relative lg:w-[15rem]">
        <span className=" font-semibold">{name}</span>
        <div className=" w-[1.25rem] h-[1.25rem] rounded-full bg-green-700  flex items-center justify-center group">
          <FaCheck className=" text-black " />
          <div className=" absolute px-2 py-2 w-[7rem] bg-stone-700 text-xs left-[5rem] hidden top-[-1.5rem]  rounded-sm group-hover:flex items-center justify-center shadow-lg">
            <p>Add to Favorites</p>
          </div>
        </div>
      </div>
      <div className=" h-full flex-1 flex items-center justify-center">
        {converTime(time)}
      </div>
    </li>
  );
};

export default ListPlayerTractks;
