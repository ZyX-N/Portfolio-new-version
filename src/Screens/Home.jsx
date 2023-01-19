import React from "react";

const Home = () => {
  const textBounce = (e) => {
    e.target.classList.add("blast");
    setTimeout(() => {
      e.target.classList.remove("blast");
    }, 1000);
  };

  return (
    <section className="w-full h-full">
      <div className="w-full h-full">
        {/* <span
          className="text-4xl font-semibold text-white hover:text-[#14d9d8]"
          onMouseEnter={(e) => {
            textBounce(e);
          }}
        >
          A
        </span> */}
        <div className="w-2/3 flex flex-col justify-around">
            <h1 className="text-slate-50 text-[80px] leading-[80px] font-hind">Hey,</h1>
            <h1 className="text-slate-50 text-[80px] leading-[80px] font-hind">I'm Aman</h1>
            <h1 className="text-slate-50 text-[80px] leading-[80px] font-hind">Web Developer</h1>
            <p className="text-slate-50">Front End Developer / Back End Developer</p>
            <div className="flex">
                <a href="/" className="py-3 px-6 bg-slate-50 rounded-md">Resume</a>
                <a href="/" className="py-3 px-6 bg-slate-50 rounded-md">Hire me</a>
            </div>
        </div>
        <div className="w-1/3"></div>
      </div>
    </section>
  );
};

export default Home;
