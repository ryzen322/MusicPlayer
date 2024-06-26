import { useMemo } from "react";
import { useAppSelector } from "../../slice/store";

export function Header() {
  const { singleAlbum } = useAppSelector((state) => state.playlist);

  const time = useMemo(() => {
    return singleAlbum?.tracks.items
      .map((item) => {
        const timeX = Math.floor(item.duration_ms / 1000);
        return timeX;
      })
      .reduce((curr, acc) => acc + curr, 0);
  }, [singleAlbum?.tracks.items]);

  function durationOfAlbum(time: number | undefined): string | undefined {
    if (time) {
      const minutes = Math.floor(time / 60);
      const seconds = time % 60;

      return `${minutes} minutes : ${
        seconds < 10 ? `0${seconds}` : seconds
      } seconds`;
    }
  }

  return (
    <div className=" w-full h-[15.5rem] bg-[#282828] p-4 flex flex-col justify-start lg:h-[22.5rem] lg:p-6 xl:h-[22rem]">
      <div className=" w-full flex justify-between">
        <div className=" h-[2rem] w-[2rem] rounded-full bg-black/70 cursor-pointer"></div>
        <div className="flex items-center">
          <div className=" h-[2rem] w-[2rem] rounded-full bg-black/70 cursor-pointer"></div>
        </div>
      </div>
      <div className=" mt-auto w-full flex gap-4 ">
        <div
          className=" h-[8.5rem] w-[9rem] min-w-[8.5rem] max-w-[8.5rem] max-h-[8.5rem] min-h-[8.5rem] rounded-sm bg-stone-700 overflow-hidden lg:min-w-[15rem] lg:max-w-[15rem] lg:min-h-[15rem] lg:max-h-[15rem] lg:p-2 
          
          xl:min-w-[14rem] xl:max-w-[14rem] xl:min-h-[14rem] xl:max-h-[14rem]
          2xl:min-w-[15rem] 2xl:max-w-[15rem] 2xl:min-h-[15rem] 2xl:max-h-[15rem]
          
          "
        >
          <img
            src="https://i.scdn.co/image/ab67616d00001e0240e0da427b6dfb8ccec9cc87"
            alt=""
            className=" w-full h-full rounded-md"
          />
        </div>
        <div className=" flex flex-col justify-between md:justify-end lg:gap-4 xl:gap-2 2xl:gap-6">
          <h1 className=" font-bold text-sm">{singleAlbum?.album_type}</h1>
          <p className=" text-[1.7rem] font-bold  leading-8 lg:text-[1.8rem] lg:leading-[3.5rem] 2xl:text-[4.03rem]">
            {singleAlbum?.name}
          </p>
          <div className="  flex items-center gap-2 text-xs">
            <div className=" h-[1.5rem] w-[1.5rem] bg-stone-900 rounded-full overflow-hidden">
              <img
                src="https://i.scdn.co/image/ab6761610000f1784f8f76117470957c0e81e5b2"
                alt=""
                className=" w-full h-full "
              />
            </div>
            <p className="  font-semibold">{singleAlbum?.artists[0].name}</p>
            <span>
              - {singleAlbum?.release_date} - {singleAlbum?.tracks.items.length}
              songs , {durationOfAlbum(time)}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
