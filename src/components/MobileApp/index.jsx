import btnImg from "@/assets/comingsoon.svg";
import AppImg from "@/assets/app-mockup.png";
import { FaFacebook, FaInstagram, FaTwitter, FaWhatsapp } from "react-icons/fa";

const index = () => {
  const list = [
    "Generate Taxpayer ID",
    "File Returns",
    "View Assessments Raised",
  ];

  return (
    <div className="bg-BgDark pt-10">
      <div className="flex flex-col ps-5">
        <b className="text-[20px] font-semibold">The Etax Mobile App</b>
        <p>Get easy and quick access via the mobile app.</p>
      </div>

      <div className="w-full lg:w-[70%] grid grid-cols-1 lg:grid-cols-2 items-center ml-5 lg:mt-10">
        <div>
          {list.map((item) => (
            <div key={item} className="flex items-center gap-8 my-3">
              <div className="w-[8px] h-[8px] bg-green-600"></div>
              <p className="text-black">{item}</p>
            </div>
          ))}
          <img src={btnImg} className="my-10" />
        </div>

        <div className="hidden lg:flex justify-start">
          <div className="h-[250px] overflow-hidden">
            <img src={AppImg} className="w-full1" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
