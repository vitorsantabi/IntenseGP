import { useState } from "react";
import "./App.css";
import logo from "./assets/logo.png";
import Flip from "./componentes/flip/index";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="Container">
        <div className="logo-container">
          <img src={logo} className="logo" alt="logo" />
          <p className="title">
            Acesse sua conta e junte-se a uma comunidade que transforma inovação
            em impacto.
          </p>
        </div>
        <Flip/>
      </div>
    </>
  );
}

export default App;
