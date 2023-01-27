import React from "react";
import Bouncingword from "../Components/Bouncingword";

const About = () => {

    const textBounce = (e) => {
        e.target.classList.add("blast");
        setTimeout(() => {
          e.target.classList.remove("blast");
        }, 1000);
      };

  return (
    <section className="w-full h-[70vh] sm:h-screen relative">
      <div className="flex h-screen items-center">
        <div className="w-1/2">
          <h1 className="text-[#14d9d8] text-[60px] flex">
            {["M","e",",","M","y","s","e","l","f","&","I"].map((letter) => (
              <Bouncingword
                text={letter}
                textClass={`drop-shadow-[1px_1px_50px_rgba(20,217,216,0.5)] flex wp1 ${letter === "&" && "mx-2"}`}
                onMouseEnter={(e) => {
                  textBounce(e);
                }}
              />
            ))}
          </h1>
        </div>
        <div className="w-1/2">ABOUT ME</div>
      </div>
    </section>
  );
};

export default About;
