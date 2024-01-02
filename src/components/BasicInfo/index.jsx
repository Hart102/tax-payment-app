import PhoneImage from "@/assets/phone.png";

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
  );
};

export default index;
