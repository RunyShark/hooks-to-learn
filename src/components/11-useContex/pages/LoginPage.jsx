import { useContext } from "react";
import { UserContex } from "../../context";

export const LoginPage = () => {
  const { user } = useContext(UserContex);

  return (
    <>
      <h1>Login page</h1>
      <pre>{JSON.stringify(user)}</pre>
    </>
  );
};
