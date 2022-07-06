import React from "react";
import { UserContex } from "./";
const obj = {
  id: 123,
  email: "orre@corro.com",
  name: "Segio",
};
export const UserProvider = ({ children }) => {
  return (
    <UserContex.Provider value={{ user: obj }}>{children}</UserContex.Provider>
  );
};
