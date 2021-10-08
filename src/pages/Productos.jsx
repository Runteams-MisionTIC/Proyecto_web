import '../styles/Productos.css';
import Vinculos from '../components/Vinculos.jsx'

function Productos() {
    return (
        <div className="Productos">
            <header>
                <a href="./inicio.html">
                    <img className="logo" src="https://raw.githubusercontent.com/Runteams-MisionTIC/Proyecto_web/main/media/logo.png" alt="" />
                </a>
                <Vinculos pagina="Inicio" />
                <Vinculos pagina="Ventas" />
                <Vinculos pagina="Productos" />
                <Vinculos pagina="Administración" />
                <a href="">
                    <img className="usuario" src="https://github.com/Runteams-MisionTIC/Proyecto_web/blob/main/media/usuario.png?raw=true" alt="Usuario"/>
                </a>
            </header>
            <section>
                <button className="Productos">Agregar</button>
                <button className="Productos">Eliminar</button>
                <button className="Productos">Procesar</button>
                <button className="Productos">Buscar</button>
                <button className="Productos">Reportes</button>
                <button className="Productos">Editar</button>
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
                        <td><select name="" id="">
                                <option value="">Disponible</option>
                                <option value="">No Disponible</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td>1112</td>
                        <td>Producto2</td>
                        <td>$ 10.000,00</td>
                        <td><select name="" id="">
                                <option value="">Disponible</option>
                                <option value="">No Disponible</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td>1113</td>
                        <td>Producto3</td>
                        <td>$ 10.000,00</td>
                        <td><select name="" id="">
                                <option value="">Disponible</option>
                                <option value="">No Disponible</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td>1114</td>
                        <td>Producto4</td>
                        <td>$ 10.000,00</td>
                        <td><select name="" id="">
                                <option value="">Disponible</option>
                                <option value="">No Disponible</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td>111N</td>
                        <td>ProductoN</td>
                        <td>$ 10.000,00</td>
                        <td><select name="" id="">
                                <option value="">Disponible</option>
                                <option value="">No Disponible</option>
                            </select>
                        </td>
                    </tr>
                </table>
            </section>
        </div>
  );
}

export default Productos;
