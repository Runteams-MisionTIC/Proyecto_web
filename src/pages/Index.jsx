import '../styles/index.css'
import { Link } from 'react-router-dom';
import Footer from '../components/Footer.jsx'

function Index(){
    return(
        <div className="Index">
            <header>
                <Link to='/'>
                    <img className="icono" src="https://github.com/Runteams-MisionTIC/Proyecto_web/blob/main/media/logo.png?raw=true" alt=""/>
                </Link>
                <nav className="navbar">
                    <Link to="/Ventas">Acceder</Link>
                    <Link to='/Login' className="Login">Crear una cuenta</Link>
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
            <Footer/>
        </div>
    );
}

export default Index;