import React, { useState, useEffect } from "react";
import { Message } from "./Message";

export const SimpleForm = () => {
  const [formState, setFormState] = useState({
    userName: "",
    email: "",
  });
  const { userName, email } = formState;
  useEffect(() => {
    console.log("useEffect called");
  }, []);
  useEffect(() => {
    console.log("formState changed!");
  }, [formState]);
  useEffect(() => {
    console.log("email changed");
  }, [email]);
  useEffect(() => {
    return () => {};
  }, []);

  const handleOnChange = ({ target }) => {
    const { name, value } = target;
    setFormState({ ...formState, [name]: value });
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
      {userName === "" && <Message />}
    </>
  );
};
