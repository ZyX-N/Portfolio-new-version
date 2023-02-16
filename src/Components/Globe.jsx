import React from "react";

const Globe = () => {
  return (
    <embed type="text/html" src="http://127.0.0.1:5501/public/globe.html" className="w-full h-full overflow-hidden" />
    // <iframe src="http://127.0.0.1:5501/public/globe.html" frameborder="0" className="w-full h-full overflow-hidden" ></iframe>
  )
};

export default Globe;
