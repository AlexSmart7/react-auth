import React, { useState } from "react";
import { useAuthContext } from "@/context/AuthContext";
import { useNavigate } from "react-router-dom";
import { useForm } from "@/hooks/useForm";
import { loginUserService } from "@/service/useService";
import logo from "@/assets/react.svg";
import "@/styles/form.css";

const Login = () => {
  const { login } = useAuthContext();

  const navigate = useNavigate();

  const [errorMsg, setErrorMsg] = useState("");

  const sendData = async (data) => {
    try {
      const response = await loginUserService(data);
      if (response?.status === 200 && response.data?.token) {
        login(response.data.token);
        //Redireccionar al usuario a la pagina de inicio
        navigate("/");
      } else {
        setErrorMsg("Credenciales incorrectas.");
      }
    } catch (error) {
      console.log("Ocurrio un error en Login: ", error.message);
      setErrorMsg("Error al iniciar sesión. Intenta de nuevo.");
    }
  };

  const { input, handleInputChange, handleSubmit } = useForm(sendData, {
    email: "",
    password: "",
  });

  return (
    <main className="form-signin">
      <form onSubmit={handleSubmit}>
        <img className="mb-4" src={logo} alt="" width="72" height="57" />
        <h1 className="h3 mb-3 fw-normal">Iniciar Sesion</h1>

        <div className="form-floating">
          <input
            type="email"
            autoComplete="email"
            className="form-control"
            id="floatingInput"
            name="email"
            value={input.email}
            placeholder="name@example.com"
            onChange={handleInputChange}
          />
          <label htmlFor="floatingInput">Ingresa Email</label>
        </div>

        <div className="form-floating">
          <input
            type="password"
            autoComplete="current-password"
            className="form-control"
            id="floatingPassword"
            name="password"
            value={input.password}
            placeholder="Password"
            onChange={handleInputChange}
          />
          <label htmlFor="floatingPassword">Ingresa Password</label>
        </div>

        {errorMsg && <div className="alert alert-danger mt-3">{errorMsg}</div>}

        <button className="w-100 btn btn-lg btn-primary" type="submit">
          Iniciar Sesion
        </button>
        <p className="mt-5 mb-3 text-muted">© 2025–2025</p>
      </form>
    </main>
  );
};

export default Login;
