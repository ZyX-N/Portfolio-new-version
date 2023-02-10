import React, { useState, useEffect } from "react";
import { useMemo } from "react";
import Alert from "../Components/Alert";
import Bouncingword from "../Components/Bouncingword";
import Loading from "../Components/Loading";

const Contact = () => {
  const [loading, setLoading] = useState(true);
  const [alertShow, setAlertShow] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({
    name: true,
    email: true,
    message: true,
  });
  const [errorText, setErrorText] = useState([]);

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

  const validation = () => {
    let isValid = true;
    let error = {};
    let errorMsg = [];

    if (name === "") {
      isValid = false;
      error.name = false;
      errorMsg.push("What do I call you ? Enter your name please");
    } else {
      error.name = true;
    }

    if (email === "" || !email.includes("@")) {
      isValid = false;
      error.email = false;
      errorMsg.push("How do I contact you ? Enter your email please");
    } else {
      error.email = true;
    }

    if (message === "") {
      isValid = false;
      error.message = false;
      errorMsg.push("Give a brief description about the query or discussion");
    } else {
      error.message = true;
    }

    setErrorText(errorMsg);
    setErrors(error);
    return isValid;
  };

  const contactHandler = (e) => {
    e.preventDefault();
    if (alertShow === false) {
      if (validation()) {
        console.log("Contact ==>");
        console.log("name ==> ", name);
        console.log("email ==> ", email);
        console.log("subject ==> ", subject);
        console.log("message ==> ", message);
      } else {
        setAlertShow(true);
      }
    }
  };

  useMemo(() => {
    setTimeout(() => {
      setAlertShow(false);
    }, 5000);
    // eslint-disable-next-line
  },[alertShow]);

  return (
    <section className="w-full h-[70vh] sm:h-screen relative">
      {loading ? (
        <Loading />
      ) : (
        <div className="flex flex-col lg:flex-row h-screen items-center pt-20 pb-0 lg:pt-0">
          <div
            className={`absolute left-[5%] shadow-2xl z-50 transition-all duration-700 ease-in-out ${
              alertShow === true ? "bottom-[20px]" : "-bottom-[200px]"
            }`}
          >
            <Alert
              show={alertShow}
              message={errorText}
              onClick={setAlertShow}
            />
          </div>
          <div className="w-full lg:w-1/2 px-14 lg:px-20 relative">
            <h1 className="text-[#14d9d8] text-[45px] lg:text-[60px] flex font-semibold">
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
            <p className="text-slate-50 mt-2 text-[14px] lg:text-[16px]">
              I’m interested in freelance opportunities – especially ambitious
              or large projects. However, if you have other request or question,
              don’t hesitate to use the form.
            </p>
            <form
              className="flex flex-col mt-2"
              onSubmit={(e) => contactHandler(e)}
            >
              <div className="flex justify-between mt-4">
                <div
                  className={`w-full mr-1.5 relative before:content-[''] before:absolute before:w-full before:h-0.5 before:bottom-0 ${
                    errors.name ? "before:bg-[#14d9d8]" : "before:bg-red-600"
                  }`}
                >
                  <input
                    type="text"
                    className="px-3 lg:px-4 py-2 lg:py-3 bg-[#2b2b2b] w-full text-slate-50 outline-none"
                    placeholder="Name"
                    value={name}
                    onInput={() => {
                      errors.name = true;
                    }}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div
                  className={`w-full ml-1.5 relative before:content-[''] before:absolute before:w-full before:h-0.5 before:bottom-0 ${
                    errors.email ? "before:bg-[#14d9d8]" : "before:bg-red-600"
                  }`}
                >
                  <input
                    type="text"
                    className="px-3 lg:px-4 py-2 lg:py-3 bg-[#2b2b2b] w-full text-slate-50 outline-none"
                    placeholder="Email"
                    value={email}
                    onInput={() => {
                      errors.email = true;
                    }}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>
              <div className="w-full mt-3 relative before:content-[''] before:absolute before:w-full before:h-0.5 before:bottom-0 before:bg-[#14d9d8]">
                <input
                  type="text"
                  className="px-3 lg:px-4 py-2 lg:py-3 w-full bg-[#2b2b2b] text-slate-50 outline-none"
                  placeholder="Subject"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                />
              </div>
              <div
                className={`w-full mt-3 relative before:content-[''] before:absolute before:w-full before:h-0.5 before:bottom-0 ${
                  errors.message ? "before:bg-[#14d9d8]" : "before:bg-red-600"
                }`}
              >
                <textarea
                  cols="30"
                  rows="5"
                  className="px-3 lg:px-4 py-2 lg:py-3 w-full bg-[#2b2b2b] resize-none text-slate-50 outline-none"
                  placeholder="Message"
                  value={message}
                  onInput={() => {
                    errors.message = true;
                  }}
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
              </div>
              <button
                type="submit"
                className="border border-[#14d9d8] text-[#14d9d8] hover:bg-[#14d9d8] hover:text-[#2b2b2b] px-5 lg:px-8 py-2 lg:py-3 tracking-[3px] lg:text-[16px] text-[14px] mt-3 ml-auto transition-all duration-300 ease-in-out drop-shadow-[1px_1px_50px_rgba(20,217,216,0.5)]"
              >
                Send Message
              </button>
            </form>
          </div>
          <div className="w-full lg:w-1/2 mt-10 lg:px-0 px-14 lg:mt-0">
            <div className="h-[400px] lg:h-screen w-full lg:w-[800px] relative before:content-[''] before:absolute before:w-full before:h-full before:bg-black-rgba before:top-0 before:left-0 z-40">

              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7425920.51410852!2d78.27352158091566!3d24.660270911522385!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bfd991f32b16b%3A0x93ccba8909978be7!2sLucknow%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1675298635921!5m2!1sen!2sin"
                title="locationMap"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full z-0"
              ></iframe>

              {/* <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7425920.51410852!2d78.27352158091566!3d24.660270911522385!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bfd991f32b16b%3A0x93ccba8909978be7!2sLucknow%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1675298635921!5m2!1sen!2sin"
                width="800"
                height="600"
                title="locationMap"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="z-0 lg:hidden block"
              ></iframe> */}

            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Contact;
