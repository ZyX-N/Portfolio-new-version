import React, { useState, useEffect } from "react";
import Bouncingword from "../Components/Bouncingword";
import Loading from "../Components/Loading";

const Contact = () => {
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
    <section className="w-full h-[70vh] sm:h-screen relative">
      {loading ? (
        <Loading />
      ) : (
        <div className="flex h-screen items-center">
          <div className="w-1/2 px-20 relative">
            <h1 className="text-[#14d9d8] text-[60px] flex font-semibold">
              {["C", "o", "n", "t", "a", "c", "t", "M", "e"].map(
                (letter, index) => (
                  <Bouncingword
                    key={index}
                    text={letter}
                    textClass={`drop-shadow-[1px_1px_50px_rgba(20,217,216,0.5)] flex ${
                      letter === "M" && "ml-4"
                    }`}
                    onMouseEnter={(e) => {
                      textBounce(e);
                    }}
                  />
                )
              )}
            </h1>
            <p className="text-slate-50 mt-2">
              I’m interested in freelance opportunities – especially ambitious
              or large projects. However, if you have other request or question,
              don’t hesitate to use the form.
            </p>
            <form className="flex flex-col mt-2">
              <div className="flex justify-between mt-4">
                <input type="text" className="px-4 py-3 bg-[#2b2b2b] w-full mr-1.5" placeholder="Name" />
                <input type="text" className="px-4 py-3 bg-[#2b2b2b] w-full ml-1.5" placeholder="Email" />
              </div>
              <input type="text" className="mt-3 px-4 py-3 bg-[#2b2b2b]" placeholder="Subject" />
              <textarea cols="30" rows="5" className="px-4 py-3 mt-3 bg-[#2b2b2b]" placeholder="Message" ></textarea>
            <button type="submit" className="border border-[#14d9d8] text-[#14d9d8] px-8 py-3 tracking-[3px] mt-3 ml-auto">
              Send Message
            </button>
            </form>
          </div>
          <div className="w-1/2"></div>
        </div>
      )}
    </section>
  );
};

export default Contact;
