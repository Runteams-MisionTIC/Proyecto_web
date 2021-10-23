
import React from "react";
import "./Login.css";
import Footer from "../AdminUsuarios/components/footer";




function Login () {
    return (
        <>
            <div className="container">
                <div className="container-login">
                    <div className="login">
                        <img className="avatar" src="https://github.com/Runteams-MisionTIC/Proyecto_web/blob/main/media/logo.png?raw=true" alt="logo" />
                        <h2>Incio de sesión</h2>
                        <form action="">
                            <input type="text" name="username" placeholder="Usuario" class="username"/>
                            <input type="password" name="passaword" placeholder="Contraseña" class="passaword"/>
                            <a href="./ventas.html">
                                <input id="submit" type="submit" value="Siguiente" className="submit" />
                            </a>
                        </form>
                        <p>¿Ha olvidado su usuario o contraseña?</p>
                        <button className="icono"><i class="fab fa-google"></i>Continuar con Google</button>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    );
}
  
export default Login;