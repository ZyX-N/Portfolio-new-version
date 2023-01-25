import React from "react";
import { useRef } from "react";
import Bouncingword from "../Components/Bouncingword";
import Scrollbounce from "../Components/ScrollBouce";

const Home = (props) => {

  const playContainer = useRef(null);

  const bannerTextClass = "hover:text-[#14d9d8] drop-shadow-[1px_1px_50px_rgba(20,217,216,0.5)]";

  const textBounce = (e) => {
    e.target.classList.add("blast");
    setTimeout(() => {
      e.target.classList.remove("blast");
    }, 1000);
  };

  const mouseTrackPlay = (e) =>{
    console.log("window.pageX => ",e.pageX);
    console.log("window.pageY => ",e.pageY);
    let psuedoElement = document.createElement("span");
    psuedoElement.classList.add("trackAnimation","absolute",`top-[${e.pageY}]`,`left-[${e.pageX}]`);
    e.target.appendChild(psuedoElement);
  }

  return (
    <section className="w-full h-[70vh] sm:h-screen relative">
      <span
        className={`fixed bottom-4 ${
          props.open === true ? "left-36" : "left-0"
        } md:left-36`}
      >
        <Scrollbounce text="Scroll Down" textClass="text-white" />
      </span>
      <span className="fixed bottom-4 right-0">
        <Scrollbounce text="Scroll Down" textClass="text-white" />
      </span>
      <img
        src="./static/images/logo-light.png"
        alt="AMAN"
        className="absolute top-5 right-3 sm:right-10 w-40"
      />
      <div className="w-full h-full flex items-center anim-bg" ref={playContainer} onMouseMove={(e)=>{mouseTrackPlay(e)}} > 
        <div className="light x1"></div>
        <div className="light x2"></div>
        <div className="light x3"></div>
        <div className="light x4"></div>
        <div className="light x5"></div>
        <div className="light x6"></div>
        <div className="light x7"></div>
        <div className="light x8"></div>
        <div className="light x9"></div>

        <div className="sm:w-2/3 w-full flex flex-col justify-around sm:mb-0 ml-0 sm:ml-10 md:ml-20 items-center sm:items-start">
          <h1 className="text-slate-50 text-[40px] min-[450px]:text-[55px] sm:text-[60px] md:text-[80px] sm:leading-[60px] leading-[45px] md:leading-[80px] font-paytone my-1.5 font-thin flex">
            <Bouncingword
              text="H"
              textClass={`${bannerTextClass}`}
              onMouseEnter={(e) => {
                textBounce(e);
              }}
            />
            <Bouncingword
              text="e"
              textClass={`${bannerTextClass}`}
              onMouseEnter={(e) => {
                textBounce(e);
              }}
            />
            <Bouncingword
              text="y"
              textClass={`${bannerTextClass}`}
              onMouseEnter={(e) => {
                textBounce(e);
              }}
            />
            <Bouncingword
              text=","
              textClass={`${bannerTextClass}`}
              onMouseEnter={(e) => {
                textBounce(e);
              }}
            />
          </h1>
          <h1 className="text-slate-50 text-[40px] min-[450px]:text-[55px] sm:text-[60px] md:text-[80px] sm:leading-[60px] leading-[45px] md:leading-[80px] font-paytone my-1.5 font-thin flex">
            <Bouncingword
              text="I"
              textClass={`${bannerTextClass}`}
              onMouseEnter={(e) => {
                textBounce(e);
              }}
            />
            <Bouncingword
              text="'"
              textClass={`${bannerTextClass}`}
              onMouseEnter={(e) => {
                textBounce(e);
              }}
            />
            <Bouncingword
              text="m"
              textClass={`${bannerTextClass}`}
              onMouseEnter={(e) => {
                textBounce(e);
              }}
            />
            <Bouncingword
              text="A"
              textClass="hover:text-[#14d9d8] ml-4 drop-shadow-[0_35px_35px_rgba(20,217,216,0.5)]"
              onMouseEnter={(e) => {
                textBounce(e);
              }}
            />
            <Bouncingword
              text="m"
              textClass={`${bannerTextClass}`}
              onMouseEnter={(e) => {
                textBounce(e);
              }}
            />
            <Bouncingword
              text="a"
              textClass={`${bannerTextClass}`}
              onMouseEnter={(e) => {
                textBounce(e);
              }}
            />
            <Bouncingword
              text="n"
              textClass={`${bannerTextClass}`}
              onMouseEnter={(e) => {
                textBounce(e);
              }}
            />
            <Bouncingword
              text=","
              textClass={`${bannerTextClass}`}
              onMouseEnter={(e) => {
                textBounce(e);
              }}
            />
          </h1>
          <h1 className="text-slate-50 text-[40px] min-[450px]:text-[55px] sm:text-[60px] md:text-[80px] sm:leading-[60px] leading-[45px] md:leading-[80px] font-paytone my-1.5 font-thin flex">
            <Bouncingword
              text="W"
              textClass={`${bannerTextClass}`}
              onMouseEnter={(e) => {
                textBounce(e);
              }}
            />
            <Bouncingword
              text="e"
              textClass={`${bannerTextClass}`}
              onMouseEnter={(e) => {
                textBounce(e);
              }}
            />
            <Bouncingword
              text="b"
              textClass={`${bannerTextClass}`}
              onMouseEnter={(e) => {
                textBounce(e);
              }}
            />
            <Bouncingword
              text="D"
              textClass={`${bannerTextClass} ml-4`}
              onMouseEnter={(e) => {
                textBounce(e);
              }}
            />
            <Bouncingword
              text="e"
              textClass={`${bannerTextClass}`}
              onMouseEnter={(e) => {
                textBounce(e);
              }}
            />
            <Bouncingword
              text="v"
              textClass={`${bannerTextClass}`}
              onMouseEnter={(e) => {
                textBounce(e);
              }}
            />
            <Bouncingword
              text="e"
              textClass={`${bannerTextClass}`}
              onMouseEnter={(e) => {
                textBounce(e);
              }}
            />
            <Bouncingword
              text="l"
              textClass={`${bannerTextClass}`}
              onMouseEnter={(e) => {
                textBounce(e);
              }}
            />
            <Bouncingword
              text="o"
              textClass={`${bannerTextClass}`}
              onMouseEnter={(e) => {
                textBounce(e);
              }}
            />
            <Bouncingword
              text="p"
              textClass={`${bannerTextClass}`}
              onMouseEnter={(e) => {
                textBounce(e);
              }}
            />
            <Bouncingword
              text="e"
              textClass={`${bannerTextClass}`}
              onMouseEnter={(e) => {
                textBounce(e);
              }}
            />
            <Bouncingword
              text="r"
              textClass={`${bannerTextClass}`}
              onMouseEnter={(e) => {
                textBounce(e);
              }}
            />
          </h1>
          <p className="text-gray-500 mt-5 tracking-widest text-[13px] min-[450px]:text-[16px] sm:text-lg font-medium">
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
