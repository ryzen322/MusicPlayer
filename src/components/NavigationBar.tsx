import { loginURL } from "../hooks/spotify";
import { GoHomeFill } from "react-icons/go";
import { CiSearch } from "react-icons/ci";
import PlayerLayout from "../layouts/PlayerLayout";
import { LuLibrary } from "react-icons/lu";
import { useAppSelector } from "../slice/store";
import { CiMusicNote1 } from "react-icons/ci";
import { Link } from "react-router-dom";

const NavigationBar = () => {
  const { playList } = useAppSelector((state) => state.playlist);

  return (
    <PlayerLayout className=" ml-2  rounded-md w-[4rem] max-w-[4rem] min-w-[4rem]  flex flex-col gap-2 bg-black pt-2">
      <div className="  flex flex-col items-center bg-[#121212] rounded-md">
        <div className=" w-full  rounded-md  flex  flex-col items-center ">
          <div className=" w-full h-[6dvh] flex items-center justify-center  text-[1.75rem] cursor-pointer">
            <GoHomeFill className=" text-white" />
          </div>
          <div className=" w-full h-[6dvh] flex items-center justify-center text-white text-[1.75rem] cursor-pointer">
            <CiSearch />
          </div>
        </div>
      </div>
      <div className=" w-full h-full  rounded-md  flex  flex-col items-center bg-[#121212] gap-2 overflow-hidden">
        <a
          href={loginURL}
          className=" w-full h-[6dvh] flex items-center justify-center  text-[1.75rem] cursor-pointer"
        >
          <LuLibrary className=" text-white" />
        </a>
        <ul className=" w-full h-full overflow-y-scroll keep-scrolling flex flex-col gap-3 px-[6px] scroll-auto rounded-md py-1 ">
          {playList.map((item) => (
            <Link
              to={`/tract/${item.id}`}
              key={item.id}
              className="w-full min-h-[6dvh] max-h-[6dvh]  flex items-center justify-center  text-[1.75rem] cursor-pointer bg-[#282828] rounded-md"
            >
              <div className=" w-full h-full rounded-md flex items-center justify-center">
                {item.images === null ? (
                  <CiMusicNote1 />
                ) : (
                  <img
                    src={item.images[1].url}
                    alt=""
                    className=" w-full h-full rounded-md object-cover"
                  />
                )}
              </div>
            </Link>
          ))}
        </ul>
      </div>
    </PlayerLayout>
  );
};

export default NavigationBar;
