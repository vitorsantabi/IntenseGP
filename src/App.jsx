import { useState } from "react";
import "./App.css";
import logo from "./assets/logo.png";
import Login from "./screens/login/login";
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
        <Login />
      </div>
    </>
  );
}

export default App;
