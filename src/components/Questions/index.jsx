const data = [
  {
    title: "What is my Tax-Payer ID?",
    desc: "Tax-Payer ID is a unique number attributed to a registered individual/corporate body on the SmartAirs system. This allows users to manage their tax accounts and pay taxes to LIRS nationwide.",
  },
  {
    title: "Can I use both my BVN and NIN to register?",
    desc: "No you can not. You can only use one identification type to register on SmartAirs.",
  },
  {
    title: "How can I pay my taxes using SmartAirs?",
    desc: "As a registered taxpayer, make instant tax payments and download your receipts immediately using the secure e-payment channels.",
  },
  {
    title: "What do I do if I forget my taxpayer ID?",
    desc: "Click on the Forgot Taxpayer ID link and provide required information. Your unique Taxpayer ID would be sent to your registered email address and phone number.",
  },
];

const index = () => {
  return (
    <div className="py-14 p-5 flex flex-col gap-10">
      <div className="flex flex-col ps-5">
        <b className="text-[20px] font-semibold">Got questions?</b>
        <p>
          Here are answers to the most commonly asked questions about SmartAirs.
        </p>
      </div>
      <div className="w-full lg:w-2/3 grid grid-cols-1 lg:grid-cols-2 gap-8 rounded lg:px-5">
        {data.map((item) => (
          <div
            key={item.title}
            className="border border-neutral-100 rounded shadow bg-white p-5"
          >
            <b className="text-neutral-600">{item.title}</b>
            <p className="ml-2">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default index;
