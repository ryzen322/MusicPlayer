export function LoadingHeader() {
  return (
    <div className=" w-full h-[30%] pt-2 flex flex-col gap-3 p-4 justify-end bg-[#2A2A2B] lg:h-[50%] relative">
      <div className=" w-[40%] h-[1.25rem] bg-stone-500 rounded-md animate-pulse "></div>
      <div className=" w-[75%] h-[3rem] bg-stone-500 rounded-md animate-pulse "></div>
      <div className=" w-[40%] h-[1.25rem] bg-stone-500 rounded-md animate-pulse "></div>
    </div>
  );
}
