import '../styles/productos.css'
import Footer from '../components/Footer';
import Header from '../components/Header';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

function Productos() {
    return(
        <div className="Productos">
            <Header/>
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