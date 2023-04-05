import React, { useEffect, useState } from "react";
import Loading from "../Components/Loading";
import Bouncingword from "../Components/Bouncingword";
import ProjectCard from "../Components/ProjectCard";

const Work = () => {

  const officialProject = [
    {
      title: "Time Ascent",
      summary: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus optio ipsum, fugiat voluptatibus odit velit rerum provident commodi numquam ducimus praesentium nemo voluptatem",
      url:"https://timesascent.com/",
      // image: "https://timesascent.com/times_ascent_logo.svg"
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkI7Cz6fVy_FPWtbNjMuUKUE1g7xyUFIEHF4_6fJ9W0z0yyiDUzm6G6SvUyQ0zY8IrKIw&usqp=CAU"
    },
    {
      title: "Education Times",
      summary: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus optio ipsum, fugiat voluptatibus odit velit rerum provident commodi numquam ducimus praesentium nemo voluptatem",
      url:"https://et.onecorp.co.in/",
      image: "http://www.educationtimes.com/Images/logo_thumb.jpg"
      // image: "https://et.onecorp.co.in/Education%20Times.com%20beta%20Logo.svg"
    },
    {
      title: "Aviral Times",
      summary: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus optio ipsum, fugiat voluptatibus odit velit rerum provident commodi numquam ducimus praesentium nemo voluptatem",
      url:"https://www.aviraltimes.com/",
      image: "data:image/png;base64,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"
      // image: "https://www.aviraltimes.com/AviralLogo.svg"
    },
    {
      title: "Rozgaar India",
      summary: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus optio ipsum, fugiat voluptatibus odit velit rerum provident commodi numquam ducimus praesentium nemo voluptatem",
      url:"https://www.rozgaarindia.com/",
      image: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgVFgkXFx0TGRcXFxsfFRsiHyEiIhwiJR0kKC4lJCMlHh8fLDEtJzUyLjIxIx81OD8tNyguMTcBCgoKDg0NGg8PGjcmHyUxNTI4NzctNzg3ODA4MCs3Kzc3NzUsNTQ1Mzc3NywyLS03NDUtNTU3NTU1MjEtLy0rNf/AABEIAMIBAwMBIgACEQEDEQH/xAAbAAEAAQUBAAAAAAAAAAAAAAAAAgEEBQYHA//EADQQAQABAwMCBAQEBQUBAAAAAAABAgMRBAUSITEGE2FiFCJBUTJxgaEjJEJykRY0UoLhFf/EABgBAQADAQAAAAAAAAAAAAAAAAABAgME/8QAIBEBAAMAAQMFAAAAAAAAAAAAAAECAxESIUEEMXHB8P/aAAwDAQACEQMRAD8A7iAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA87tc0UTVFEz6R3lKfq0fUUbhufibc523doou2oi35U8oqxEZiftMTM9zieOzXHOLzPVPER+8Nqsa3VXLuLm3V00feaqJ/aJX8zERMzPRqVe907bsdydZrc63M08Z6XKZ6ZiY9O+e3bHeHn4S33UbnqdbarqmqIo5U5+k9sfrmP8AEpzy0mk3mOzl39RnTeMfM/P22bS7nodXbruaXW267dP4pprpmI/OYno843ra503xX/0rPw/Lhz8ynjn7ZzjPo5h/pzf9dTe1O4bRR59VjT1TZs0U2rVymLkV3rNfWf4mYxGflmmcfWV9umh192rddw2nwtVZorsU6em1VbtTVVcmqf4vlxPGPKomYiZmJnOOyGroVe87ZRYtX69xtRZrnjTVNynjVPaYic9eq88ynlTTyjMxmPVyy7smo0sTVpPDl2vTTpbemsRctWblyz5c1eZFVquuKcXYxPKJ/Nd6bQ+LPjNBvOvsz8RpPLseVbimKbtNz/cTTEdJiiJoin7zanGcwDo9d63Rz53IjEcpzPaOvWfTpLy0ev0mut1XNFqqLluOkzRVFUR+sNG+F8QW9+1fiGNJVVTf8zS+RMRPC3RE/D1zTnryuRVmPtdj1XPgja9y0e77rq920lNF65asxT5VuKLExETMxNMTM+ZTVVMTn6RTgG4Rr9JVpqtTGqo+HjrNfKOMdM9Z7dpif1h50btt1cXpo19qeHWvFdPyY78uvT9XJtJ4O8SVbFutOloqt3q7FmzVZuY8u7TFmmKsf8blNUTET27xPeJimv8ADW76zZruk0uwV0a2irWV1XpiiJu0XarnC1TieVXLlTPzYiOPpAOyU3KaqopiqM4z3+n3TaDp9JvtHiSxv86e55EVxofJ6Z8jEZu4+/ndf7PVntXu250XrsabbpqtxVEU5orzMcc5z61fL7e89AbAMZtOv1esv6i3qdurtUUxGJqmMVTNVcTj0immmf8At6MmAAAAAAAAAAAAAAAAAACkxloPjXYN0sbtR4h8PRM6iIjnTT+Lp0zEfWJjpMenq38WpeazzC1bTWeYc61GnteOtqqu27M2N+tREVU101U5+0TmM8Z64nvTP75fwD4b1Gx7ddr3Cf527jlETmKIjtGe2eszPr+TbcC87WmvRHsytnWbReY7wxdOn3OmdPjURMR+PPefmjtP9mf/ADulprO4Rtl+1du/zc8uNWcxGfwyyYyXY7ydfTqNPRFzNjHz1Z69qoxEde8zTOc/0vHTWt1tVaWi9ciqiKI51TMZ5Yqz0x2mZp+3ZlwGE0um3i1OkjUamK4iaueOnfjj88fP/mP0udVa3CrW8rF7Gn4dunfFX0xnvNHXP9M9PvkgFhFjWU7fRai//MxjNU/nGf2zC3tWd246Tzr0eZE/xOOOP4o+kxMzmnpGMYmf8ZcBg9Ppt8t2Kabuppqr8yKp+ny8YzTE478s9WbiPuqAphUAAAAAAAAAAAAAAAAAAARmjM/ilTh75TAQ4e+Th75TAQ4e+Th75TAQ4e+Th75TAQ4e+Th75TAQ4e+Th75TAQ4e+Th75TAQ4e+VYpxOeUpAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP//Z"
      // image: "https://www.rozgaarindia.com/assets/IPassets/Rozgaar_Black_Logo.svg"
    }
  ];

  const personalProject = [
    {
      title: "Anonymous Chatter",
      summary: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus optio ipsum, fugiat voluptatibus odit velit rerum provident commodi numquam ducimus praesentium nemo voluptatem",
      // url:"https://et.onecorp.co.in/",
      image: "/static/images/iChat-logo.png"
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
              <li className={`list-none text-xl font-hind text-slate-50 font-semibold mr-5 tracking-wide cursor-pointer relative after:content-[''] after:absolute after:bottom-0 after:left-0 ${projectTab === "official" ? "after:w-full" : "after:w-0"} after:h-0.5 after:bg-[#14d9d8] after:rounded-lg transition-all duration-300 ease-in-out`} onClick={()=>{setProjectTab("official")}}>
                Official
              </li>
              <li className={`list-none text-xl font-hind text-slate-50 font-semibold mr-5 tracking-wide cursor-pointer relative after:content-[''] after:absolute after:bottom-0 after:left-0 ${projectTab === "personal" ? "after:w-full" : "after:w-0"} after:h-0.5 after:bg-[#14d9d8] after:rounded-lg transition-all duration-300 ease-in-out`} onClick={()=>{setProjectTab("personal")}}>
              Personal
              </li>
            </ul>
            <div className="w-full h-full mt-8 flex overflow-y-auto">
              {projectTab === "official" ? 
              officialProject.map((item,index) => (
                <div className="mr-8" key={index}>
                  <ProjectCard data={item} />
                </div>
              )) :
              personalProject.map((item,index) => (
                <div className="mr-8" key={index}>
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
