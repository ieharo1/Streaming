import React, { useState } from "react";
import "../Formulario.css";
import { useAuth } from "../context/AuthContext";
import logobn from '../images/logopmbn.png'
import { Link } from 'react-router-dom';

function FormFirebase() {
  const auth = useAuth();
  const { displayName } = auth.user;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = (e) => {
    e.preventDefault();
    auth.login(email, password);
  };
  const handleGoogle = (e) => {
    e.preventDefault();
    auth.loginGoogle();
  };
  const handleLogout = (e) => {
    e.preventDefault();
    auth.logout();
  };

  return (
    <div className="App">
      {displayName && <h1>Bienvenido: {displayName}</h1>}

      
      <form className="form">
      <div className="logo-container">
        <Link to="/">
            <img className="logo" src={logobn} alt="PROTOTIPE MEDIA" />
        </Link>
        <h3 className="title">Inicia sesión</h3>
      </div>
        <br />
        <br />
        <label htmlFor="email">Email:</label>
        <input
          id="email"
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          className="input"
        />
        <label htmlFor="password">Contraseña:</label>
        <input
          id="password"
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          className="input"
        />
        <button onClick={(e) => handleLogin(e)} className="button">
          Iniciar sesión
        </button>
        <div className="google-login-button" onClick={(e) => handleGoogle(e)}>
        <svg aria-hidden="true" class="native svg-icon iconGoogle" width="18" height="18" viewBox="0 0 18 18"><path fill="#4285F4" d="M16.51 8H8.98v3h4.3c-.18 1-.74 1.48-1.6 2.04v2.01h2.6a7.8 7.8 0 0 0 2.38-5.88c0-.57-.05-.66-.15-1.18Z"></path><path fill="#34A853" d="M8.98 17c2.16 0 3.97-.72 5.3-1.94l-2.6-2a4.8 4.8 0 0 1-7.18-2.54H1.83v2.07A8 8 0 0 0 8.98 17Z"></path><path fill="#FBBC05" d="M4.5 10.52a4.8 4.8 0 0 1 0-3.04V5.41H1.83a8 8 0 0 0 0 7.18l2.67-2.07Z"></path><path fill="#EA4335" d="M8.98 4.18c1.17 0 2.23.4 3.06 1.2l2.3-2.3A8 8 0 0 0 1.83 5.4L4.5 7.49a4.77 4.77 0 0 1 4.48-3.3Z"></path></svg>
          Iniciar sesión con Google
        </div>
        <br />
            <Link to="/page/Register" style={{ textDecoration: 'none', color: '#fff' }}>¿Primera vez en Prototipe Media? Regístrate ahora.</Link>
        <br />

      </form>
      <button onClick={(e) => handleLogout(e)} className="button">
        Cerrar sesión
      </button>
    </div>
  );
}

export default FormFirebase;
