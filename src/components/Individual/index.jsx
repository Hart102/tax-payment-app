import IndividualImg from "@/assets/individuals.png";
import corporationsImg from "@/assets/consultants.png";
import consultantsImg from "@/assets/corporations.png";

const obects = [
  {
    flex: "lg:flex-row",
    icon: IndividualImg,
    title: "For Individuals",
    desc: "We have simplified the process to Tax Filing and payments for individuals.",
    text: (
      <p>
        With the SmartAirs mobile app, you are able to easily {""}
        <span className="text-green-600 font-bold">
          Calculate, Pay
        </span> and <span className="text-green-600 font-bold">File </span>
        your taxes.
      </p>
    ),
  },
  {
    flex: "lg:flex-row-reverse",
    icon: consultantsImg,
    title: "For Corporations",
    desc: "Corporations can easily manage company and employee taxes via an intuitive dashboard.",
    text: (
      <p>
        With SmartAirs, you are able to easily {""}
        <span className="text-green-600 font-bold">
          Manage, File and Pay
        </span>{" "}
        your taxes returns.
      </p>
    ),
  },
  {
    flex: "lg:flex-row",
    icon: corporationsImg,
    title: "Tax Professionals & Consultants",
    desc: "Manage your clients’ taxes efficiently and effectively and ensure their Tax Compliance with ease.",
    text: (
      <p>
        With SmartAirs, Tax Professionals like you, can {""}
        <span className="text-green-600 font-bold">
          File Returns, Prepare & Manage Payroll and Assessments & Payments
        </span>{" "}
        behalf of your clients, all in one place.
      </p>
    ),
  },
];

const Templates = ({ data, flexDirection }) => {
  return (
    <div
      className={`w-full lg:w-[80%] mx-auto flex flex-col ${flexDirection} gap-10 items-center lg:py-5`}
    >
      <div className="w-[90%] lg:w-1/2 flex flex-col lg:gap-5 px-5 lg:px-10">
        <b className="text-[20px]">{data.title}</b>
        <p>{data.desc}</p>
        {data.text}
      </div>
      <div className="w-[80%] lg:w-1/2">
        <img src={data.icon} className="w-full lg:w-2/3" />
      </div>
    </div>
  );
};

const index = () => {
  return (
    <div>
      {obects.map((object) => (
        <Templates
          key={object.title}
          data={object}
          flexDirection={object.flex}
        />
      ))}
    </div>
  );
};

export default index;
