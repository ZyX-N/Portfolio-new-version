import React, { useState, useEffect } from "react";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";
import Bouncingword from "../Components/Bouncingword";
import Loading from "../Components/Loading";

const Skill = () => {
  const [loading, setLoading] = useState(true);

  //   document.title = "Me, Myself & I | AV";

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  const textBounce = (e) => {
    e.target.classList.add("blast");
    setTimeout(() => {
      e.target.classList.remove("blast");
    }, 1000);
  };

  const skillFrontEnd = [
    { name: "HTML & CSS", proficiency: "after:w-[75%] after:from-[#14d9d8] after:to-[#1d3653] after:bg-gradient-to-r" },
    { name: "CSS Framework (Tailwind & Bootstrap)", proficiency: "after:w-[95%] after:from-[#14d9d8] after:to-[#1d3653] after:bg-gradient-to-r" },
    { name: "Javascript", proficiency: "after:w-[80%] after:from-[#14d9d8] after:to-[#1d3653] after:bg-gradient-to-r" },
    { name: "JQuery", proficiency: "after:w-[80%] after:from-[#14d9d8] after:to-[#1d3653] after:bg-gradient-to-r" },
    { name: "ReactJS", proficiency: "after:w-[90%] after:from-[#14d9d8] after:to-[#1d3653] after:bg-gradient-to-r" },
    { name: "NextJS", proficiency: "after:w-[70%] after:from-[#14d9d8] after:to-[#1d3653] after:bg-gradient-to-r" },
  ];
  
  const skillBackEnd = [
    { name: "Node JS", proficiency: "after:w-[70%] after:from-[#14d9d8] after:to-[#1d3653] after:bg-gradient-to-r" },
    { name: "DJango", proficiency: "after:w-[65%] after:from-[#14d9d8] after:to-[#1d3653] after:bg-gradient-to-r" },
    { name: "PHP", proficiency: "after:w-[30%] after:from-[#14d9d8] after:to-[#1d3653] after:bg-gradient-to-r" },
    { name: "MongoDB", proficiency: "after:w-[65%] after:from-[#14d9d8] after:to-[#1d3653] after:bg-gradient-to-r" },
    { name: "MySQL", proficiency: "after:w-[80%] after:from-[#14d9d8] after:to-[#1d3653] after:bg-gradient-to-r" },
  ];

  return (
    <section className="w-full md:h-screen relative">
      {loading ? (
        <Loading />
      ) : (
        <div className="flex flex-col md:flex-row h-full items-center px-14 md:pb-0 pb-20">
          <div className="w-full md:w-1/2 md:px-6 relative pt-5">
            <h1 className="text-[#14d9d8] text-[45px] md:text-[70px] leading-[75px] flex font-semibold">
              {["M","y","S", "k", "i", "l", "l", "s"].map((letter,index) => (
                <Bouncingword
                  text={letter}
                  key={index}
                  textClass={`drop-shadow-[1px_1px_50px_rgba(20,217,216,0.5)] flex ${
                    letter === "S" && "ml-2"
                  }`}
                  onMouseEnter={(e) => {
                    textBounce(e);
                  }}
                />
              ))}
            </h1>
            <p className="text-slate-50 mt-4 text-justify">
            Since beginning my journey as a freelance developer nearly 2 years ago, I've done remote work for startups, and collaborated with talented people to create web products.
            </p>
            <p className="text-slate-50 mt-4 text-justify">
            I create successful responsive websites that are fast, easy to
              use, and built with best practices. The main area of my expertise
              is HTML, CSS, Javascript, ReactJs and NodeJs but I'm quite good in NextJs, JQuery, and DJango too. Besides this, I have also worked a little bit with some more different web technologies like PHP and GoLang.
            </p>
            <p className="text-slate-50 my-4 text-justify">
              I also have Competitive programming experience with popular programming languages like ( JAVA, C and Python ).
            </p>
            <p className="text-slate-50 my-4 text-justify flex">
              Visit my social media profile for more details or just 
              <Link
              to={"/contact"}
              className="text-[#14d9d8] hover:text-[15px] hover:text-[#06c2c2] transition-all duration-300 flex items-center ml-2"
            >
              contact me.
            </Link>
            </p>
          </div>
          <div className="w-full md:w-1/2 md:px-6 md:mt-0 mt-16 flex flex-col">
            <h2 className="text-slate-50 text-[22px] text-center md:pr-36 font-semibold tracking-[2px]">
              Front End
            </h2>
            <div className="mt-2">
              {skillFrontEnd.map((item,index) => (
                <div className="flex flex-col items-start my-2" key={index}>
                  <h3 className="text-slate-50 font-medium">{item.name}</h3>
                  <div
                    className={`relative mt-1.5 w-full md:w-4/5 h-0.5 bg-black rounded-lg after:content-[''] ${item.proficiency} after:absolute after:top-0 after:left-0 after:h-0.5 after:z-50 after:transition-all after:hover:w-full after:duration-500 after:ease-in-out`}
                  ></div>
                </div>
              ))}
            </div>

            <h2 className="text-slate-50 text-[22px] text-center md:pr-36 font-semibold mt-4 tracking-[2px]">
              Back End
            </h2>
            <div className="mt-2">
              {skillBackEnd.map((item,index) => (
                <div className="flex flex-col items-start my-2" key={index}>
                  <h3 className="text-slate-50 font-medium">{item.name}</h3>
                  <div
                    className={`relative mt-1.5 w-full md:w-4/5 h-0.5 bg-black rounded-lg after:content-[''] ${item.proficiency} after:absolute after:top-0 after:left-0 after:h-0.5 after:z-50 after:transition-all after:hover:w-full after:duration-500 after:ease-in-out`}
                  ></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Skill;