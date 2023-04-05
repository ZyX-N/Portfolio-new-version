import React from "react";
import { BsArrowRight } from "react-icons/bs";

const ProjectCard = () => {
  return (
    <div className="flex flex-col p-2 w-72 rounded-md bg-[#2b2b2b] border border-slate-50">
      <div className="w-full overflow-hidden">
        <img
          src="./static/images/front.png"
          alt="AMAN"
          className="w-full h-full object-cover rounded-md border border-slate-50 hover:scale-105 transition-all duration-300 ease-in-out"
        />
      </div>

      <div className="flex flex-col p-1">
        <h4 className="font-medium text-slate-50 mt-0.5">Xyz Abcde</h4>
        <p className="text-[14px] text-slate-50 mt-0.5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus optio
          ipsum, fugiat voluptatibus odit velit rerum provident commodi numquam
          ducimus praesentium nemo voluptatem
          <a
            href={"/blog"}
            className="text-[#14d9d8] hover:text-[#06c2c2] transition-all duration-300 flex items-center mt-1"
          >
            Visit
            <BsArrowRight className="animate-[wiggle_1s_ease-in-out_infinite]" />
          </a>
        </p>
      </div>
    </div>
  );
};

export default ProjectCard;
