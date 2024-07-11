export const RecommendTrack = () => {
  return (
    <ul className=" w-full flex items-center">
      <li className=" p-2  rounded-md grid grid-cols-4 w-full items-center cursor-pointer gap-3 ">
        <div className=" flex gap-2 items-center col-span-2">
          <div className=" h-[2.5rem] w-[2.5rem] min-w-[2.5rem] bg-stone-300 rounded-md text-black"></div>
          <div className=" h-full flex flex-col justify-between ">
            <h1 className=" text-sm font-semibold truncate">Kaekae Kitan</h1>
            <p className=" text-xs text-stone-500 font-semibold">Eve</p>
          </div>
        </div>
        <div className=" flex items-center justify-center">
          <p className=" truncate text-xs font-semibold">
            KaiKai Kita / Ao No Walll
          </p>
        </div>
        <div className=" flex items-center justify-center">
          <div className=" w-[3rem] h-[2rem] bg-stone-800 rounded-md border border-white flex items-center justify-center">
            <p className=" font-semibold text-xs">Add</p>
          </div>
        </div>
      </li>
    </ul>
  );
};
