
import React, {useState} from "react";
import "../styles/login.css";
import Footer from '../components/Footer.jsx';
//import { Link } from "react-router-dom";

const Login = () => {
    
    const [variableEstado, setVariableEstado] = useState("");

    return (
        <>
            <div className="container">
                <div className="container-login">
                    <div className="login">
                        <img className="avatar" src="https://github.com/Runteams-MisionTIC/Proyecto_web/blob/main/media/logo.png?raw=true" alt="logo" />
                        <h2>Incio de sesión</h2>
                        <form>
                            
                            <input onChange={(e) => {
                                setVariableEstado(e.target.value)
                            }} type="text" name="username" 
                                placeholder="Usuario" class="username"
                            />
                            <input type="password" name="passaword" placeholder="Contraseña" class="passaword"/>
                            
                            <button type="button" onClick={(e) => {
                                console.log("valor variable = ", variableEstado);
                            }} id="submit" className="submit">Seguir
                            </button>

                        </form>
                        <p>¿Ha olvidado su usuario o contraseña?</p>
                        <button className="icono"><i className="fab fa-google"></i>Continuar con Google</button>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    );
}
  
export default Login;