import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar";
import Home from "./Screens/Home";

function App() {
  return (
    <BrowserRouter>
      <div className="w-screen">
        <div className="fixed left-0">
          <Navbar />
          {/* #000428 -> #004e92 */}
        </div>
        <div className="w-[calc(100vw-140px)] bg-[#1d1d1d] ml-auto min-h-screen">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
