import React from "react";

export const SimpleForm = () => {
  return (
    <>
      <h1>Simple form</h1>
      <hr />

      <input
        type="text"
        className="form-control"
        name="userName"
        placeholder="User Name"
      />
    </>
  );
};
