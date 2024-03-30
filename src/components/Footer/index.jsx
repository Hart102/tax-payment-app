import { Link, animateScroll as scroll } from "react-scroll";
import Logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <div className="px-5 py-10 [&_p]:text-LightGray [&_a]:text-LightGray [&_a]:text-sm leading-7">
      <div className="md:flex gap-x-12 gap-y-5">
        <div className="w-5/6 md:w-[30%] mb-10 md:mb-0">
          <div className="mb-5">
            <div className="w-[40px] h-[40px]">
              <img src={Logo} className="w-full h-full" />
            </div>
          </div>
          <p className="text-sm leading-7">
            SmartAirs helps you do everything from registration to filing your
            taxes in a secure manner and at the click of a button.
          </p>
        </div>
        <div className="w-full lg:w-4/5 grid grid-cols-2 md:grid-cols-4 gap-10 [&_a]:text-LightGray [&_a]:cursor-pointer">
          <div>
            <b>About SmartAirs</b>
            <div className="flex flex-col gap-4 mt-4">
              <Link
                to="howToRegister"
                smooth={true}
                duration={500}
                className="hover:text-green-600"
              >
                How to Register
              </Link>
              <Link
                to="features"
                smooth={true}
                duration={500}
                className="hover:text-green-600"
              >
                Features
              </Link>
            </div>
          </div>
          <div>
            <b>ETax For</b>
            <div className="flex flex-col gap-4 mt-4">
              <Link
                to="individuals"
                smooth={true}
                duration={500}
                className="hover:text-green-600"
              >
                Individuals
              </Link>
              <Link
                to="corporations"
                smooth={true}
                duration={500}
                className="hover:text-green-600"
              >
                Corporations
              </Link>
              <Link
                to="consultants"
                smooth={true}
                duration={500}
                className="hover:text-green-600"
              >
                Consultants
              </Link>
            </div>
          </div>
          <div>
            <b>Legal</b>
            <div className="flex flex-col gap-4 mt-4">
              <Link to="" className="hover:text-green-600">
                Privacy PoLinkcy
              </Link>
              <Link to="" className="hover:text-green-600">
                FAQs
              </Link>
            </div>
          </div>
          <div>
            <b>Quick Actions</b>
            <div className="flex flex-col gap-2 mt-4">
              <Link className="hover:text-green-600">Pay taxes</Link>
              <Link
                to="calculator"
                smooth={true}
                duration={500}
                className="hover:text-green-600"
              >
                Tax Calculator
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center mt-10">
        <Link to="www.bemssoft.ng">Copyright ©️ BemsSoft</Link>
      </div>
    </div>
  );
};

export default Footer;
//  www.bemssoft.ng;
