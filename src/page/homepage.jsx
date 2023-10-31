import React, { useState, useEffect } from "react";
import "../styles/App.css";
import { Link } from 'react-router-dom';
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import { app } from "../firebase/firebase.config";

function HomePage() {
    const [logoURL, setLogoURL] = useState(null);

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

    return (
        <div>
            <header>
                <nav>
                    <Link to="/">
                        <img className="logo" src={logoURL} />
                    </Link>
                    <ul>
                        <li><Link to="/page/Login">Comenzar</Link></li>
                    </ul>
                </nav>
            </header>
            <main>
                <section className="hero">
                    <h1>Bienvenido a PROTOTYPE MEDIA</h1>
                    <p>Las mejores series y películas en un solo lugar.</p>
                    <Link to="/page/Login">Comenzar</Link>
                </section>
                <section className="featured">
                    <h1>Listar las series o películas destacadas</h1>
                </section>
                <section className="categories">
                    <h1>Listar las series o películas destacadas</h1>
                </section>
            </main>
            <footer>
                <div className="footer-content">
                    <div className="footer-logo">
                        <Link to="/">
                            <img className="logo" src={logoURL} />
                        </Link>
                    </div>
                    <div className="footer-links">
                        <ul>
                            <li><a href="#">Términos de uso</a></li>
                            <li><a href="#">Política de privacidad</a></li>
                            <li><a href="#">Preguntas frecuentes</a></li>
                            <li><a href="#">Contáctanos</a></li>
                        </ul>
                    </div>
                </div>
                <p>&copy; 2023 PROTOTYPE MEDIA. Todos los derechos reservados.</p>
            </footer>
        </div>
    );
}

export default HomePage;
