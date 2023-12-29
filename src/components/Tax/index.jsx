const Inputs = ({
  background,
  title,
  desc,
  icon,
  placeholder,
  btnText,
  onchange,
  onclick,
}) => {
  return (
    <div className={`py-20 lg:px-5 ${background}`}>
      <div className="flex flex-col pe-5 ps-5 mb-8">
        <b className="text-[20px] font-semibold">{title}</b>
        <p>{desc}</p>
      </div>
      <form className="flex flex-col gap-2">
        <div className="flex w-full gap-2 px-4">
          <input
            type="text"
            className="w-full py-2 px-3 outline-none focus:outline-none bg-transparent border-0 border-b-2 focus:border-b-green-600 cursor-default duration-300 delay-300"
            placeholder={placeholder}
            onChange={onchange}
          />
        </div>
        <div className="flex">
          <button
            onClick={onclick}
            className="bg-green-600 text-white py-2 px-3 rounded mx-auto mt-8"
          >
            {btnText}
          </button>
        </div>
      </form>
    </div>
  );
};

const index = () => {
  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <Inputs
          background="bg-BgLight"
          title="Tax Calculator"
          desc="Instantly estimate your tax due with the calculator. See disclaimer"
          placeholder="What is your annual income ?"
          btnText="calculate my taxes"
        />

        <Inputs
          background="bg-BgDark"
          title="Verify Tax Clearance Certificate (TCC)"
          desc="Instantly verify and access your Tax Clearance Certificate(TCC)"
          placeholder="LA/TCC/0123456789"
          btnText="Verify TCC"
        />
      </div>
    </div>
  );
};

export default index;
