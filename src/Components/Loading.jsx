import React, { useRef, useEffect } from "react";

const Loading = () => {
  const loadBar = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      loadBar.current.classList.remove("after:w-0");
      loadBar.current.classList.add("after:w-full");
    }, 300);
  }, []);

  return (
    <div className="flex items-center justify-center h-screen w-full">
      <div className="flex flex-col items-center">
        <img src="./static/images/logo-light.png" alt="AMAN" />
        <h2 className="text-slate-50 text-[20px] tracking-[3px]">AMAN</h2>
        <p className="text-[10px] text-slate-50 tracking-[3px]">
          Aman is thinking
        </p>
        <div
          className="relative mt-3 w-[400px] h-0.5 bg-black rounded-lg after:content-[''] after:w-0 after:absolute after:top-0 after:left-0 after:from-[#14d9d8] after:to-[#531d48] after:bg-gradient-to-r after:h-0.5 after:z-50 after:transition-all after:hover:w-full after:duration-500 after:ease-in-out"
          ref={loadBar}
        ></div>
      </div>
    </div>
  );
};

export default Loading;
