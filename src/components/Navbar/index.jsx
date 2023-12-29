import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { FaList } from "react-icons/fa";
import Logo from "@/assets/logo.png";

const links = ["how to register", "features", "tax calculator", "verify TCC"];

const index = () => {
  const [scroll, setScroll] = useState("");
  const menu = useRef(null);

  const mobileMenu = () => menu.current.classList.toggle("hidden");

  return (
    <nav
      className={`bg-white px-5 py-3 w-screen fixed top-0 backdrop-filter backdrop-blur backdrop-opacity-50 z-50`}
    >
      <div className="w-full mx-auto text-black flex justify-between items-center capitalize relative">
        <div className="w-[40] h-[40px]">
          <img src={Logo} className="w-full h-full" />
        </div>

        <div
          ref={menu}
          className="w-full hidden bg-white border border-neutral-200 lg:flex items-center py-10 px-3 lg:gap-10 text-sm 
          text-light absolute lg:w-auto top-14 left-0 lg:top-0 lg:py-0 lg:border-0 lg:relative lg:bg-transparent"
        >
          <div className="flex flex-col lg:flex-row gap-7">
            {links.map((item) => (
              <Link key={item} onClick={mobileMenu}>
                {item}
              </Link>
            ))}
          </div>
        </div>
        <div className="flex items-center lg:flex-row gap-3">
          {/* <Link to="">Register as TaxPayer</Link> */}
          <Link
            to=""
            className="font-bold rounded px-5 py-1 text-green-600 bg-BgLight"
          >
            Login
          </Link>
          <FaList onClick={mobileMenu} className="lg:hidden" />
        </div>
      </div>
    </nav>
  );
};

export default index;
