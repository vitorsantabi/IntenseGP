import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import Botao from "../../componentes/botao/Botao";
import { FaUser, FaLock } from "react-icons/fa";
import { authenticate } from "./auth";

const Login = ({ setIsAuthenticated }) => {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validação básica
    if (!credentials.email || !credentials.password) {
      setError("Por favor, preencha todos os campos");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const authResult = await authenticate(
        credentials.email,
        credentials.password
      );
      if (authResult.success) {
        setIsAuthenticated(true); // Atualiza o estado no App
        navigate("/dashboard", { replace: true }); // Redireciona para o dashboard
      } else {
        setError("Credenciais inválidas. Por favor, tente novamente.");
      }
    } catch (err) {
      setError(err.message || "Ocorreu um erro. Por favor, tente novamente.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <form className="login-form" onSubmit={handleSubmit}>
          <div className="input-container">
            <div className="input-with-icon">
              <FaUser className="input-icon" />
              <input
                type="email"
                name="email"
                placeholder="E-mail corporativo"
                className="login-input"
                required
                value={credentials.email}
                onChange={handleChange}
              />
            </div>

            <div className="input-with-icon">
              <FaLock className="input-icon" />
              <input
                type="password"
                name="password"
                placeholder="Senha"
                className="login-input"
                required
                value={credentials.password}
                onChange={handleChange}
              />
            </div>

            {error && <div className="error-message">{error}</div>}

            <Botao
              nome={loading ? "CARREGANDO..." : "ENTRAR"}
              type="submit"
              disabled={loading}
              className="login-button"
            />

            <div className="linkforgetpassword">
              <a href="#recover" className="link-forget-password">
                Esqueceu a senha?
              </a>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
