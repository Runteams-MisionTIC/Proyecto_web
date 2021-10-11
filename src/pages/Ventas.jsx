import '../styles/ventas.css';
import Footer from '../components/Footer';
import Header from '../components/Header';

const Ventas = () => {
    return (
        <div className="Ventas">
            <Header/>
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

            <Footer/>
        </div>
    );
}

export default Ventas;