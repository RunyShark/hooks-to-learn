import React from "react";

export const Small = React.memo(({ value }) => {
  console.log("Me volvi a generar :c");
  return <small>{value}</small>;
});
