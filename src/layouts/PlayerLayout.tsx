import { useAppSelector } from "../slice/store";
import { ChildrenType } from "../types";

interface ClassName extends ChildrenType {
  className: string;
}

const PlayerLayout = ({ children, className }: ClassName) => {
  const { playingSize } = useAppSelector((state) => state.playerSize);

  return (
    <div
      className={` w-full ${
        playingSize ? "h-[83.25dvh]" : "h-[90dvh]"
      } rounded-l-md mt-1 overflow-y-scroll scroll-smooth keep-scrolling bg-[#141319] text-white ${className}`}
    >
      {children}
    </div>
  );
};

export default PlayerLayout;
