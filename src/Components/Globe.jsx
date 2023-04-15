import React, { useEffect } from "react";

// npm i TagCloud
import TagCloud from "TagCloud";

const Globe = (props) => {
  useEffect(() => {
    const container = ".tagcloud";
    const texts = props.data;

    const options = {
      radius: props.radius ? props.radius : 300,
      maxSpeed: "fast",
      initSpeed: "fast",
      keep: true,
    };

    TagCloud(container, texts, options);
    // eslint-disable-next-line
  }, []);

  return (
    <div className="text-[#14d9d8] text-[18px] font-semibold ">
      <span className="tagcloud"></span>
    </div>
  );
};

export default Globe;
