import React from 'react';
import ImagenLogo from './ImagenLogo';
import { Link } from 'react-router-dom';
import useActiveRoute from 'hooks/useActiveRoute';

const Sidebar = () => {
  return (
    <nav className='hidden md:flex md:w-72 border border-gray-300 h-full flex-col bg-gray-200 p-5 sidebar'>
    <Link to='/admin'>
    <ImagenLogo />
    </Link>
    <div className='my-4'>
    <Ruta icono= "fas fa-cart-arrow-down" ruta="/admin/vehiculos" nombre="Producto" />
    <Ruta icono= "fas fa-dollar-sign" ruta="/admin/ventas" nombre="Ventas"/>
    <Ruta icono= "fas fa-user" ruta="/admin/usuarios" nombre="Usuarios"/>
    </div>
    <button>Cerrar Sesión</button>
    </nav>      
  );
};

const Ruta = ({icono, ruta, nombre}) => {
  return(
    <Link to={ruta}>
      <button className='p-1 my-1 bg-blue-400 flex w-full items-center rounded-md hover:bg-blue-600'>
        <i className={`${icono} w-10`} />
        {nombre}
    </button>
  </Link>


  );
};



export default Sidebar;
