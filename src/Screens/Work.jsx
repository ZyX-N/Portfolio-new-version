import React, { useEffect, useState } from "react";
import Loading from "../Components/Loading";
import Bouncingword from "../Components/Bouncingword";
import ProjectCard from "../Components/ProjectCard";

const Work = () => {
  const [loading, setLoading] = useState(true);
  const [projectTab, setProjectTab] = useState("official");

  const textBounce = (e) => {
    e.target.classList.add("blast");
    setTimeout(() => {
      e.target.classList.remove("blast");
    }, 1000);
  };

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <section className="w-full h-[70vh] sm:h-screen relative">
      {loading ? (
        <Loading />
      ) : (
        <div className="flex flex-col px-20 pt-4">
          <div className="flex flex-col">
            <h1 className="text-[#14d9d8] text-[45px] lg:text-[60px] flex font-semibold">
              {[
                "W",
                "o",
                "r",
                "k",
                "&",
                "E",
                "x",
                "p",
                "e",
                "r",
                "i",
                "e",
                "n",
                "c",
                "e",
              ].map((letter, index) => (
                <Bouncingword
                  key={index}
                  text={letter}
                  textClass={`drop-shadow-[1px_1px_50px_rgba(20,217,216,0.5)] flex ${
                    letter === "&" && "mx-4"
                  }`}
                  onMouseEnter={(e) => {
                    textBounce(e);
                  }}
                />
              ))}
            </h1>
            <p className="text-slate-50 mt-4 w-2/3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
              totam animi sit enim molestiae accusamus architecto est quo, nihil
              et beatae atque a non ratione recusandae odit provident
              blanditiis. Cumque?
            </p>
          </div>

          <div className="flex flex-col mt-8">
            <ul className="flex">
              <li className={`list-none text-xl font-hind text-slate-50 font-semibold mr-7 tracking-wide cursor-pointer relative after:content-[''] after:absolute after:bottom-0 after:left-0 ${projectTab === "official" ? "after:bg-[#14d9d8]" : ""} after:h-0.5 after:w-full after:rounded-lg`} onClick={()=>{setProjectTab("official")}}>
                Official
              </li>
              <li className={`list-none text-xl font-hind text-slate-50 font-semibold mr-7 tracking-wide cursor-pointer relative after:content-[''] after:absolute after:bottom-0 after:left-0 ${projectTab === "personal" ? "after:bg-[#14d9d8]" : ""} after:h-0.5 after:w-full after:rounded-lg`} onClick={()=>{setProjectTab("personal")}}>
              Personal
              </li>
            </ul>
            <div className="w-full h-full mt-8 flex overflow-y-auto">
              {["","","",""].map((item,index) => (
                <div className="mr-8">
                  <ProjectCard />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Work;
