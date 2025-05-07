import React, { useState } from "react";
import "./styleflip.css";
import Botao from "../botao/Botao";
import Login from "../../screens/login/Login";
import Cadastro from "../../screens/cadastro/Cadastro";

function Flip() {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className={`box ${isFlipped ? "flip" : ""}`}
      style={{ transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)" }}
    >
      <div className="front">
        <div className="text-boasvindas">
          <h1>Seja Bem Vindo ! </h1>
          <h3>Crie sua conta, leva menos de um minuto ! </h3>
        </div>

        <Login />
        <div className="links">
          <div className="text-link" onClick={() => setIsFlipped(true)}>
            <Botao nome="Cadastrar-se" />
          </div>

          <a href="#">
            <p> Faça login com </p>
            <i class="fa-brands fa-google-plus-g"></i>
          </a>
        </div>
      </div>

      <div className="back">
        <Cadastro />

        <div className="text-link" onClick={() => setIsFlipped(false)}>
          <Botao nome={<i className="fa-solid fa-arrow-left"></i>} />
        </div>
        <div className="links">
          <a href="#">
            <p> Faça login com </p>
            <i class="fa-brands fa-google-plus-g"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Flip;
