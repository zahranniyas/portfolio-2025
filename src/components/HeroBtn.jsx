const HeroBtn = ({ title, containerClass, icon }) => {
  return (
    <button
      className={`relative flex pl-[55px] items-center justify-center cursor-pointer p-3 rounded-md bg-[#272727] hover:bg-black-200 group font-light transition-all active:scale-95 text-white mx-auto ${containerClass}`}
    >
      {title}
      <div className="bg-[#9DCD3E] flex justify-center items-center border-[#272727] border-[5px] rounded-xl absolute left-0 w-[50px] h-full group-hover:w-full group-hover:shadow-lg group-hover:shadow-[#CAF576]/50 group-hover:bg-[#CAF576] group-hover:border-0 transition-all overflow-hidden">
        <span className="group-hover:text-black text-lg group-hover:text-3xl transition-all duration-500">
          {icon}
        </span>
      </div>
    </button>
  );
};

export default HeroBtn;
