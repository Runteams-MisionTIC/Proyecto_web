import React from "react";
import '../styles/adminUsuarios.css';
import Footer from "../components/Footer.jsx"
import { Link } from "react-router-dom";

function Admin () {
    return (
    <div className="Admin">
        <header>
            <Link to='/'>
                <img className="icono" src="https://github.com/Runteams-MisionTIC/Proyecto_web/blob/main/media/logo.png?raw=true" alt="" />
            </Link>
            <nav className="navbar">
                <Link to="/">Inicio</Link>
                <Link to="/Ventas">Ventas</Link>
                <Link to="/Productos">Productos</Link>
                <Link to="/Credenciales">Administración</Link>
            </nav>
        </header>
        <div className="Container">
            <div className="admin">
                <h2>Formulario</h2>
                <form action="">
                    <input id="buscador" type="text" name="buscador"  className="buscador"  placeholder="Buscar empleado" />
                    <input id="credenciales" type="text" name="credencial"  className="credencial" required pattern="[0-9]+" placeholder="Documento de identidad" />
                    <input id="usuario" type="text" name="username" className="username" placeholder="Nombre de usuario" />
                    <select name="" id="cargo">
                        <option value="">Administrador</option>
                        <option value="">Vendedor</option>  
                        <option value="">Ejecutivo</option>
                        <option value="">Operario</option>
                        <option value="">Director</option>
                        <option value="">Gerente comercial</option>
                    </select>
                    <select name="" id="">
                        <option value="">Otorgar</option>
                        <option value="">Restringir</option>
                        <option value="">Deshabilitar</option>
                    </select>
                    <input type="submit" value="Aceptar" className="submit" />
                </form>
            </div>
            <div className="img">
                <img src="https://github.com/Runteams-MisionTIC/Proyecto_web/blob/main/media/imgPE.png?raw=true" alt="imagen Runteams" />
            </div> 
        </div>
        <Footer/>
    </div>
    );
}

export default Admin;