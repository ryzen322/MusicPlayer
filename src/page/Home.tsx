import PlayerLayout from "../layouts/PlayerLayout";
import { GrFormPrevious } from "react-icons/gr";
import { MdOutlineNavigateNext } from "react-icons/md";
import ContextMain from "../components/ContextMain";
import { useSpotifyApi } from "../hooks/useSpotifyApi";

const Home = () => {
  useSpotifyApi();

  return (
    <PlayerLayout className="p-2 rounded-l-md w-full">
      {
        <>
          <div className=" flex items-center gap-2 ">
            <div className=" flex gap-2">
              <div className=" h-10 w-10 rounded-full bg-[#17171f] flex items-center justify-center cursor-pointer hover:bg-slate-700 transition-all duration-200">
                <GrFormPrevious size={"25px"} />
              </div>
              <div className=" h-10 w-10 rounded-full bg-[#17171f] flex items-center justify-center cursor-pointer hover:bg-slate-700 transition-all duration-200">
                <MdOutlineNavigateNext size={"25px"} />
              </div>
            </div>

            <div className=" ml-auto h-10 w-10  rounded-full  cursor-pointer bg-slate-600"></div>
          </div>
          <ContextMain />
        </>
      }
    </PlayerLayout>
  );
};

export default Home;
