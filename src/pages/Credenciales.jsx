import React from "react";
import '../styles/credenciales.css';
import { Link } from "react-router-dom";


function Credenciales() {
    return(
        <div className="Credenciales">
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
        </div>
    );
}

export default Credenciales;