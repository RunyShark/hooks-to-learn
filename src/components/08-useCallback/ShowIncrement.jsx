import React from "react";

export const ShowIncrement = ({ inCremente }) => {
  console.log("Me volvi a renderizar:d");
  return (
    <button className="btn btn-primary" onClick={() => inCremente()}>
      +1
    </button>
  );
};
