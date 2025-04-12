/* eslint-disable react-refresh/only-export-components */
import { createContext, useState, useEffect, useContext } from "react";
import { jwtDecode } from "jwt-decode";

// Crear un contexto
const AuthContext = createContext();

const AuthProvider = (props) => {
  const [isAuth, setIsAuth] = useState(false); // Saber si estoy autenticado
  const [userPayload, setUserPayload] = useState(null); // JWT payload decodificado

  const login = (token) => {
    // Guardar el token en el local storage
    window.localStorage.setItem("token", token);
    //Decodificar el Token
    const decode = jwtDecode(token);
    setUserPayload(decode);
    setIsAuth(true);
  };

  const logout = () => {
    //Eliminar el token del localStorage
    window.localStorage.removeItem("token");
    setUserPayload(null);
    setIsAuth(false);
  };

  useEffect(() => {
    // Recuperar el token si existe en el localStorage
    // sino existe devolvera un null
    const token = window.localStorage.getItem("token");
    if (token) {
      try {
        login(token);
      } catch (error) {
        console.error("Token inválido", error);
        logout(); // limpia por si las dudas
      }
    }
  }, []);

  const values = {
    login,
    logout,
    userPayload,
    isAuth,
  };

 
  return <AuthContext.Provider value={values} {...props} />;
}

const useAuthContext = () => {
    const context = useContext(AuthContext);
    return context;
  };


export { AuthContext, AuthProvider, useAuthContext };
