import React from "react";
import { navData } from "../data";
import { CgClose } from "react-icons/cg";

const NavMobile = ({ setNavMobile }) => {
  return (
    <div className="lg:hidden bg-violet h-full fixed top-0 right-0 w-80 flex flex-col items-center">
      <div
        onClick={() => setNavMobile(false)}
        className="absolute top-2 right-2 cursor-pointer">
        <CgClose className="text-3xl" />
      </div>
      <ul className="text-xl flex flex-col gap-y-8 mt-16">
        {navData.map((item, index) => (
          <li key={index}>
            <a href={item.href}>{item.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavMobile;
