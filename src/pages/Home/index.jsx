import PhoneImage from "@/assets/phone.png";
import Logo from "@/assets/logo.png";
import { motion } from "framer-motion";
import { Element } from "react-scroll";
import { Procedure, Features, Individuals, Questions, list } from "@/contents";
import TaxInput from "@/components/TaxInput";
import btnImg from "@/assets/comingsoon.svg";
import AppImg from "@/assets/app-mockup.png";

const Home = () => {
  return (
    <div className="leading-7 text-sm">
      <div className="bg-BgLight p-5 pt-20">
        <div className="flex flex-col-reverse items-center text-center md:text-start md:flex-row md:gap-8">
          <div className="w-full flex flex-col gap-7 mt-10 md:w-1/2">
            <motion.div
              className="flex flex-col gap-5"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.9 }}
              transition={{ duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, y: 80 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <h2 className="text-3xl font-semibold md:text-5xl">
                Pay taxes easily, <br /> file returns instantly.
              </h2>
              <p className="text-LightGray leading-6 text-sm">
                Pay taxes easily, file returns instantly. Pay your taxes online,
                file them instantly and get your tax certificate. All with just
                the click of a button.
              </p>
            </motion.div>
            <div className="flex justify-center md:justify-start gap-4">
              <button className="py-2 px-3 bg-green-600 text-white">
                I want to pay Taxes
              </button>
              <button className="bg-BgDark text-green-800 text-sm px-5">
                Learn more
              </button>
            </div>
            <div className="flex items-center gap-3 mt-24">
              <b>Official platform for LIRS</b>
              <img src={Logo} className="w-[30px]" />
            </div>
          </div>
          <motion.div
            className="w-full md:w-1/2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: 80 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <img src={PhoneImage} className="w-full h-full" />
          </motion.div>
        </div>
      </div>

      {/* HOW TO REGISTER */}
      <Element
        name="howToRegister"
        className="px-5 py-10 flex flex-col gap-8 md:py-16"
      >
        <div className="flex flex-col gap-4">
          <h2 className="text-3xl font-semibold">How to register</h2>
          <p className="text-LightGray">
            You can get started easily with three simple steps
          </p>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-5 md:px-8 md:py-5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 80 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          {Procedure.map((item) => (
            <div
              key={item.title}
              className="flex items-center justify-center gap-5 p-4 text-LightGray"
            >
              <img src={item.icon} className="w-[50px] h-[50px]" />
              <div>
                <p className="text-black mb-1">{item.title}</p>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </motion.div>
        <button className="mx-auto py-2 px-3 rounded text-green-600 bg-BgLight">
          I want to register
        </button>
      </Element>
      {/* FEATURES */}
      <Element name="features" className="bg-BgLight p-5" id="features">
        <div className="flex flex-col gap-4">
          <h2 className="text-xl font-semibold md:text-3xl">Features</h2>
          <p className="text-LightGray">
            Here are some major services that make the process easier.
          </p>
        </div>
        <div className="flex my-10 md:justify-end">
          <div className="w-full grid grid-cols-1 gap-8 rounded-lg md:w-3/5 md:grid-cols-2">
            {Features.map((feature) => (
              <div key={feature.title} className="bg-white p-5 py-10">
                <div className="flex justify-end">
                  <img src={feature.icon} className="w-[40px] h-[40px]" />
                </div>
                <p className="text-black mb-3">{feature.title}</p>
                <p className="text-LightGray">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Element>
      {/* INDIVIDUALS */}
      {Individuals.map((item, index) => (
        <Element key={index} name={item.section}>
          <div
            key={item.title}
            className={
              index % 2 > 0
                ? "w-full md:w-5/6 mx-auto flex flex-col md:flex-row-reverse gap-10 items-center py-5"
                : "w-full md:w-5/6 mx-auto flex flex-col md:flex-row gap-10 items-center py-5"
            }
          >
            <div className="w-5/6 text-LightGray flex flex-col gap-3 md:gap-5 md:px-10 md:w-1/2">
              <b className="text-black text-lg">{item.title}</b>
              <p className="text-LightGray">{item.desc}</p>
              {item.text}
            </div>
            <div className="w-4/6 md:w-1/2">
              <img src={item.icon} className="w-full md:w-2/3" />
            </div>
          </div>
        </Element>
      ))}
      {/* TAX COLLECTOR */}
      <div className="">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <Element name="calculator" className="bg-BgLight">
            <TaxInput
              title="Tax Calculator"
              body="Instantly estimate your tax due with the calculator. See disclaimer"
              placeholder="What is your annual income"
              btnText="Calculate my taxes"
            />
          </Element>
          <Element name="verify" className="bg-BgLight">
            <TaxInput
              title="Verify Tax Clearance Certificate (TCC)"
              body="Instantly verify and access your Tax Clearance Certificate(TCC)"
              placeholder="LA/TCC/0123456789"
              btnText="Verify TCC"
            />
          </Element>
        </div>
      </div>
      {/* QUESTIONS */}
      <div className="px-5 py-14 flex flex-col gap-10">
        <div className="flex flex-col gap-4">
          <h2 className="text-xl font-semibold md:text-3xl">Got questions?</h2>
          <p className="text-LightGray">
            Here are answers to the most commonly asked questions about Etax.
          </p>
        </div>
        <div className="w-full grid grid-cols-1 gap-8 rounded md:px-5 md:w-5/6 md:grid-cols-2">
          {Questions.map((item) => (
            <div
              key={item.title}
              className="flex flex-col gap-3 border border-nue rounded bg-white py-4 px-5"
            >
              <b className="text-neutral-600">{item.title}</b>
              <p className="text-LightGray text-sm ml-2 leading-6">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
      {/* ETAX MOBILE APP */}
      <div className="flex flex-col gap-3 px-5 bg-BgDark pt-10">
        <div className="flex flex-col">
          <h2 className="text-xl font-semibold md:text-3xl">
            The Etax Mobile App
          </h2>
          <p>Get easy and quick access via the mobile app.</p>
        </div>

        <div className="w-full lg:w-[70%] grid grid-cols-1 lg:grid-cols-2 items-center">
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
    </div>
  );
};

export default Home;
