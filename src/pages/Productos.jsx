import '../styles/productos.css'
import Vinculos from '../components/Vinculos.jsx'
import { Link } from 'react-router-dom';

function Productos() {
    return(
        <div className="Productos">
            <header>
                <Link to='/'>
                    <img className="icono" src="https://raw.githubusercontent.com/Runteams-MisionTIC/Proyecto_web/main/media/logo.png" alt=""/>
                </Link>
                <nav className="navbar">
                    <Link to='/' className='vinculo'>
                        <Vinculos pagina="Inicio" />
                    </Link>
                    <Link to='/Ventas' className='vinculo'>
                        <Vinculos pagina="Ventas" />
                    </Link>
                    <Link to='/Productos' className='vinculo'>
                        <Vinculos pagina="Productos" />
                    </Link>
                    <Link to='' className='vinculo'>
                        <Vinculos pagina="Administración" />
                    </Link>
                </nav>
                <Link to=''>
                    <img className="usuario" src="https://github.com/Runteams-MisionTIC/Proyecto_web/blob/main/media/usuario.png?raw=true" alt="Usuario"/>
                </Link>
            </header>
            <section>
                <button className="productos">Agregar</button>
                <button className="productos">Eliminar</button>
                <button className="productos">Buscar</button>
                <button className="productos">Reportes</button>
                <button className="productos">Editar</button>
            </section>
            <section id="contenedor-principal">
                <table>
                    <thead>
                        <tr>
                            <th>Identificador único</th>
                            <th>Descripción</th>
                            <th>Valor Unitario</th>
                            <th>Disponiblilidad</th>
                        </tr>
                    </thead>
                    <tr>
                        <td>1111</td>
                        <td>Producto1</td>
                        <td>$ 10.000,00</td>
                        <td>
                            <select>
                                <option value="">Disponible</option>
                                <option value="">No Disponible</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td>1112</td>
                        <td>Producto2</td>
                        <td>$ 10.000,00</td>
                        <td>
                            <select>
                                <option value="">Disponible</option>
                                <option value="">No Disponible</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td>1113</td>
                        <td>Producto3</td>
                        <td>$ 10.000,00</td>
                        <td>
                            <select>
                                <option value="">Disponible</option>
                                <option value="">No Disponible</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td>1115</td>
                        <td>Producto5</td>
                        <td>$ 10.000,00</td>
                        <td>
                            <select>
                                <option value="">Disponible</option>
                                <option value="">No Disponible</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td>1116</td>
                        <td>Producto6</td>
                        <td>$ 10.000,00</td>
                        <td>
                            <select>
                                <option value="">Disponible</option>
                                <option value="">No Disponible</option>
                            </select>
                        </td>
                    </tr>
                </table>
            </section>

            <footer>
                <div className="container_footer">
                    <div className="box_footer">
                        <div className="logo_footer">
                            <img src="https://raw.githubusercontent.com/Runteams-MisionTIC/Proyecto_web/main/media/logo.png" alt="logo"/>
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
                        <a href="#"><i className="fab fa-facebook-square"></i> Facebook</a>
                        <a href="#"><i className="fab fa-twitter-square"></i> Twitter</a>
                        <a href="#"><i className="fab fa-instagram-square"></i> Instagram</a>
                    </div>
                </div>
                <div className="box_copy">
                    <p>Todos los derechos son reservados © 2021
                    <b>Runteams</b></p>
                </div>
            </footer>
        </div>
    );
}

export default Productos;