import Botao from "../../componentes/botao/Botao";
import "./stylecad.css";
import { FaUser, FaLock } from "react-icons/fa";

function Cadastro() {
	return (
    <div>
      <div className="text-boasvindas">
        <h1>Seja Bem Vindo ! </h1>
        <h3>Crie sua conta, leva menos de um minuto ! </h3>
        <form className="form-cadastro">
          <label htmlFor="">CNPJ</label>
          <input type="text" name="" id="" />
          <label htmlFor="">E-mail Corporativo </label>
          <input type="email" name="" id="" />
          <label htmlFor="">Nome Social</label>
          <input type="text" />
          <label htmlFor="">Defina sua Senha </label>
          <input type="password" name="" id="" />
          <Botao nome="cadastrar" />
        </form>
      </div>
    </div>
  );
}

export default Cadastro;