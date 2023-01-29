import React, { useState, useEffect } from "react";
import Bouncingword from "../Components/Bouncingword";
import Loading from "../Components/Loading";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";

const About = () => {
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
    <section className="w-full h-[70vh] sm:h-screen relative">
      {loading ? (
        <Loading />
      ) : (
        <div className="flex h-screen items-center">
          <div className="w-1/2 px-20 relative">
            <h1 className="text-[#14d9d8] text-[60px] flex font-semibold">
              {["M", "e", ",", "M", "y", "s", "e", "l", "f", "&", "I"].map(
                (letter,index) => (
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
            <p className="text-slate-50 mt-4 pr-10">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum,
              ea adipisci voluptate modi illo ipsam beatae praesentium!
              Consequatur, obcaecati sapiente!
            </p>
            <p className="text-slate-50 mt-4 pr-10">
              Sapiente vero esse libero? Cum doloremque iusto sapiente debitis
              in nemo ut assumenda, earum itaque facere a nobis sequi labore ea
            </p>
            <p className="text-slate-50 my-4 pr-10">
              accusamus necessitatibus veniam distinctio id eum eveniet,
              possimus alias expedita! Placeat eligendi quam ex modi illo
              molestiae. Vel, explicabo?
            </p>
            <Link to={"/blog"} className="text-[#14d9d8] hover:text-[15px] hover:text-[#06c2c2] absolute transition-all duration-300 flex items-center">Let’s make something special <BsArrowRight className="animate-[wiggle_1s_ease-in-out_infinite]" /> </Link>
          </div>
          <div className="w-1/2">
          
          </div>
        </div>
      )}
    </section>
  );
};

export default About;
