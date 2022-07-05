import React from "react";

export const HasErrorCard = ({ hasError }) => {
  const { name, code } = hasError;
  return (
    <>
      <h1>{name}</h1>
      <p>{code}</p>
      <p className="mt-4" style={{ color: "red", fontSize: "20px" }}>
        Status 400, la id no puede ser letras o caracteres especiales y debe de
        ser un numero valido
      </p>
    </>
  );
};
