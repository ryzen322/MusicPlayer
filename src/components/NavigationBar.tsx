import { FaHome } from "react-icons/fa";
import { BiSolidCategory } from "react-icons/bi";
import { MdOutlineLibraryAddCheck } from "react-icons/md";
import { FaCog } from "react-icons/fa";
// import NavLinks from "./NavLinks";
import { LinksArray } from "../types";
// import { FaPlus } from "react-icons/fa6";
import { useAppSelector } from "../slice/store";
// import { Link } from "react-router-dom";
import { loginURL } from "../hooks/spotify";

const NavigationBar = () => {
  const { playList } = useAppSelector((state) => state.playlist);

  const linkArray: LinksArray[] = [
    {
      id: 1,
      heading: "Home",
      icon: <FaHome className={`text-2xl lg:text-lg`} />,
      to: "/",
    },
    {
      id: 2,
      heading: "Library",
      icon: <BiSolidCategory className={`text-2xl lg:text-lg`} />,
      to: "library",
    },
    {
      id: 3,
      heading: "Categories",
      icon: <MdOutlineLibraryAddCheck className={`text-2xl lg:text-lg`} />,
      to: "categories",
    },
    {
      id: 4,
      heading: "Settings",
      icon: <FaCog className={`text-2xl lg:text-lg`} />,
      to: "settings",
    },
  ];
  playList;
  linkArray;

  return (
    <div className=" w-[5rem]">
      <a href={loginURL} className=" text-sm text-white">
        Login
      </a>
    </div>
    // <div className=" h-full w-[16%]  flex flex-col px-2 py-2 font-Roboto relative rounded-md bg-[#1a1a22]">
    //   <ul className=" flex flex-col gap-3 mt-8  rounded-md">
    //     {linkArray.map((item) => (
    //       <NavLinks
    //         key={item.id}
    //         heading={item.heading}
    //         to={item.to}
    //         icon={item.icon}
    //       />
    //     ))}

    //   </ul>

    //   <div className=" flex flex-col p-2 mt-12 font-Roboto text-[#42434C] bg-[#121212] rounded-md">
    //     <h1 className=" text-sm text-white/45 font-medium lg:text-base">
    //       Playlist
    //     </h1>

    //     {playList.length === 0 ? (
    //       ""
    //     ) : (
    //       <ul className=" flex flex-col  items-center gap-3 mt-2 w-full max-h-[15rem]  overflow-y-scroll keep-scrolling">
    //         {playList.map((item) => {
    //           if (item.images) {
    //             return (
    //               <Link
    //                 to={`about/${item.id}`}
    //                 key={item.id}
    //                 className=" min-h-10 rounded-md overflow-hidden cursor-pointer lg:w-full flex items-center gap-4 text-sm"
    //               >
    //                 <div className=" w-[50px] h-full min-w-[50px] rounded-md overflow-hidden">
    //                   <img
    //                     className=" w-full h-full object-cover "
    //                     src={`${item.images[0].url}`}
    //                     alt=""
    //                   />
    //                 </div>
    //                 <h1 className=" hidden lg:block text-xs font-semibold">
    //                   {/* {item.name} */}
    //                 </h1>
    //               </Link>
    //             );
    //           }
    //         })}
    //       </ul>
    //     )}
    //     <li className="  flex items-center justify-center mt-2 bg-[#272830] py-2 rounded-md text-stone-100 cursor-pointer lg:w-full">
    //       <FaPlus />
    //     </li>
    //   </div>
    // </div>
  );
};

export default NavigationBar;
