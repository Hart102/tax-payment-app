import PhoneImage from "@/assets/phone.png";
import logo from "@/assets/logo.png";

const index = () => {
  return (
    <div className="bg-BgLight py-32 px-5">
      <div className="flex flex-col-reverse items-center text-center lg:text-start lg:flex-row">
        <div className="w-full lg:w-1/2 flex flex-col gap-5 mt-10 lg:mt-0">
          <b className="text-3xl lg:text-5xl">
            Pay taxes easily, <br /> file returns instantly.
          </b>
          <p>
            Pay taxes easily, file returns instantly. Pay your taxes online,
            file them instantly and get your tax certificate. All with just the
            click of a button.
          </p>
          <div className="flex justify-center lg:justify-start gap-4">
            <button className="py-2 px-3 bg-green-600 text-white">
              I want to pay Taxes
            </button>
            <button className="border px-5 hover:bg-green-600">
              Learn more
            </button>
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <img src={PhoneImage} className="w-full h-full" />
        </div>
      </div>
    </div>
    // <div className="bg-BgLight min-h-[100%] pt-5 pb-20">
    //   <div className="flex flex-col-reverse lg:flex-row gap-10 justify-between items-center pt-20 px-5">
    //     <div className="w-full h-auto lg:h-[500px] text-white ">
    //       {/* <img src={PhoneImage} className="w-full h-full" /> */}
    //       <div className="w-full h-full bg-[url('../src/assets/bgImage.jpg')] bg-center bg-cover bg-no-repeat top-0 absolute left-0 "></div>

    //       <div className="w-full flex flex-col gap-4 text-center justify-center hidde absolute top-0 left-0 h-full z-0 layer">
    //         <div className="flex flex-col items-center justify-center">
    //           <div className="text-4xl lg:text-5xl font-semibold flex flex-col gap-4 mt-5 lg:mt-0 text-Overlay">
    //             <b>Pay taxes easily,</b>
    //             <b>file returns instantly</b>
    //           </div>
    //           <p className="text-2xl font-light lg:max-w-[70%] my-8">
    //             Pay your taxes online, file them instantly and get your tax
    //             certificate. All with just the click of a button.
    //           </p>

    //           <div className="flex justify-center lg:justify-start gap-4">
    //             <button className="py-2 px-3 bg-green-600 text-white rounded">
    //               I want to pay Taxes
    //             </button>
    //             <button className="text-white border px-5 hover:bg-green-600">
    //               Learn more
    //             </button>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default index;
