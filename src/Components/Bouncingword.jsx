import React from "react";

const Bouncingword = (props) => {
  return (
    <span
      onMouseEnter={props.onMouseEnter}
      className={`${props.textClass}`}
    >
      {props.text}
    </span>
  );
};

export default Bouncingword;
