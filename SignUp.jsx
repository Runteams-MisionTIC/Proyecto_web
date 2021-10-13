import React from "react";
import "./SignUp.css";

function SignUp () {
    return (
        <>
            <div className="container">
            <div className="signUp-container">
                <div className="signUp">
                    <img className="avatar" src="https://github.com/Runteams-MisionTIC/Proyecto_web/blob/main/media/logo.png?raw=true" alt="logo" />
                    <h2>Registrarse</h2>
                    <form action="">
                        <p>Ingrese los siguientes datos al sistema para poder crear su cuenta en Runteams.</p>
                        <input type="text" name="username" placeholder="Nombre" className="username"/>
                        <input type="text" name="username" placeholder="Apellido" className="usernamee"/>
                        <input type="text" name="username" placeholder="Nombre de usuario" className="usernamee"/>
                        <input type="password" name="passaword" placeholder="Contraseña" className="passaword"/>
                        <input type="password" name="passaword" placeholder="Confirme su contraseña" className="passaword" />
                        <input id="submit" type="submit" value="Aceptar" className="submit" />
                    </form>
                    <h6 className="gmail">or</h6>
                    <button className="fab"><i class="fab fa-google"></i>Continuar con Google</button>
                </div>
            </div>
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
                    <a href="#"><i class="fab fa-facebook-square"></i> Facebook</a>
                    <a href="#"><i class="fab fa-twitter-square"></i> Twitter</a>
                    <a href="#"><i class="fab fa-instagram-square"></i> Instagram</a>
                </div>
            </div>
            <div className="box_copy">
                <hr/>
                <p>Todos los derechos son reservados © 2021
                <b>Runteams</b></p>
            </div>
        </footer>
    </>
    );
}

export default SignUp;