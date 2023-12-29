import Navbar from "@/components/Navbar/index";
import BasicInfo from "@/components/BasicInfo/index";
import Procedure from "@/components/Procedure/index";
import Features from "@/components/Features";
import Individuals from "@/components/Individual";
import Tax from "@/components/Tax";
import Questions from "@/components/Questions";
import MobileApp from "@/components/MobileApp";
import Footer from "@/components/Footer";

const index = () => {
  return (
    <div className=" text-sm [&_b]:text-neutral-800 leading-loose text-neutral-700 bg-Overlay">
      <Navbar />
      <BasicInfo />
      <Procedure />
      <Features />
      <Individuals />
      <Tax />
      <Questions />
      <MobileApp />
      <Footer />
    </div>
  );
};

export default index;
