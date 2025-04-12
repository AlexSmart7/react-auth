import React from "react";
import logo from "@/assets/react.svg";
import "@/styles/form.css";
import { useForm } from "@/hooks/useForm";
import { registerUserService } from "@/service/useService";

const Signup = () => {
  const sendData = async (data) => {
    try {
      const response = await registerUserService(data);
      if (response.status === 201) {
        console.log("User created successfully");
      }
    } catch (error) {
      console.log("Ocurrio un error en signup: ", error.message);
    }
  };

  const { input, handleInputChange, handleSubmit } = useForm(sendData, {
    first_name: "",
    last_name: "",
    gender: "",
    email: "",
    password: "",
  });

  return (
    <main className="form-signin w-100 m-auto">
      <form onSubmit={handleSubmit}>
        <img className="mb-4" src={logo} alt="" width="72" height="57" />
        <h1 className="h3 mb-3 fw-normal">Registrarse</h1>

        <div className="form-floating">
          <input
            type="text"
            className="form-control"
            id="first_name"
            name="first_name"
            value={input.first_name}
            onChange={handleInputChange}
            placeholder="Nombre"
          />
          <label htmlFor="first_name">Ingresa Nombre</label>
        </div>

        <div className="form-floating">
          <input
            type="text"
            className="form-control"
            id="last_name"
            name="last_name"
            value={input.last_name}
            onChange={handleInputChange}
            placeholder="Apellido"
          />
          <label htmlFor="last_name">Ingresa Apellido</label>
        </div>

        <div className="form-floating">
          <select
            className="form-select"
            id="gender"
            name="gender"
            value={input.gender}
            onChange={handleInputChange}
          >
            <option value="">Choose...</option>
            <option value="M">Masculino</option>
            <option value="F">Femenino</option>
          </select>
          <label htmlFor="gender">Selecciona</label>
        </div>

        <div className="form-floating">
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={input.email}
            onChange={handleInputChange}
            placeholder="name@example.com"
          />
          <label htmlFor="email">Email</label>
        </div>

        <div className="form-floating">
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            value={input.password}
            onChange={handleInputChange}
            placeholder="Password"
          />
          <label htmlFor="password">Password</label>
        </div>

        <button className="w-100 btn btn-lg btn-primary" type="submit">
          Sign in
        </button>
        <p className="mt-5 mb-3 text-muted">© 2025–2025</p>
      </form>
    </main>
  );
};

export default Signup;
