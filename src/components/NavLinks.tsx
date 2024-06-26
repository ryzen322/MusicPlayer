import { NavLink } from "react-router-dom";
import { Links } from "../types";

const NavLinks = ({ icon, heading, to }: Links) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        isActive
          ? "flex items-start justify-center gap-2 cursor-pointer font-medium p-2 bg-[#272830] rounded-md text-white lg:justify-start"
          : "flex items-start justify-center gap-2 cursor-pointer font-medium p-2  rounded-md  text-[#42434C] lg:justify-start"
      }
    >
      {icon}
      <h1 className=" hidden lg:block text-sm font-medium">{heading}</h1>
    </NavLink>
  );
};

export default NavLinks;
