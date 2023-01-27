import React from "react";
import {BsArrowRightCircle} from "react-icons/bs";
import { AiFillGithub, AiOutlineInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = (props) => {

  const navigators = [
    {text:"About",href:"/about",current:false},
    {text:"My Skill",href:"/skill",current:false},
    {text:"Work",href:"/work",current:false},
    {text:"Contact",href:"/contact",current:false},
    {text:"Blog",href:"/blog",current:false},
  ]

  return (
    <nav className="w-[140px] h-screen z-50 relative">
      <div
        className={`absolute top-6 p-3 cursor-pointer z-50 lg:hidden ${
          props.open === true ? "left-36" : "left-[168px]"
        }`}
      >
        <BsArrowRightCircle
          className={`text-white text-4xl transition-all duration-500 ease-in-out ${
            props.open === true && "rotate-180"
          }`}
          onClick={() => {
            props.open === true ? props.setOpen(false) : props.setOpen(true);
          }}
        />
      </div>
      <div className="w-full h-1/5 bg-[#000000] flex flex-col items-center justify-around pb-4">
        <img src="./static/images/logo-light.png" alt="AMAN" className="mt-5" />
        <h1 className="text-gray-400 font-light"> Web Developer </h1>
      </div>
      <div className="w-full h-4/5 bg-[#181818] pt-14">
        <ul className="w-full flex flex-col">
          {navigators.map((item)=>(
          <li className="w-full py-3.5 border-y border-gray-700 flex justify-center font-hind">
            <Link
              to={{ pathname: `${item.href}` }}
              className="text-gray-400 text-lg hover:text-[#14d9d8]"
            >
              {item.text}
            </Link>
          </li>
))}
        </ul>
        <div className="flex flex-wrap mt-16 w-full justify-center text-gray-400">
          <a href="/" className="mx-2.5">
            <FaLinkedinIn className="text-lg hover:text-[#14d9d8]" />
          </a>
          <a href="/" className="mx-2.5">
            <AiFillGithub className="text-lg hover:text-[#14d9d8]" />
          </a>
          <a href="/" className="mx-2.5">
            <AiOutlineInstagram className="text-lg hover:text-[#14d9d8]" />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
