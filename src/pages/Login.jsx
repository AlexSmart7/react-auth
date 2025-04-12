import React from "react";
import  logo  from '@/assets/react.svg';
import '@/styles/form.css';

const Login = () => {
  return (
    <main className="form-signin">
      <form>
        <img
          className="mb-4"
          src={logo}
          alt=""
          width="72"
          height="57"
        />
        <h1 className="h3 mb-3 fw-normal">Iniciar Sesion</h1>

        <div className="form-floating">
          <input
            type="email"
            className="form-control"
            id="floatingInput"
            name="email"
            value=''
            placeholder="name@example.com"
            onChange={() => {}}
          />
          <label htmlFor="floatingInput">Ingresa Email</label>
        </div>

        <div className="form-floating">
          <input
            type="password"
            className="form-control"
            id="floatingPassword"
            name="password"
            value=''
            placeholder="Password"
            onChange={() => {}}
          />
          <label htmlFor="floatingPassword">Ingresa Password</label>
        </div>

        <button className="w-100 btn btn-lg btn-primary" type="submit">
          Sign in
        </button>
        <p className="mt-5 mb-3 text-muted">© 2025–2025</p>
      </form>
    </main>
  );
};

export default Login;
