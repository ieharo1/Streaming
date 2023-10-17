import React, { useState} from "react";
import "../styles/Formulario.css";
import { useAuth } from "../context/AuthContext";
import logobn from '../images/logopmbn.png';
import { Link } from 'react-router-dom';



function FormFirebase() {
    const auth = useAuth();
    const { displayName } = auth.user;
    const [emailRegister, setEmailRegister] = useState("");
    const [passwordRegister, setPasswordRegister] = useState("");
    const [newDisplayName, setNewDisplayName] = useState(""); 
    const handleRegister = (e) => {
      e.preventDefault();
      auth.register(emailRegister, passwordRegister, newDisplayName);
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
          </div>
          <h3 className="title">Registro de Usuario</h3>
          <br />
          <br />
          <label htmlFor="displayName">Nombre de usuario:</label>
          <input
            id="displayName"
            onChange={(e) => setNewDisplayName(e.target.value)}
            type="text"
            className="input"
          />
          <label htmlFor="emailRegister">Email o número de teléfono:</label>
          <input
            id="emailRegister"
            onChange={(e) => setEmailRegister(e.target.value)}
            type="email"
            className="input"
          />
          <label htmlFor="passwordRegister">Contraseña:</label>
          <input
            id="passwordRegister"
            onChange={(e) => setPasswordRegister(e.target.value)}
            type="password"
            className="input"
          />
          <button onClick={(e) => handleRegister(e)} className="button">
            Registrarse
          </button>
        </form>
        <button onClick={(e) => handleLogout(e)} className="button">
          Cerrar sesión
        </button>
      </div>
    );
  }
  
export default FormFirebase;