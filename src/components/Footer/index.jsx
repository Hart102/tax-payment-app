import { Link } from "react-router-dom";
import Logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <div className="py-10 lg:py-20">
      <div className="lg:flex gap-24 px-5">
        <div className="w-[90%] lg:w-[30%] mb-10 lg:mb-0">
          <div className="mb-5">
            <div className="w-[40px] h-[40px]">
              <img src={Logo} className="w-full h-full" />
            </div>
          </div>
          <p>
            SmartAirs helps you do everything from registration to filing your
            taxes in a secure manner and at the click of a button.
          </p>
        </div>
        <div className="w-full lg:w-[70%] grid grid-cols-2 lg:grid-cols-4 gap-10 [&_a]:text-neutral-700">
          <div>
            <b>About SmartAirs</b>
            <div className="flex flex-col">
              <Link to="" className="hover:text-green-600">
                How to Register
              </Link>
              <Link to="" className="hover:text-green-600">
                Features
              </Link>
            </div>
          </div>
          <div>
            <b>SmartAirs For</b>
            <div className="flex flex-col">
              <Link to="" className="hover:text-green-600">
                Individuals
              </Link>
              <Link to="" className="hover:text-green-600">
                Corporations
              </Link>
              <Link to="" className="hover:text-green-600">
                Consultants
              </Link>
            </div>
          </div>
          <div>
            <b>Legal</b>
            <div className="flex flex-col">
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
            <div className="flex flex-col">
              <Link to="" className="hover:text-green-600">
                Pay taxes
              </Link>
              <Link to="" className="hover:text-green-600">
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
