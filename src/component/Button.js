import React from "react";

const Button = (props) => {
  const name = props.name;
  const classList = props.classList + " btn btn--without-border";

  return (
    <button className={classList} onClick={props.handleClick}>
      {name}
    </button>
  );
};

export default Button;
