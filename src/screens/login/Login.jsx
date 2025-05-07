import React from "react";
import "./Login.css";
import Botao from "../../componentes/botao/Botao";
import { FaUser, FaLock } from "react-icons/fa";
const Login = () => {
  return (
    <div>
      <div className="login-container">
        <form className="login-form">
          <div className="input-container">
            <div className="input-with-icon">
              <FaUser className="input-icon" />
              <input
                type="text"
                placeholder="E-mail corporativo"
                className="login-input"
                required
              />
            </div>

            <div className="input-with-icon">
              <FaLock className="input-icon" />
              <input
                type="password"
                placeholder="Senha"
                className="login-input"
                required
              />
            </div>
            <Botao nome="LOGIN" link="#" />
            <a href="#" className="linkforgetpassword">
              Esqueceu a senha ?
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
