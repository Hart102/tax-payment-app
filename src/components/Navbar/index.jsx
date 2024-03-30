import React from "react";
import { useRef, useState } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/react";
import { FaAngleDown } from "react-icons/fa";
import Logo from "@/assets/logo.png";

const Navbar = () => {
  const menu = useRef(null);
  const [isTrue, setIsTrue] = useState(false);

  window.addEventListener("scroll", () =>
    window.scrollY > 0 ? setIsTrue(true) : setIsTrue(false)
  );

  return (
    <nav
      className={
        !isTrue
          ? "px-5 py-4 w-screen fixed top-0 z-50"
          : "px-5 py-4 w-screen fixed top-0 z-50 bg-white shadow"
      }
    >
      <div className="w-full mx-auto text-black flex justify-between items-center capitalize relative text-sm">
        <div className="w-[40] h-[40px]">
          <img src={Logo} className="w-full h-full" />
        </div>

        <div
          ref={menu}
          className="w-full hidden bg-white border border-neutral-200 py-10 px-3 items-center [&_a]:cursor-pointer absolute top-14 left-0
          md:flex md:gap-10 md:w-auto md:top-0 md:py-0 md:border-0 md:relative md:bg-transparent"
        >
          <div className="flex flex-col md:flex-row gap-7">
            <Link
              to="howToRegister"
              smooth={true}
              duration={500}
              className="hover:text-green-600"
            >
              how to register
            </Link>
            <Link
              to="features"
              smooth={true}
              duration={500}
              className="hover:text-green-600"
            >
              features
            </Link>
            <Dropdown className="bg-white shadow-md py-3 rounded">
              <DropdownTrigger>
                <span className="cursor-pointer flex items-center gap-1">
                  Etax for <FaAngleDown />
                </span>
              </DropdownTrigger>
              <DropdownMenu
                aria-label="Static Actions"
                className="text-LightGray text-sm"
              >
                <DropdownItem
                  key="Individuals"
                  className="py-2 px-5 hover:bg-BgDark hover:text-green-600"
                >
                  <Link
                    to="individuals"
                    smooth={true}
                    duration={500}
                    className="hover:text-green-600"
                  >
                    Individuals
                  </Link>
                </DropdownItem>
                <DropdownItem
                  key="Corporations"
                  className="py-2 px-5 hover:bg-BgDark hover:text-green-600"
                >
                  <Link
                    to="corporations"
                    smooth={true}
                    duration={500}
                    className="hover:text-green-600"
                  >
                    Corporations
                  </Link>
                </DropdownItem>
                <DropdownItem
                  key="Consultants"
                  className="py-2 px-5 hover:bg-BgDark hover:text-green-600"
                >
                  <Link
                    to="consultants"
                    smooth={true}
                    duration={500}
                    className="hover:text-green-600"
                  >
                    Consultants
                  </Link>
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
            <Link
              to="calculator"
              smooth={true}
              duration={500}
              className="hover:text-green-600"
            >
              tax calculator
            </Link>
            <Link
              to="verify"
              smooth={true}
              duration={500}
              className="hover:text-green-600"
            >
              verify TCC
            </Link>
          </div>
        </div>
        <div className="flex items-center gap-3 text-sm md:flex-row md:text-base">
          <Link to="" className="text-green-600 cursor-pointer">
            Register as TaxPayer
          </Link>
          <Link
            to=""
            className="rounded px-5 py-2 text-green-600 bg-BgLight cursor-pointer"
          >
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
