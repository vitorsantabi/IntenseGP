import { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import "./App.css";
import logo from "./assets/logo.png";
import Flip from "../src/componentes/flip";
import Login from "../src/screens/login/Login";
import Dashboard from "../src/screens/dashboard";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div className="Container">
              <div className="logo-container">
                <img src={logo} className="logo" alt="logo" />
                <p className="title">
                  Acesse sua conta e junte-se a uma comunidade que transforma
                  inovação em impacto.
                </p>
              </div>
              <Flip setIsAuthenticated={setIsAuthenticated} />
            </div>
          }
        />

        <Route
          path="/login"
          element={
            isAuthenticated ? (
              <Navigate to="/dashboard" replace />
            ) : (
              <Login setIsAuthenticated={setIsAuthenticated} />
            )
          }
        />

        <Route
          path="/dashboard"
          element={
            isAuthenticated ? <Dashboard /> : <Navigate to="/login" replace />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
