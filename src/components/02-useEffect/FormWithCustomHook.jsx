import React, { useEffect } from "react";
import { useForm } from "../hooks";
export const FormWithCustomHook = () => {
  const { formState, handleOnChange } = useForm({
    userName: "",
    email: "",
    password: "",
  });
  const { userName, email, password } = formState;

  return (
    <>
      <h1>Form with custom Hook</h1>
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
      <input
        type="password"
        name="password"
        value={password}
        className="form-control mt-2"
        placeholder="password"
        onChange={handleOnChange}
      />
    </>
  );
};
