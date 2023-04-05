import React from "react";
import { BsArrowRight } from "react-icons/bs";

const ProjectCard = (props) => {
  return (
    <div className="flex flex-col p-2 w-72 rounded-md bg-[#2b2b2b] border border-slate-50">
      <div className="w-full overflow-hidden">
        <img
          src={props.data.image}
          alt="AMAN"
          className="w-full h-full sm:h-52 sm:w-72 object-cover rounded-md border border-slate-50 hover:scale-105 transition-all duration-300 ease-in-out"
        />
      </div>

      <div className="flex flex-col p-1">
        <h4 className="font-medium text-slate-50 mt-0.5">{props.data.title}</h4>
        <p className="text-[14px] text-slate-50 mt-0.5">
          {props.data.summary}
          {props.data.url && (
            <a
              href={props.data.url}
              className="text-[#14d9d8] hover:text-[#06c2c2] transition-all duration-300 flex items-center mt-1"
              target="_blank"
            >
              Visit
              <BsArrowRight className="animate-[wiggle_1s_ease-in-out_infinite]" />
            </a>
          )}
        </p>
      </div>
    </div>
  );
};

export default ProjectCard;
