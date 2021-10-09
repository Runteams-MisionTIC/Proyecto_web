import '../styles/ventas.css';
import Vinculos from '../components/Vinculos.jsx'
import { Link } from 'react-router-dom';

function Ventas() {
    return (
        <div className="Ventas">
            <header>
                <Link to='/'>
                    <img className="logo" src="https://raw.githubusercontent.com/Runteams-MisionTIC/Proyecto_web/main/media/logo.png" alt="Logo"/>
                </Link>
                <Link to='' className='vinculo'>
                    <Vinculos pagina="Inicio" />
                </Link>
                <Link to='' className='vinculo'>
                    <Vinculos pagina="Ventas" />
                </Link>
                <Link to='/Productos' className="vinculo">
                    <Vinculos pagina="Productos" />
                </Link>
                <Link to='' className='vinculo'>
                    <Vinculos pagina="Administración" />
                </Link>
                <Link to=''>
                    <img className="usuario" src="https://github.com/Runteams-MisionTIC/Proyecto_web/blob/main/media/usuario.png?raw=true" alt="Usuario"/>
                </Link>
            </header>
            <section>
                <button className="ventas">Agregar</button>
                <button className="ventas">Eliminar</button>
                <button className="ventas">Procesar</button>
                <button className="ventas">Buscar</button>
                <button className="ventas">Reportes</button>
                <button className="ventas">Editar</button>
            </section>
            <section id="contenedor-principal">
                <table>
                    <thead>
                        <tr>
                            <th>Nombre cliente</th> <th>Documento</th> <th>Telefono</th> <th>Producto</th> <th>Cantidad</th> <th>Valor unitario</th> <th>Valor total</th> <th>ID Venta</th>
                        </tr>
                    </thead>
                    <tr>
                        <td>Yinare</td> <td>1010101010</td> <td>3110000000</td> <td>Zapatos</td> <td>5</td> <td>600</td> <td>$3.000</td> <td>#00000000</td>
                    </tr>
                    <tr>
                        <td>Sebastian</td> <td>1010101010</td> <td>3110000000</td> <td>Camisetas</td> <td>5</td>  <td>600</td> <td>$3.000</td> <td>#00000000</td>
                    </tr>
                    <tr>
                        <td>Osbaldo</td> <td>1010101010</td> <td>3110000000</td> <td>Pantalones</td> <td>5</td>  <td>600</td> <td>$3.000</td> <td>#00000000</td>
                    </tr>
                    <tr>
                        <td>Nicolas</td> <td>1010101010</td> <td>3110000000</td> <td>Gorros</td> <td>5</td>  <td>600</td> <td>$3.000</td> <td>#00000000</td>
                    </tr>
                    <tr>
                        <td>Juan</td> <td>1010101010</td> <td>3110000000</td> <td>Chaquetas</td> <td>5</td>  <td>600</td> <td>$3.000</td> <td>#00000000</td>
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

export default Ventas;