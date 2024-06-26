import { ChildrenType } from "../types";

const BoxComponents = ({ children }: ChildrenType) => {
  return (
    <div className="snap-start min-w-[9rem] h-[12rem] rounded-md  overflow-hidden relative">
      {children}
    </div>
  );
};

export default BoxComponents;
