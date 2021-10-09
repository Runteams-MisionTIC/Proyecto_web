import '../styles/index.css'
import { Link } from 'react-router-dom';

function Index(){
    return(
        <div className="Index">
            <header>
                <a href="./inicio.html">
                    <img className="icono" src="https://github.com/Runteams-MisionTIC/Proyecto_web/blob/main/media/logo.png?raw=true" alt=""/>
                </a>
                <nav className="navbar">
                    <Link to="">Acceder</Link>
                    <a className="Login" href="#Consultas">Crear una cuenta</a>
                </nav>
            </header>
            <div className="slider">
                <ul>
                    <li><img src="https://github.com/Runteams-MisionTIC/Proyecto_web/blob/main/media/imgPE.png?raw=true" alt="imagen1"/></li>
                    <li><img src="https://github.com/Runteams-MisionTIC/Proyecto_web/blob/main/media/ImgPE2.png?raw=true" alt="imagen2"/></li>
                    <li><img src="https://github.com/Runteams-MisionTIC/Proyecto_web/blob/main/media/imgPE3.png?raw=true" alt="imagen3"/></li>
                    <li><img src="https://github.com/Runteams-MisionTIC/Proyecto_web/blob/main/media/imgPE1.png?raw=true" alt="imagen4"/></li>
                </ul>
            </div>
            <footer>
                <div className="container_footer">
                    <div className="box_footer">
                        <div className="logo_footer">
                            <img src="https://github.com/Runteams-MisionTIC/Proyecto_web/blob/main/media/logo.png?raw=true" alt="logo"/>
                        </div>
                        <div className="terms"><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione ea esse sapiente soluta. Aut possimus non, aliquid soluta odit temporibus fugiat dolor quam iure placeat laudantium praesentium eum nesciunt nostrum.</p></div>
                    </div>
                    <div className="box_footer">
                        <h2>Soluciones</h2>
                        <a href="#">App Desarrollo</a>
                        <a href="#">App Marketing</a>
                        <a href="#">IOS Desarrollo</a>
                        <a href="#">Android Desarrollo</a>
                    </div>

                    <div className="box_footer">
                        <h2>Compañia</h2>
                        <a href="#">Acerca de</a>
                        <a href="#">Trabajos</a>
                        <a href="#">Procesos</a>
                        <a href="#">Servicios</a>
                    </div>

                    <div className="box_footer">
                        <h2>Redes Sociales</h2>
                        <a href="#"><i className="fab fa-facebook-square"></i> Facebook</a>
                        <a href="#"><i className="fab fa-twitter-square"></i> Twitter</a>
                        <a href="#"><i className="fab fa-instagram-square"></i> Instagram</a>
                    </div>
                </div>
                <div className="box_copy">
                    <p>Todos los derechos son reservados © 2021
                    <b>Runteams</b></p>
                </div>
            </footer>
        </div>
    );
}

export default Index;