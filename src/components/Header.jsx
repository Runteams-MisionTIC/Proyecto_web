import React from 'react'
import { Link } from 'react-router-dom'
import Vinculos from './Vinculos'
import { useAuth0 } from "@auth0/auth0-react";

const Header = () => {
    const { loginWithRedirect } = useAuth0();
    return (
        <header>
                <Link to='/'>
                    <img className="logo" src="https://raw.githubusercontent.com/Runteams-MisionTIC/Proyecto_web/main/media/logo.png" alt="Logo"/>
                </Link>
                <Link to='/' className='vinculo'>
                    <Vinculos pagina="Inicio" />
                </Link>
                <Link to='/Ventas' className='vinculo'>
                    <Vinculos pagina="Ventas" />
                </Link>
                <Link to='/Productos' className="vinculo">
                    <Vinculos pagina="Productos" />
                </Link>
                <Link to='/Credenciales' className='vinculo'>
                    <Vinculos pagina="Administración" />
                </Link>
                <button className='mx-10' onClick={() => loginWithRedirect()}>
                    <img className="usuario" src="https://github.com/Runteams-MisionTIC/Proyecto_web/blob/main/media/usuario.png?raw=true" alt="Usuario"/>
                </button>
            </header>
    )
}

export default Header
