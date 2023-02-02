import React, { useState, useEffect } from "react";
import Bouncingword from "../Components/Bouncingword";
import Loading from "../Components/Loading";

const Contact = () => {
  const [loading, setLoading] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

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

  const contactHandler = (e) => {
    e.preventDefault();
    console.log("Contact ==>");
    console.log("name ==> ", name);
    console.log("email ==> ", email);
    console.log("subject ==> ", subject);
    console.log("message ==> ", message);
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
            <form
              className="flex flex-col mt-2"
              onSubmit={(e) => contactHandler(e)}
            >
              <div className="flex justify-between mt-4">
                <input
                  type="text"
                  className="px-4 py-3 bg-[#2b2b2b] w-full mr-1.5 text-slate-50 outline-none before:content-[''] before:bg-blue-600 relative before:absolute before:bottom-0 before:left-0 before:w-60 before:h-3"
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <input
                  type="text"
                  className="px-4 py-3 bg-[#2b2b2b] w-full ml-1.5 text-slate-50 outline-none before:content-[''] before:bg-blue-600 relative before:absolute before:bottom-0 before:left-0 before:w-60 before:h-3"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <input
                type="text"
                className="mt-3 px-4 py-3 bg-[#2b2b2b] text-slate-50 outline-none before:content-[''] before:bg-blue-600 relative before:absolute before:bottom-0 before:left-0 before:w-60 before:h-3"
                placeholder="Subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
              />
              <textarea
                cols="30"
                rows="5"
                className="px-4 py-3 mt-3 bg-[#2b2b2b] resize-none text-slate-50 outline-none before:content-[''] before:bg-blue-600 relative before:absolute before:bottom-0 before:left-0 before:w-60 before:h-3"
                placeholder="Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
              <button
                type="submit"
                className="border border-[#14d9d8] text-[#14d9d8] hover:bg-[#14d9d8] hover:text-[#2b2b2b] px-8 py-3 tracking-[3px] mt-3 ml-auto transition-all duration-300 ease-in-out"
              >
                Send Message
              </button>
            </form>
          </div>
          <div className="w-1/2">
            <div className="h-screen w-[800px] relative before:content-[''] before:absolute before:w-full before:h-full before:bg-black-rgba before:top-0 before:left-0 z-40">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7425920.51410852!2d78.27352158091566!3d24.660270911522385!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bfd991f32b16b%3A0x93ccba8909978be7!2sLucknow%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1675298635921!5m2!1sen!2sin"
                title="locationMap"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full z-0"
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Contact;
