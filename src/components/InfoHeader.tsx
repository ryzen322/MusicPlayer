import { MdVerified } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";
import { useAppSelector } from "../slice/store";

// type Ref = HTMLDivElement;

const InfoHeader = () => {
  const { artistInfo } = useAppSelector((state) => state.category);

  const followers = artistInfo?.followers.total;
  const f = new Intl.NumberFormat().format(followers!);
  console.log();

  return (
    <div className=" w-full h-[30%]  flex flex-col lg:h-[50%] relative">
      <div className=" w-full h-[15%] relative z-20 px-4 flex items-center justify-between">
        <div className=" h-[2rem] w-[2rem] rounded-full bg-black/60 flex items-center justify-center cursor-pointer">
          <GrFormPrevious className=" text-2xl" />
        </div>
      </div>
      <div className=" relative z-30 flex-1 flex flex-col justify-end gap-2 p-4">
        <span className=" flex items-center gap-2 text-sm font-semibold lg:text-2xl">
          <MdVerified />
          <h1>Verified Artist</h1>
        </span>
        <h1 className=" text-5xl font-bold lg:text-8xl">{artistInfo?.name}</h1>
        <p className=" text-sm font-semibold lg:text-lg">{f} followers</p>
      </div>

      <div className=" absolute z-10 w-full h-full overflow-hidden  top-0 left-0">
        <img
          src={artistInfo?.images[1].url}
          alt=""
          className=" w-full h-full object-cover "
        />
      </div>
      <div className=" absolute h-full w-full top-0 left-0 bg-gradient-to-b from-black/10 to-black/90 z-20"></div>
    </div>
  );
};

export default InfoHeader;
