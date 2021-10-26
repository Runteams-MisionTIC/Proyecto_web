import React from 'react'
import { Link } from 'react-router-dom'
import Vinculos from '../components/Vinculos'
import { useAuth0 } from "@auth0/auth0-react";
import '../styles/header.css'

const HeaderPublico = () => {
    const { loginWithRedirect } = useAuth0();
    return (
        <header>
            <Link to='/'>
                <img className="logo" src="https://raw.githubusercontent.com/Runteams-MisionTIC/Proyecto_web/main/media/logo.png" alt="Logo" />
            </Link>
            <button className='login' onClick={() => loginWithRedirect()}>
                Iniciar Sesión
            </button>
        </header>
    )
}

export default HeaderPublico
