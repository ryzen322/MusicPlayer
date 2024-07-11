import { RecommendTrack } from "./RecommendTrack";

export const RecommendationTrack = () => {
  return (
    <div className=" flex flex-col mb-[5rem] w-full px-4 gap-6">
      <div className=" flex flex-col">
        <h1 className=" font-semibold text-2xl">Recommended</h1>
        <p className=" text-xs text-stone-400">
          Based on what's in this playlist
        </p>
      </div>
      {<RecommendTrack />}
    </div>
  );
};
