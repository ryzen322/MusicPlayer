import { IoMdPlay } from "react-icons/io";
import usePlay from "../utils";
import { Link } from "react-router-dom";

const ListMusic = ({
  children,
  uri,
  id,
}: {
  children: React.ReactNode;
  uri: string;
  id: string;
}) => {
  const { playMusic } = usePlay();

  // to={`playerInfo/${id}`}

  return (
    <Link
      to={`/album/${id}`}
      className=" shadow-md flex flex-col gap-2 
min-w-[13rem] min-h-[17rem] max-w-[13rem] max-h-[17rem] p-3 rounded-sm cursor-pointer hover:bg-stone-900 relative group snap-always snap-center"
    >
      {children}
      <div
        className=" bg-green-700 flex items-center justify-center shadow-lg rounded-full absolute max-w-[3rem] max-h-[3rem] min-w-[3rem] min-h-[3rem] bottom-[60px] right-[19px] opacity-0 group-hover:bottom-[66px] group-hover:opacity-100 transition-all ease-in-out duration-300 pl-1 z-40"
        onClick={(e) => {
          e.preventDefault();
          playMusic([uri]);
        }}
      >
        <IoMdPlay className=" text-black text-2xl" />
      </div>
    </Link>
  );
};

export default ListMusic;
