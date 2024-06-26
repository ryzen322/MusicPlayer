import { converTime } from "../utils";

interface TrackPay {
  title: string;
  artist: string;
  image: string;
  track_number?: number;
  uri?: string;
  duration: number;
}

const TrackRow = ({
  artist,
  duration,
  image,
  title,
  track_number,
}: TrackPay) => {
  const timeFormat = converTime(duration);

  return (
    <tr className="  cursor-pointer group">
      <td className=" flex items-center gap-3 text-xs rounded-l-sm overflow-hidden group-hover:bg-stone-600 transition-all duration-100 ">
        <p className="  w-[1.75rem] text-center">{track_number}</p>
        <div className=" h-[2.75rem] w-[3rem] my-1 bg-stone-700 rounded-sm  overflow-hidden">
          <img src={image} alt="" className=" w-full h-full" />
        </div>
        <div className=" flex flex-col ">
          <p className=" truncate">{title}</p>
          <span className=" text-stone-500">By.{artist}</span>
        </div>
      </td>
      <td className=" text-xs group-hover:bg-stone-600 transition-all duration-100 ">
        {title}
      </td>
      <td className=" text-xs group-hover:bg-stone-600 transition-all duration-100  rounded-r-sm">
        {timeFormat}
      </td>
    </tr>
  );
};

export default TrackRow;
