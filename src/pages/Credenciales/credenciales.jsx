import React from "react";
import Footer from "../AdminUsuarios/components/footer";
import "./credenciales.css";


function Credenciales() {
    return(
        <div className="credenciales">
            <header>
                <a href="./inicio.html">
                    <img className="icono" src="https://github.com/Runteams-MisionTIC/Proyecto_web/blob/main/media/logo.png?raw=true" alt="" />
                </a>
                <nav className="navbar">
                    <a href="./inicio.html">Inicio</a>
                    <a href="./ventas.html">Ventas</a>
                    <a href="./productos.html">Productos</a>
                    <a href="./credenciales.html">Administración</a>
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
                        <a href="./adminUsuario.html">
                            <input id="submit" type="submit" value="Aceptar" className="submit" />
                        </a>
                    </form>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default Credenciales;