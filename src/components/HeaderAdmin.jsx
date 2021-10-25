import React from 'react'
import { Link } from 'react-router-dom'
import { useAuth0 } from "@auth0/auth0-react";
import '../styles/header.css'
import RutaPrivada from './RutaPrivada';

const HeaderAdmin = ({children}) => {
    const { logout } = useAuth0();
    return (
        <RutaPrivada>
            <header>
                <Link to='/'>
                    <img className="logo" src="https://raw.githubusercontent.com/Runteams-MisionTIC/Proyecto_web/main/media/logo.png" alt="Logo" />
                </Link>
                <nav>
                    <Link to='/'>
                        <span className='vinculo'>Inicio</span>
                    </Link>
                    <Link to='/Ventas'>
                        <span className='vinculo'>Ventas</span>
                    </Link>
                    <Link to='/Productos'>
                        <span className='vinculo'>Productos</span>
                    </Link>
                    <Link to='/Credenciales'>
                        <span className='vinculo'>Administración</span>
                    </Link>
                </nav>
                <button onClick={() => logout({ returnTo: window.location.origin })} className='login'>Cerrar Sesión</button>
            </header>
            <main>{children}</main>
        </RutaPrivada>
    )
}

export default HeaderAdmin
