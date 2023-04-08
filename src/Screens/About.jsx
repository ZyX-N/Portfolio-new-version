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
    "Javascript",
    "ReactJS",
    "NextJS",
    "JQuery",
    "NodeJS",
    "ExpressJS",
    "MySQL",
    "MongoDB",
    "PHP",
    "AJAX"
  ];

  const [loading, setLoading] = useState(true);

  document.title = "Me, Myself & I | AV";

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
    <section className="w-full md:h-screen relative">
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
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum,
              ea adipisci voluptate modi illo ipsam beatae praesentium!
              Consequatur, obcaecati sapiente!
            </p>
            <p className="text-slate-50 mt-4 pr-0 md:pr-10 text-justify md:text-left">
              Sapiente vero esse libero? Cum doloremque iusto sapiente debitis
              in nemo ut assumenda, earum itaque facere a nobis sequi labore ea
            </p>
            <p className="text-slate-50 my-4 pr-0 md:pr-10 text-justify md:text-left">
              accusamus necessitatibus veniam distinctio id eum eveniet,
              possimus alias expedita! Placeat eligendi quam ex modi illo
              molestiae. Vel, explicabo?
            </p>
            <Link
              to={"/blog"}
              className="text-[#14d9d8] hover:text-[15px] hover:text-[#06c2c2] absolute transition-all duration-300 flex items-center"
            >
              Let’s make something special
              <BsArrowRight className="animate-[wiggle_1s_ease-in-out_infinite]" />{" "}
            </Link>
          </div>
          <div className="w-full flex justify-center md:w-[55%] mt-5 md:mt-0 lg:pl-0 xl:pl-10 overflow-x-hidden">
            <Globe data={skillGroup} radius={200} />
          </div>
        </div>
      )}
    </section>
  );
};

export default About;
