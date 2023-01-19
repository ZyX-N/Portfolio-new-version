import React from 'react';
import { AiFillGithub , AiOutlineInstagram } from 'react-icons/ai';
import {FaLinkedinIn} from "react-icons/fa";
import { Link } from 'react-router-dom';

const Navbar = () =>{

    return(
        <nav className="w-[140px] h-screen">
            <div className="w-full h-1/5 bg-[#000000] flex flex-col items-center justify-around">
                <img src="./static/images/logo-light.png" alt="AMAN" className="mt-5" />
                {/* <h1 className="text-white font-medium text-lg"> Aman </h1> */}
                <h1 className="text-gray-400 font-light"> Web Developer </h1>
            </div>
            <div className="w-full h-4/5 bg-[#181818] pt-20">
                <ul className="w-full flex flex-col">
                    <li className="w-full py-3.5 border-y border-gray-700 flex justify-center"> <Link to={{pathname:"/"}} className="text-gray-400 text-lg hover:text-[#14d9d8]">About</Link> </li>
                    <li className="w-full py-3.5 border-b border-gray-700 flex justify-center"> <Link to={{pathname:"/"}} className="text-gray-400 text-lg hover:text-[#14d9d8]">My Skills</Link> </li>
                    <li className="w-full py-3.5 border-b border-gray-700 flex justify-center"> <Link to={{pathname:"/"}} className="text-gray-400 text-lg hover:text-[#14d9d8]">Work</Link> </li>
                    <li className="w-full py-3.5 border-b border-gray-700 flex justify-center"> <Link to={{pathname:"/"}} className="text-gray-400 text-lg hover:text-[#14d9d8]">Contact</Link> </li>
                    <li className="w-full py-3.5 border-b border-gray-700 flex justify-center"> <Link to={{pathname:"/"}} className="text-gray-400 text-lg hover:text-[#14d9d8]">Blog</Link> </li>
                </ul>
                <div className="flex flex-wrap mt-16 w-full justify-center text-gray-400">
                    <a href="/" className="mx-2.5"><FaLinkedinIn className="text-lg hover:text-[#14d9d8]" /></a>
                    <a href="/" className="mx-2.5"><AiFillGithub className="text-lg hover:text-[#14d9d8]" /></a>
                    <a href="/" className="mx-2.5"><AiOutlineInstagram className="text-lg hover:text-[#14d9d8]" /></a>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;