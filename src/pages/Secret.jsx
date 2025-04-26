import React from "react";
import { useAuthContext } from "@/context/AuthContext";

const Secret = () => {
  const { userPayload } = useAuthContext();

  return (
    <>
      <h1>Secret</h1>
      {userPayload?.role === "ADMIN" ? (
        <h2>Hola Admin</h2>
      ) : (
        <h2>Hola Usuario</h2>
      )}

      
    </>
  );
};

export default Secret;
