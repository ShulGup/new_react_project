import React from "react";

const Child = ({ name, surname }) => {
  return (
    <span>
      <h1>{name}</h1>
      <h3>{surname}</h3>
    </span>
  );
};

export default Child;
