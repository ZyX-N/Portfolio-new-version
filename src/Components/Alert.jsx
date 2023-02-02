import React from "react";
import { RxCross2 } from "react-icons/rx";

const Alert = (props) => {
  return (
    <div className={`relative flex justify-between py-6 px-4 bg-white/30 rounded-lg`}>
        <RxCross2 className="absolute top-2 right-2 text-slate-50 hover:text-slate-300 text-[20px] cursor-pointer" onClick={()=>props.onClick(false)} />
      <div className="flex items-center space-x-4">
        <div className="flex flex-col space-y-1">
          {/* <span className="font-bold text-slate-50">Aman</span> */}
        <img
          src="./static/images/logo-light.png"
          className="rounded-full h-14 w-28 mx-auto"
          alt=""
        />
          <span className="text-[16px] text-slate-50 mx-auto">{props.message[0]}</span>
        </div>
      </div>
    </div>
  );
};

export default Alert;
