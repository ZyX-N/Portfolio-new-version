import React, { useEffect, useState } from "react";
import Loading from "../Components/Loading";
import Bouncingword from "../Components/Bouncingword";
import ProjectCard from "../Components/ProjectCard";

const Work = () => {

  const officialProject = [
    {
      title: "Time Ascent",
      summary: "Times Ascent, a part of The Times of India, is focused on career enhancement, jobs, upskill courses, latest events, trending news, remote work, human resource, free resume maker, psychometric tests, interview tips- timesascent.com",
      url:"https://timesascent.com/",
      // image: "https://timesascent.com/times_ascent_logo.svg"
      image: "./static/images/times_ascent.png"
    },
    {
      title: "Education Times",
      summary: "Part of Times of India focused on education, counsellors, Q&A, education fair and placement reports. Top career site - Educationtimes.com",
      url:"https://et.onecorp.co.in/",
      image: "./static/images/education_times.jpg"
      // image: "https://et.onecorp.co.in/Education%20Times.com%20beta%20Logo.svg"
    },
    {
      title: "Aviral Times",
      summary: "Aviraltimes.com is a digital wing of the Hindi weekly newspaper - Aviral Times. It is the most reliable and authentic news website.",
      url:"https://www.aviraltimes.com/",
      image: "./static/images/aviral_times.png"
      // image: "https://www.aviraltimes.com/AviralLogo.svg"
    },
    {
      title: "Rozgaar India",
      summary: "Rozgaar India is a website made for people to get on-site, hybrid or remote jobs with the best compatibility they want or need.",
      url:"https://www.rozgaarindia.com/",
      image: "./static/images/rozgaar_india.jpg"
      // image: "https://www.rozgaarindia.com/assets/IPassets/Rozgaar_Black_Logo.svg"
    }
  ];

  const personalProject = [
    {
      title: "Anonymous Chatter",
      summary: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus optio ipsum, fugiat voluptatibus odit velit rerum provident commodi numquam ducimus praesentium nemo voluptatem",
      // url:"https://et.onecorp.co.in/",
      image: "./static/images/iChat-logo_new.png"
    },
  ];

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
    <section className="w-full relative">
      {loading ? (
        <Loading />
      ) : (
        <div className="flex flex-col px-14 md:px-20 pt-4">
          <div className="flex flex-col">
            <h1 className="text-[#14d9d8] text-[45px] md:text-[60px] hidden md:flex font-semibold">
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

            <h1 className="text-[#14d9d8] text-[45px] md:text-[60px] flex md:hidden font-semibold">
              {[
                "W",
                "o",
                "r",
                "k",
                "&"
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

            <h1 className="text-[#14d9d8] text-[45px] md:text-[60px] flex md:hidden font-semibold leading-8">
              {[
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

            <p className="text-slate-50 mt-6 md:mt-4 w-full md:w-2/3 md:text-left text-justify">
              I have been working since 2021 and starts my professional career in 2022 with an organization where I was a part of many of the big and small projects which are listed below. There are some projects also which I created by my own personally to give a showcase of my skills.
            </p>
          </div>

          <div className="flex flex-col mt-8">
            <ul className="flex justify-start">
              <li className={`list-none text-xl font-hind text-slate-50 font-semibold mr-5 tracking-wide cursor-pointer relative after:content-[''] after:absolute after:bottom-0 after:left-0 ${projectTab === "official" ? "after:w-full" : "after:w-0"} after:h-0.5 after:bg-[#14d9d8] after:rounded-lg transition-all duration-300 ease-in-out`} onClick={()=>{setProjectTab("official")}}>
                Official
              </li>
              <li className={`list-none text-xl font-hind text-slate-50 font-semibold mr-5 tracking-wide cursor-pointer relative after:content-[''] after:absolute after:bottom-0 after:left-0 ${projectTab === "personal" ? "after:w-full" : "after:w-0"} after:h-0.5 after:bg-[#14d9d8] after:rounded-lg transition-all duration-300 ease-in-out`} onClick={()=>{setProjectTab("personal")}}>
              Personal
              </li>
            </ul>
            <div className="w-full h-full mt-0 md:mt-4 flex flex-col justify-center lg:justify-start md:flex-row items-center flex-wrap">
              {projectTab === "official" ? 
              officialProject.map((item,index) => (
                <div className="md:mr-8 mt-8" key={index}>
                  <ProjectCard data={item} />
                </div>
              )) :
              personalProject.map((item,index) => (
                <div className="md:mr-8 md:mt-0 mt-8" key={index}>
                  <ProjectCard data={item} />
                </div>
              ))
              }
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Work;
