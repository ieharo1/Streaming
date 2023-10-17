import React, { useState} from "react";
import "../App.css";
import logonb from '../images/logopmnb.png'
import logobn from '../images/logopmbn.png'
import { Link } from 'react-router-dom';

function HomePage(){
    return(     
        <div>
            <header>
                <nav>
                <Link to="/">
                    <img class="logo" src={logonb} alt="PROTOTIPE MEDIA" />
                </Link>
                    <ul>
                        
                        <li><Link to="/page/Login">Comenzar</Link></li>
                    </ul>
                </nav>
            </header>
            <main>
                <section class="hero">
                    <h1>Bienvenido a PROTOTIPE MEDIA</h1>
                    <p>Las mejores series y películas en un solo lugar.</p>
                    <Link to="/page/Login">Comenzar</Link>
                </section>
                <section class="featured">
                    <h1>listar las series o películas destacadas</h1>
                </section>

                <section class="categories">
                    <h1>listar las series o películas destacadas</h1>
                </section>
            </main>
            <footer>
                <div class="footer-content">
                    <div class="footer-logo">
                        <Link to="/">
                            <img class="logo" src={logobn} alt="PROTOTIPE MEDIA" />
                        </Link>
                    </div>
                    <div class="footer-links">
                        <ul>
                            <li><a href="#">Términos de uso</a></li>
                            <li><a href="#">Política de privacidad</a></li>
                            <li><a href="#">Preguntas frecuentes</a></li>
                            <li><a href="#">Contáctanos</a></li>
                        </ul>
                    </div>
                </div>
                <p>&copy; 2023 PROTOTIPE MEDIA. Todos los derechos reservados.</p>
            </footer>
        </div>
    );
}
export default HomePage;