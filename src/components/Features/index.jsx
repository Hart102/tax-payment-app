import payment from "@/assets/hand.svg";
import returns from "@/assets/returns-filing.svg";
import assesments from "@/assets/assessments.svg";
import tax from "@/assets/tax-consultants.svg";

const features = [
  {
    icon: payment,
    title: "Instant Payments",
    desc: "Pay your taxes and get receipts Instantly, using the secure e-payment channels.",
  },
  {
    icon: returns,
    title: "Returns Filing",
    desc: "Securely and swiftly file Tax Returns from the comfort of your home.",
  },
  {
    icon: assesments,
    title: "Assessments/E-Alerts",
    desc: "View assessments, instantly receive alerts and notices directly on your mobile.",
  },
  {
    icon: tax,
    title: "Tax Professionals",
    desc: "Securely assign your preferred professional to manage your taxes.",
  },
];

const Features = () => {
  return (
    <div className="bg-BgLight p-5">
      <div className="flex flex-col gap-4 ps-5">
        <b className="text-3xl font-semibold">Features</b>
        <p>Here are some major services that make the process easier.</p>
      </div>
      <div className="flex lg:justify-end my-10 lg:my-20">
        <div className="w-full lg:w-2/3 grid grid-cols-1 lg:grid-cols-2 gap-8 rounded">
          {features.map((feature) => (
            <div key={feature.title} className="bg-white p-10">
              <div className="flex justify-end">
                <img src={feature.icon} className="w-[40px] h-[40px]" />
              </div>
              <p className="text-black mb-1">{feature.title}</p>
              <p>{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
