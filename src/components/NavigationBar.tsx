import { loginURL } from "../hooks/spotify";
import { GoHomeFill } from "react-icons/go";
import { CiSearch } from "react-icons/ci";
import PlayerLayout from "../layouts/PlayerLayout";
import { LuLibrary } from "react-icons/lu";

const NavigationBar = () => {
  return (
    <PlayerLayout className=" ml-2  rounded-md w-[5rem] flex flex-col gap-2 bg-black pt-2">
      <div className="  flex flex-col items-center bg-[#121212] rounded-md">
        <div className=" w-full  rounded-md  flex  flex-col items-center ">
          <div className=" w-full h-[3.5rem] flex items-center justify-center  text-[1.75rem] cursor-pointer">
            <GoHomeFill className=" text-white" />
          </div>
          <div className=" w-full h-[3.5rem] flex items-center justify-center text-white text-[1.75rem] cursor-pointer">
            <CiSearch />
          </div>
        </div>
      </div>
      <div className="  flex flex-col items-center bg-[#121212] rounded-md">
        <div className=" w-full  rounded-md  flex  flex-col items-center ">
          <div className=" w-full h-[3.5rem] flex items-center justify-center  text-[1.75rem] cursor-pointer">
            <LuLibrary className=" text-white" />
          </div>
        </div>
        <a
          href={loginURL}
          className=" w-full  rounded-md  flex  flex-col items-center "
        >
          <div className=" w-full h-[3.5rem] flex items-center justify-center  text-[1.75rem] cursor-pointer">
            <LuLibrary className=" text-white" />
          </div>
        </a>
      </div>
      <div className="  flex flex-col items-center bg-[#121212] rounded-md mt-auto">
        <a
          href={loginURL}
          className=" w-full  rounded-md  flex  flex-col items-center "
        >
          <div className=" w-full h-[3.5rem] flex items-center justify-center  text-[1.75rem] cursor-pointer">
            <LuLibrary className=" text-white" />
          </div>
        </a>
      </div>
    </PlayerLayout>
  );
};

export default NavigationBar;
