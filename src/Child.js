import React from "react";

const Child = ({ name, surname }) => {
  return (
    <span>
      <h1>{`${name} ${surname}`}</h1>
    </span>
  );
};

export default Child;
