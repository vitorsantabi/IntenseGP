import React from "react";
import "./login.css";
const Login = () => {
  return (
    <div>
      <div className="login-container">
        <h1 className="login-title">Seja Bem Vindo ! </h1>
        <p>Crie sua conta, leva menos de um minuto ! </p>
        <form className="login-form">
          <input
            type="text"
            placeholder="Email"
            className="login-input"
            required
          />
          <input
            type="password"
            placeholder="Senha"
            className="login-input"
            required
          />
          <button type="submit" className="login-button">
            LOG IN
          </button>
        </form>
        <p className="forgot-password">Esqueci minha senha</p>
        <button className="Cadastro_se">CADASTRE-SE</button>
      </div>
    </div>
  );
};

export default Login;
