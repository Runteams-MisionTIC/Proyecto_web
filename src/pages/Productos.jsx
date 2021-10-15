import '../styles/productos.css'
import Vinculos from '../components/Vinculos.jsx'
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

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
                    <Link to='/Credenciales' className='vinculo'>
                        <Vinculos pagina="Administración" />
                    </Link>
                </nav>
                <Link to='/Login'>
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

            <Footer/>
        </div>
    );
}

export default Productos;