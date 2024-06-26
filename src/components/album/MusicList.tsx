import { IoIosMore } from "react-icons/io";
import { converTime } from "../../utils";

type Music = {
  title: string;
  artist: string[];
  duration: number;
  disc_number: number;
};

const MusicList = ({
  artist,
  duration = 120000,
  title,
  disc_number,
}: Music) => {
  const time = converTime(duration);

  return (
    <li className=" min-h-[3.5rem] w-full  rounded-sm px-6 py-2 flex justify-between cursor-pointer hover:bg-stone-500/15">
      <div className=" flex gap-4 items-center">
        <p className=" text-[16px] text-stone-600 font-semibold ">
          {disc_number}
        </p>
        <div className=" flex flex-col">
          <h1 className=" text-[14px] font-medium">{title}</h1>

          <div className=" flex gap-2">
            {artist.map((item) => (
              <p
                key={item}
                className=" text-[13px] font-medium text-stone-400 hover:underline"
              >
                {item}
              </p>
            ))}
          </div>
        </div>
      </div>
      <div className=" flex items-center gap-4">
        <div className=" flex items-center justify-center h-[1.25rem] w-[1.25rem]  rounded-full border-[2px]"></div>
        <p className=" text-[13px] font-medium text-stone-400">{time}</p>
        <IoIosMore />
      </div>
    </li>
  );
};

export default MusicList;
