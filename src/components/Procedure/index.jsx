import verify from "@/assets/verify.svg";
import secure from "@/assets/secure.svg";
import Id from "@/assets/tax-id.svg";

const data = [
  {
    icon: verify,
    title: "Verify Identify",
    desc: "Verify identity with NIN or BVN.",
  },
  {
    icon: secure,
    title: "Secure Account",
    desc: "Create your secured password..",
  },
  {
    icon: Id,
    title: "Get Taxpayer ID",
    desc: "Get your Tax-Payer ID instantly.",
  },
];

const index = () => {
  return (
    <div className="py-10 lg:py-16 flex flex-col gap-8">
      <div className="flex flex-col gap-4 ps-5">
        <b className="text-3xl font-semibold">How to register</b>
        <p>You can get started easily with three simple steps</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 lg:px-8 lg:py-5">
        {data.map((item) => (
          <div
            key={item.title}
            className="flex items-center justify-center gap-5 p-4"
          >
            <img src={item.icon} className="w-[50px] h-[50px]" />
            <div>
              <p className="text-black mb-1">{item.title}</p>
              <p>{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
      <button className="mx-auto py-2 px-3 rounded text-green-600 bg-BgLight">
        I want to register
      </button>
    </div>
  );
};

export default index;
