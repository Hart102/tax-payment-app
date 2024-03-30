const TaxInput = ({ title, body, placeholder, onchange, btnText }) => {
  return (
    <div className="flex flex-col gap-5 py-14">
      <div className="flex flex-col gap-3 px-5">
        <b className="text-lg font-semibold">{title}</b>
        <p className="text-LightGray">{body}</p>
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
            onClick={onchange}
            className="bg-green-600 text-white py-2 px-3 rounded mx-auto mt-8"
          >
            {btnText}
          </button>
        </div>
      </form>
    </div>
  );
};

export default TaxInput;
