import React, { useState, useEffect } from "react";
import Bouncingword from "../Components/Bouncingword";
import Loading from "../Components/Loading";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";
import Globe from "../Components/Globe";

const About = () => {
  const skillGroup = [
    "HTML",
    "CSS",
    "Bootstrap",
    "Tailwind CSS",
    "Material UI",
    "Javascript",
    "Typescript",
    "ReactJS",
    "NextJS",
    "JQuery",
    "NodeJS",
    "ExpressJS",
    "MySQL",
    "MongoDB",
    "DJango",
    "PHP",
    "AJAX",
  ];

  const [loading, setLoading] = useState(true);

  

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

  return (
      <section className="w-full md:h-[calc(100vh-60px)] relative">
      {loading ? (
        <Loading />
      ) : (
        <div className="flex flex-col justify-center pt-20 md:pt-0 md:flex-row h-full items-center">
          <div className="w-full md:w-[45%] px-14 md:pl-20 md:pr-0 lg:pr-10 relative">
            <h1 className="text-[#14d9d8] text-[45px] lg:text-[60px] flex font-semibold">
              {["M", "e", ",", "M", "y", "s", "e", "l", "f", "&", "I"].map(
                (letter, index) => (
                  <Bouncingword
                    key={index}
                    text={letter}
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
            <p className="text-slate-50 mt-4 pr-0 md:pr-10 text-justify md:text-left">
              I’m a Full-Stack Developer located in India. I have a serious
              passion for UI effects, animations and creating intuitive, dynamic
              user experiences with a perfect database management connection.
            </p>
            <p className="text-slate-50 mt-4 pr-0 md:pr-10 text-justify md:text-left">
              A software developer who is pursuing his studies with job and freelancing and also an independent employee with high attention to detail. Curious for cricket, cosmology and free verse.
            </p>
            <p className="text-slate-50 my-4 pr-0 md:pr-10 text-justify md:text-left">
              Interesting in solving logical problem and working on ambitious projects with positive people.
            </p>
            <Link
              to={"/work"}
              className="text-[#14d9d8] hover:text-[15px] hover:text-[#06c2c2] absolute transition-all duration-300 flex items-center"
            >
              {/* Let’s make something special */}
              Have a look on my projects section
              <BsArrowRight className="animate-[wiggle_1s_ease-in-out_infinite]" />
            </Link>
          </div>
          <div className="w-full flex justify-center md:w-[55%] mt-16 md:mt-0 lg:pl-0 xl:pl-10 overflow-x-hidden">
            <Globe data={skillGroup} radius={250} />
          </div>
          {/* <div className="w-full flex md:hidden justify-center md:w-[55%] mt-5 md:mt-0 lg:pl-0 xl:pl-10 overflow-x-hidden">
            <Globe data={skillGroup} radius={200} />
          </div> */}
        </div>
      )}
    </section>
  );
};

export default About;
