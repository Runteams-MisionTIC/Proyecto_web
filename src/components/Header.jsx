import React from 'react'
import { Link } from 'react-router-dom'
import Vinculos from './Vinculos'

const Header = () => {
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
                <Link to='/Login'>
                    <img className="usuario" src="https://github.com/Runteams-MisionTIC/Proyecto_web/blob/main/media/usuario.png?raw=true" alt="Usuario"/>
                </Link>
            </header>
    )
}

export default Header
