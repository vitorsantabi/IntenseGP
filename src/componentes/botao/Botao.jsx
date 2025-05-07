import React from 'react';
import "./stylebotao.css";
const Botao = ({ nome, link }) => {
    return (
        <a href={link} target="_blank" rel="noopener noreferrer" className="link">
            <button className='botao'>{nome}</button>
        </a>
    );
};

export default Botao;