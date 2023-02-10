import React, { useEffect } from "react";

// npm i TagCloud
import TagCloud from "TagCloud";

const Globe = (props) => {
  useEffect(() => {
    const container = ".tagcloud";
    const texts = props.data;

    const options = {
      radius: 300,
      maxSpeed: "fast",
      initSpeed: "normal",
      keep: true,
    };

    TagCloud(container, texts, options);
  }, []);

  return (
    <div className="text-[#14d9d8] text-[18px] font-semibold">
      <span className="tagcloud"></span>
    </div>
  );
};

export default Globe;
