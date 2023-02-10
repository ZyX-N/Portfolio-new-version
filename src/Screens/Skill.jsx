import React, { useState, useEffect } from "react";
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
    { name: "CSS Framework(Tailwind & Bootstrap)", proficiency: "after:w-[95%] after:from-[#14d9d8] after:to-[#1d3653] after:bg-gradient-to-r" },
    { name: "Javascript", proficiency: "after:w-[80%] after:from-[#14d9d8] after:to-[#1d3653] after:bg-gradient-to-r" },
    { name: "JQuery", proficiency: "after:w-[80%] after:from-[#14d9d8] after:to-[#1d3653] after:bg-gradient-to-r" },
    { name: "ReactJS", proficiency: "after:w-[90%] after:from-[#14d9d8] after:to-[#1d3653] after:bg-gradient-to-r" },
    { name: "NextJS", proficiency: "after:w-[70%] after:from-[#14d9d8] after:to-[#1d3653] after:bg-gradient-to-r" },
  ];
  
  const skillBackEnd = [
    { name: "Node JS", proficiency: "after:w-[70%] after:from-[#14d9d8] after:to-[#1d3653] after:bg-gradient-to-r" },
    { name: "PHP", proficiency: "after:w-[30%] after:from-[#14d9d8] after:to-[#1d3653] after:bg-gradient-to-r" },
    { name: "MongoDB", proficiency: "after:w-[65%] after:from-[#14d9d8] after:to-[#1d3653] after:bg-gradient-to-r" },
    { name: "MySQL", proficiency: "after:w-[80%] after:from-[#14d9d8] after:to-[#1d3653] after:bg-gradient-to-r" },
  ];

  return (
    <section className="w-full h-[70vh] sm:h-screen relative">
      {loading ? (
        <Loading />
      ) : (
        <div className="flex h-screen items-center">
          <div className="w-1/2 px-20 relative">
            <h1 className="text-[#14d9d8] text-[70px] leading-[75px] flex font-semibold">
              {["S", "k", "i", "l", "l", "s", "&"].map((letter,index) => (
                <Bouncingword
                  text={letter}
                  key={index}
                  textClass={`drop-shadow-[1px_1px_50px_rgba(20,217,216,0.5)] flex ${
                    letter === "&" && "ml-2"
                  }`}
                  onMouseEnter={(e) => {
                    textBounce(e);
                  }}
                />
              ))}
            </h1>
            <h1 className="text-[#14d9d8] text-[70px] leading-[75px] flex font-semibold">
              {["E", "x", "p", "e", "r", "i", "e", "n", "c", "e"].map(
                (letter,index) => (
                  <Bouncingword
                    text={letter}
                    key={index}
                    textClass={`drop-shadow-[1px_1px_50px_rgba(20,217,216,0.5)] flex ${
                      letter === "&" && "mx-2"
                    }`}
                    onMouseEnter={(e) => {
                      textBounce(e);
                    }}
                  />
                )
              )}
            </h1>
            <p className="text-slate-50 mt-4">
              Since beginning my journey as a freelance developer nearly 10
              years ago, I’ve done remote work for agencies, consulted for
              startups, and collaborated with talented people to create web
              products for both business and consumer use.
            </p>
            <p className="text-slate-50 mt-4">
              I create successful responsive websites that are fast, easy to
              use, and built with best practices. The main area of my expertise
              is front-end development, HTML, CSS, JS, building small and medium
              web apps, custom plugins, features, animations, and coding
              interactive layouts.
            </p>
            <p className="text-slate-50 my-4">
              I also have full-stack developer experience with popular
              open-source CMS like (WordPress, Drupal, Magento, Keystone.js and
              others) .
            </p>
            <p className="text-slate-50 my-4">
              Visit my LinkedIn profile for more details or just contact me.
            </p>
          </div>
          <div className="w-1/2 flex flex-col">
            <h2 className="text-slate-50 text-[22px] text-center pr-36 font-semibold tracking-[2px]">
              Front End
            </h2>
            <div className="mt-2">
              {skillFrontEnd.map((item,index) => (
                <div className="flex flex-col items-start my-2" key={index}>
                  <h3 className="text-slate-50 font-medium">{item.name}</h3>
                  <div
                    className={`relative mt-1.5 w-4/5 h-0.5 bg-black rounded-lg after:content-[''] ${item.proficiency} after:absolute after:top-0 after:left-0 after:h-0.5 after:z-50 after:transition-all after:hover:w-full after:duration-500 after:ease-in-out`}
                  ></div>
                </div>
              ))}
            </div>

            <h2 className="text-slate-50 text-[22px] text-center pr-36 font-semibold mt-4 tracking-[2px]">
              Back End
            </h2>
            <div className="mt-2">
              {skillBackEnd.map((item,index) => (
                <div className="flex flex-col items-start my-2" key={index}>
                  <h3 className="text-slate-50 font-medium">{item.name}</h3>
                  <div
                    className={`relative mt-1.5 w-4/5 h-0.5 bg-black rounded-lg after:content-[''] ${item.proficiency} after:absolute after:top-0 after:left-0 after:h-0.5 after:z-50 after:transition-all after:hover:w-full after:duration-500 after:ease-in-out`}
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
