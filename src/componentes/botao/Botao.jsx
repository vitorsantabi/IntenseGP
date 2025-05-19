import React from "react";
import "./stylebotao.css";

const Botao = ({ nome, link, bgColor }) => {
  // Adiciona a classe dinâmica baseada na bgColor
  const buttonClass = bgColor ? "botao custom-bg" : "botao";

  const buttonStyle = bgColor ? { backgroundColor: bgColor } : {};

  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className="link">
      <button className={buttonClass} style={buttonStyle}>
        {nome}
      </button>
    </a>
  );
};

export default Botao;
