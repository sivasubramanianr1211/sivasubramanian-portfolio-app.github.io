// Header.tsx

import React, {useState} from "react";
import { Link } from "react-scroll";
import clsx from "clsx";
import useWindowSize from "../utils/useWindowSize";
import { ReactComponent as MenuIcon } from "../assets/menu-icon.svg";

const Header: React.FC = () => {
  const { width: windowWidth } = useWindowSize();
  console.log(windowWidth);
  const isMobile: boolean = windowWidth !== undefined && windowWidth < 768;

  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <header>
      <nav>
        <div className="flex justify-end">
          {isMobile && (
            <>
              <div className="ml-auto cursor-pointer" onClick={toggleMenu}>
                <MenuIcon />
              </div>
              {console.log('ismenu',isMenuOpen )}
              {isMenuOpen && (
                <div className="fixed inset-0 bg-gray-800 bg-opacity-75 z-50">
                  <div className="flex items-center justify-end p-4">
                    <div className="cursor-pointer" onClick={toggleMenu}>
                      {/* Close icon or any other close mechanism */}
                      <span className="text-white">Close</span>
                    </div>
                  </div>
                  <div className="flex flex-col items-center text-white">
                    <a href="#description" className="py-2">
                      Description
                    </a>
                    <a href="#skillset" className="py-2">
                      Skillset
                    </a>
                    <a href="#contact" className="py-2">
                      Contact
                    </a>
                  </div>
                </div>
              )}
            </>
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
