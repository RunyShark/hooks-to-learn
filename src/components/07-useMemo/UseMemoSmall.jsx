import React from "react";

export const UseMemoSmall = React.memo(({ value }) => {
  console.log("Me volvi a generar :c");
  return <small>{value}</small>;
});
