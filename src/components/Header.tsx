// Header.tsx

import React from "react";
import { Link } from "react-scroll";
import clsx from "clsx";
import useWindowSize from "../utils/useWindowSize";
import { ReactComponent as MenuIcon } from "../assets/menu-icon.svg";

const Header: React.FC = () => {
  const { width: windowWidth } = useWindowSize();
  console.log(windowWidth);
  const isMobile: boolean = windowWidth !== undefined && windowWidth < 768;

  return (
    <header>
      <nav>
        <div className="flex justify-end">
          {isMobile && (
            <div className="ml-auto cursor-pointer">
              <MenuIcon />
            </div>
          )}
        </div>
        <div className="flex justify-center items-center">
          <ul className={clsx(isMobile ? "hidden" : "flex", "space-x-[20px]")}>
            <Link to="description" offset={-80} smooth={true} duration={700}>
              <li className="p-[6px] text-[20px] text-[#1b0e64] font-[600] cursor-pointer bg-[#3bc9f3] rounded-[8px] p-2 px-[14px]">
                Description
              </li>
            </Link>
            <Link to="skillset" offset={-80} smooth={true} duration={700}>
              <li className="p-[6px] text-[20px] text-[#1b0e64] font-[600] cursor-pointer bg-[#3bc9f3] rounded-[8px] p-2 px-[14px]">
                Skillset
              </li>
            </Link>
            <Link to="contact" offset={-80} smooth={true} duration={700}>
              {" "}
              <li className="p-[6px] text-[20px] text-[#1b0e64] font-[600] cursor-pointer bg-[#3bc9f3] rounded-[8px] p-2 px-[14px]">
                Contact
              </li>
            </Link>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
