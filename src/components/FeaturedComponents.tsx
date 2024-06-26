import { FaPause, FaPlay } from "react-icons/fa";
import { useAppSelector } from "../slice/store";
import { Link } from "react-router-dom";
import usePlay from "../utils";

interface Featured {
  image: string;
  name: string;
  uri: string;
  id: string;
}

const FeaturedComponents = ({ image, name, uri, id }: Featured) => {
  const { playlistUri } = useAppSelector((state) => state.playlist);

  const { playMusic } = usePlay();

  return (
    <Link
      to={`playerInfo/${id}`}
      className=" min-h-[19rem] min-w-[14rem] snap-start hover:bg-[#383840]/25 transition-all  rounded-md flex flex-col items-center py-2 relative group my-1"
    >
      <div className=" h-[13rem] w-[13rem]  rounded-full overflow-hidden mt-4 relative">
        <img
          src={image}
          alt=""
          className=" w-full h-full rounded-full object-contain"
        />
      </div>
      <h1 className=" mt-4 text-md relative">{name}</h1>
      <div
        className=" absolute w-14 h-14 rounded-full bg-[#1ed760] flex justify-center items-center right-7 bottom-[3.25rem] opacity-0 group-hover:opacity-100 group-hover:bottom-[4rem] transition-all ease-in duration-75 shadow-xl"
        onClick={(e) => {
          e.preventDefault();
          playMusic([uri]);
        }}
      >
        {playlistUri[0] === uri ? (
          <FaPause className=" text-black text-2xl" />
        ) : (
          <FaPlay className=" text-black text-2xl" />
        )}
      </div>
    </Link>
  );
};

export default FeaturedComponents;
