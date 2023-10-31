import { app } from "../firebase/firebase.config";
import React, { useState, useEffect } from "react";
import "../styles/Formulario.css";
import { useAuth } from "../context/AuthContext";
import { Link, useHistory } from "react-router-dom";
import { getStorage, ref, getDownloadURL } from "firebase/storage";

function FormFirebase() {
  const auth = useAuth();
  const { displayName } = auth.user;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [logoURL, setLogoURL] = useState(null);
  const history = useHistory();

  useEffect(() => {
    const storage = getStorage(app);
    const logoRef = ref(storage, "logopmbn.png");

    getDownloadURL(logoRef)
      .then((url) => {
        setLogoURL(url);
      })
      .catch((error) => {
        console.error("Error al obtener URL del logotipo", error);
      });
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    auth.login(email, password).then(() => {
      history.push('/redirected');
    });
  };

  const handleGoogle = (e) => {
    e.preventDefault();
    auth.loginGoogle().then(() => {
      history.push('/redirected');
    });
  };

  const handleLogout = (e) => {
    e.preventDefault();
    auth.logout();
  };

  return (
    <div className="App">
      <form className="form">
        <div className="logo-container">
        <Link to="/">
            <img className="logo" src={logoURL } />
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
          <svg
            aria-hidden="true"
            className="native svg-icon iconGoogle"
            width="18"
            height="18"
            viewBox="0 0 18 18"
          >
            <path fill="#4285F4" d="ruta del path"></path>
          </svg>
          Iniciar sesión con Google
        </div>
        <br />
        <Link to="/page/Register" style={{ textDecoration: "none", color: "#fff" }}>
          ¿Primera vez en Prototype Media? Regístrate ahora.
        </Link>
        <br />
      </form>
      <button onClick={(e) => handleLogout(e)} className="button">
        Cerrar sesión
      </button>
    </div>
  );
}

export default FormFirebase;
