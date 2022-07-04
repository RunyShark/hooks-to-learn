import React, { useState } from "react";
export const SimpleForm = () => {
  const [formState, setFormState] = useState({
    userName: "",
    email: "",
  });
  const { userName, email } = formState;

  const handleOnChange = ({ target }) => {
    setFormState({ ...formState, [target.name]: target.value });
  };
  return (
    <>
      <h1>Simple form</h1>
      <hr />

      <input
        type="text"
        name="userName"
        value={userName}
        className="form-control mt-2"
        placeholder="User Name"
        onChange={handleOnChange}
      />
      <input
        type="email"
        name="email"
        value={email}
        className="form-control mt-2"
        placeholder="Email"
        onChange={handleOnChange}
      />
    </>
  );
};
