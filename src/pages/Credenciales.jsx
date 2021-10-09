import React from "react";
import Footer from '../components/Footer';
import '../styles/credenciales.css';
import { Link } from "react-router-dom";


function Credenciales() {
    return(
        <div className="Credenciales">
            <header>
                <Link to='/'>
                    <img className="icono" src="https://github.com/Runteams-MisionTIC/Proyecto_web/blob/main/media/logo.png?raw=true" alt="" />
                </Link>
                <nav className="navbar">
                    <Link to="/">Inicio</Link>
                    <Link to="/Ventas">Ventas</Link>
                    <Link to="/Productos">Productos</Link>
                    <Link to="/Administracion">Administración</Link>
                </nav>
            </header>
            <div className="Container-admin">
                <div className="admin">
                    <h6>Seguridad de Runteams</h6>
                    <h2>Auntenticación de Credenciales</h2>
                    <p>Para tener el permiso de otorgar/restringir acceso al sistema de informacion es necesario autenticar su credencial </p>
                    <form action="">
                        <input type="text" name="username" placeholder="Usuario" className="username" />
                        <input type="password" name="passaword" placeholder="Contraseña" className="passaword" required />
                        <Link to="/Administracion">
                            <input id="submit" type="submit" value="Aceptar" className="submit" />
                        </Link>
                    </form>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default Credenciales;