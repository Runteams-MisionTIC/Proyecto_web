import "../styles/login.css";
import { Link } from 'react-router-dom';
import { Auth0Provider } from "@auth0/auth0-react";
import { useAuth0 } from "@auth0/auth0-react";

function Index(){
    const { loginWithRedirect } = useAuth0();
    return(
        <Auth0Provider
            domain="misiontic-runteams.us.auth0.com"
            clientId="hdHkF9NrsJMwxkySfC5h6cXikTAwkJP2"
            redirectUri={window.location.origin}
        >
            <div className="Index">
                <header>
                    <Link to='/'>
                        <img className="icono" src="https://github.com/Runteams-MisionTIC/Proyecto_web/blob/main/media/logo.png?raw=true" alt=""/>
                    </Link>
                    <nav className="navbar">
                        <button onClick={() => loginWithRedirect()} className="Login">Sign in</button>
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
                            <img src="https://github.com/Runteams-MisionTIC/Proyecto_web/blob/main/media/logo.png?raw=true" alt="logo" />
                        </div>
                        <div className="terms"><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione ea esse sapiente soluta. Aut possimus non, aliquid soluta odit temporibus fugiat dolor quam iure placeat laudantium praesentium eum nesciunt nostrum.</p></div>
                    </div>
                    <div className="box_footer">
                        <h2>Soluciones</h2>
                    <p>App Desarrollo</p>
                    <p>App Marketing</p>
                    <p>IOS Desarrollo</p>
                    <p>Android Desarrollo</p>
                    </div>
                    <div className="box_footer">
                        <h2>Compañia</h2>
                    <p>Acerca de</p>
                    <p>Trabajos</p>
                    <p>Procesos</p>
                    <p>Servicios</p>
                    </div>
                    <div className="box_footer">
                        <h2>Redes Sociales</h2>
                        <a href="https://www.facebook.com/MisionTIC2022Ruta1UTP/"><i className="fab fa-facebook-square"></i> Facebook</a>
                        <a href="https://www.facebook.com/MisionTIC2022Ruta1UTP/"><i className="fab fa-twitter-square"></i> Twitter</a>
                        <a href="https://www.facebook.com/MisionTIC2022Ruta1UTP/"><i className="fab fa-instagram-square"></i> Instagram</a>
                    </div>
                </div>
                <div className="box_copy">
                    <hr/>
                    <p>Todos los derechos son reservados © 2021
                    <b>Runteams</b></p>
                </div>
            </footer>
            </div>
        </Auth0Provider>
    );
}

export default Index;
