import React from "react";

export const DataCard = ({ quote, author, series }) => {
  return (
    <div>
      <blockquote className="blockquote text-center">
        <p className="mb-1 ">{quote}</p>
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
    </div>
  );
};
