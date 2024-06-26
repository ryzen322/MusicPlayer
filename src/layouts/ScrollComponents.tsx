import { ChildrenType } from "../types";

const ScrollComponents = ({ children }: ChildrenType) => {
  return (
    <ul className="  flex items-center overflow-x-scroll keep-scrolling gap-3 rounded-md cursor-pointer pl-6 shadow-lg scroll-pl-20 snap-x scroll-smooth">
      {children}
    </ul>
  );
};

export default ScrollComponents;
