import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar";
import About from "./Screens/About";
import Home from "./Screens/Home";

function App() {

  const [navOpen , setNavOpen] = useState(false);

  return (
    <BrowserRouter>
      <div className="w-screen">
        <div className={`fixed transition-all duration-500 ease-in-out top-0 lg:left-0 ${navOpen === true ? "left-0" : "-left-40"} z-50`}>
          <Navbar open={navOpen} setOpen={setNavOpen} />
        </div>
          {/* #000428 -> #004e92 */}
        <div className="w-full lg:w-[calc(100vw-140px)] bg-[#1d1d1d] ml-auto min-h-screen relative overflow-hidden">
          <Routes>
            <Route path="/" element={<Home open={navOpen} />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
