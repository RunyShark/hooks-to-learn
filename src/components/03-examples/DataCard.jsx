import React, { useLayoutEffect, useRef, useState } from "react";

export const DataCard = ({ quote, author, series }) => {
  const [boxSize, setBoxSize] = useState({ width: 0, height: 0 });
  const pRef = useRef();
  useLayoutEffect(() => {
    const { width, height } = pRef.current.getBoundingClientRect();
    setBoxSize({ width, height });
  }, []);
  return (
    <>
      <blockquote
        className="blockquote text-center"
        style={{ display: "flex" }}
      >
        <p className="mb-1 " ref={pRef}>
          {quote}
        </p>
        <footer className="blockquote-footer " style={{ marginTop: "5px" }}>
          {author}{" "}
          <span
            style={{
              color: "black",
              fontFamily: "-moz-initial",
              fontSize: "20px",
            }}
          >
            {series}
          </span>
        </footer>
      </blockquote>
      <>
        <h5 style={{ color: "red" }}>{JSON.stringify(boxSize)}</h5>
      </>
    </>
  );
};
