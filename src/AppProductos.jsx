import logo from './logo.svg';
import './estilos/estilos.css';

function AppProductos() {
  return (
    <div className="AppProductos">
        <header>
            <a href="./inicio.html">
                <img className="logo" src="https://raw.githubusercontent.com/Runteams-MisionTIC/Proyecto_web/main/media/logo.png" alt="" />
            </a>
            <vinculos pagina="Inicio" />
            <a className="vinculo" href="./ventas.html">Ventas</a>
            <a className="vinculo" href="./productos.html">Productos</a>
            <a className="vinculo" href="./credenciales.html">Administración</a>
            <a href="">
                <img className="usuario" src="https://github.com/Runteams-MisionTIC/Proyecto_web/blob/main/media/usuario.png?raw=true" alt="Usuario" />
            </a>
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

function vinculos({pagina}) {
    return(
        <a className="vinculo" href="./inicio.html">{pagina}</a>
    );
}

export default AppProductos;
