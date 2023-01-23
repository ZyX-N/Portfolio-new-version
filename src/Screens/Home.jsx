import React from "react";
import Bouncingword from "../Components/Bouncingword";
import Scrollbounce from "../Components/ScrollBouce";

const Home = (props) => {
  const textBounce = (e) => {
    e.target.classList.add("blast");
    setTimeout(() => {
      e.target.classList.remove("blast");
    }, 1000);
  };

  return (
    <section className="w-full h-screen relative">
      <span className={`fixed bottom-4 ${props.open === true ? "left-32" : "left-0"}`}>
        <Scrollbounce text="Scroll Down" textClass="text-white" />
      </span>
      <span className="fixed bottom-4 right-0">
        <Scrollbounce text="Scroll Down" textClass="text-white" />
      </span>
      <img
        src="./static/images/logo-light.png"
        className="absolute top-5 right-10 w-40"
      />
      <div className="w-full h-full flex items-center">
        <div className="sm:w-2/3 flex flex-col justify-around ml-5 sm:ml-10 md:ml-20">
          <h1 className="text-slate-50 text-[35px] sm:text-[60px] md:text-[80px] sm:leading-[60px] leading-[30px] md:leading-[80px] font-paytone my-1.5 font-thin flex">
            <Bouncingword
              text="H"
              textClass="hover:text-[#14d9d8]"
              onMouseEnter={(e) => {
                textBounce(e);
              }}
            />
            <Bouncingword
              text="e"
              textClass="hover:text-[#14d9d8]"
              onMouseEnter={(e) => {
                textBounce(e);
              }}
            />
            <Bouncingword
              text="y"
              textClass="hover:text-[#14d9d8]"
              onMouseEnter={(e) => {
                textBounce(e);
              }}
            />
            <Bouncingword
              text=","
              textClass="hover:text-[#14d9d8]"
              onMouseEnter={(e) => {
                textBounce(e);
              }}
            />
          </h1>
          <h1 className="text-slate-50 text-[35px] sm:text-[60px] md:text-[80px] sm:leading-[60px] leading-[30px] md:leading-[80px] font-paytone my-1.5 font-thin flex">
            <Bouncingword
              text="I"
              textClass="hover:text-[#14d9d8]"
              onMouseEnter={(e) => {
                textBounce(e);
              }}
            />
            <Bouncingword
              text="'"
              textClass="hover:text-[#14d9d8]"
              onMouseEnter={(e) => {
                textBounce(e);
              }}
            />
            <Bouncingword
              text="m"
              textClass="hover:text-[#14d9d8]"
              onMouseEnter={(e) => {
                textBounce(e);
              }}
            />
            <Bouncingword
              text="A"
              textClass="hover:text-[#14d9d8] ml-4"
              onMouseEnter={(e) => {
                textBounce(e);
              }}
            />
            <Bouncingword
              text="m"
              textClass="hover:text-[#14d9d8]"
              onMouseEnter={(e) => {
                textBounce(e);
              }}
            />
            <Bouncingword
              text="a"
              textClass="hover:text-[#14d9d8]"
              onMouseEnter={(e) => {
                textBounce(e);
              }}
            />
            <Bouncingword
              text="n"
              textClass="hover:text-[#14d9d8]"
              onMouseEnter={(e) => {
                textBounce(e);
              }}
            />
            <Bouncingword
              text=","
              textClass="hover:text-[#14d9d8]"
              onMouseEnter={(e) => {
                textBounce(e);
              }}
            />
          </h1>
          <h1 className="text-slate-50 text-[35px] sm:text-[60px] md:text-[80px] sm:leading-[60px] leading-[30px] md:leading-[80px] font-paytone my-1.5 font-thin flex">
            <Bouncingword
              text="W"
              textClass="hover:text-[#14d9d8]"
              onMouseEnter={(e) => {
                textBounce(e);
              }}
            />
            <Bouncingword
              text="e"
              textClass="hover:text-[#14d9d8]"
              onMouseEnter={(e) => {
                textBounce(e);
              }}
            />
            <Bouncingword
              text="b"
              textClass="hover:text-[#14d9d8]"
              onMouseEnter={(e) => {
                textBounce(e);
              }}
            />
            <Bouncingword
              text="D"
              textClass="hover:text-[#14d9d8] ml-4"
              onMouseEnter={(e) => {
                textBounce(e);
              }}
            />
            <Bouncingword
              text="e"
              textClass="hover:text-[#14d9d8]"
              onMouseEnter={(e) => {
                textBounce(e);
              }}
            />
            <Bouncingword
              text="v"
              textClass="hover:text-[#14d9d8]"
              onMouseEnter={(e) => {
                textBounce(e);
              }}
            />
            <Bouncingword
              text="e"
              textClass="hover:text-[#14d9d8]"
              onMouseEnter={(e) => {
                textBounce(e);
              }}
            />
            <Bouncingword
              text="l"
              textClass="hover:text-[#14d9d8]"
              onMouseEnter={(e) => {
                textBounce(e);
              }}
            />
            <Bouncingword
              text="o"
              textClass="hover:text-[#14d9d8]"
              onMouseEnter={(e) => {
                textBounce(e);
              }}
            />
            <Bouncingword
              text="p"
              textClass="hover:text-[#14d9d8]"
              onMouseEnter={(e) => {
                textBounce(e);
              }}
            />
            <Bouncingword
              text="e"
              textClass="hover:text-[#14d9d8]"
              onMouseEnter={(e) => {
                textBounce(e);
              }}
            />
            <Bouncingword
              text="r"
              textClass="hover:text-[#14d9d8]"
              onMouseEnter={(e) => {
                textBounce(e);
              }}
            />
          </h1>
          <p className="text-gray-500 mt-5 tracking-widest text-[12px] sm:text-lg font-medium">
            Front End Developer / Back End Developer
          </p>
          <div className="flex mt-10">
            <a
              href="/"
              className="py-2 px-4 sm:py-3 sm:px-8 bg-transparent text-[#14d9d8] border-2 border-[#14d9d8] hover:bg-[#14d9d8] hover:text-[#1d1d1d] flex items-center justify-center transition-all duration-100 ease-in-out text-lg rounded-md cursor-pointer font-hind tracking-wider"
            >
              Resume
            </a>
            <a
              href="/"
              className="py-2 px-4 sm:py-3 sm:px-8 bg-transparent text-[#14d9d8] border-2 border-[#14d9d8] hover:bg-[#14d9d8] hover:text-[#1d1d1d] flex items-center justify-center transition-all duration-100 ease-in-out text-lg rounded-md cursor-pointer ml-7 font-hind tracking-wider"
            >
              Hire me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
