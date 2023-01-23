import React from "react";
import { HiArrowNarrowDown } from "react-icons/hi";

const Scrollbounce = (props) => {
  return (
    <div className="flex flex-col items-center animate-bounce text-[14px]">
      <span className={`rotate-90 ${props.textClass}`}>{props.text}</span>
      <HiArrowNarrowDown className={`mt-10 mr-1 ${props.textClass}`} />
    </div>
  );
};

export default Scrollbounce;
