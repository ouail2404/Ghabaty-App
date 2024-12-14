import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

function AuthPageTest() {
  const { isAuthenticated, logout, user } = useContext(AuthContext);

  return (
    <div>
      This page is only visible if you are isAuthenticated
      <p>Authenticated as {user.name}</p>
    </div>
  );
}

export default AuthPageTest;
