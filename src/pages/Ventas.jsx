import React, { useState, useEffect, useRef } from 'react';
import '../styles/ventas.css';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { nanoid } from 'nanoid';
import { Tooltip } from '@material-ui/core';
import { Dialog } from '@material-ui/core';
import { obtenerProductos } from '../components/Apis.js';



const Ventas = () => {

    const [mostrarTabla, setMostrarTabla] = useState(true);
    const [textoBoton, setTextoBoton] = useState("Nueva venta");
    const [ventas, setVentas] = useState([]);
    const [ejecutarConsulta, setEjecutarConsulta] = useState(true);

    const obtenerVentas = async () => {
        const options = { method: 'GET', url: 'http://localhost:2999/ventas/' };
        await axios.request(options).then(function (response) {
            setVentas(response.data);
        })
            .catch(function (error) {
                console.error(error);
            });
        setEjecutarConsulta(false);
    };

    useEffect(() => {
        if (ejecutarConsulta) {
            obtenerVentas();
        }
    }, [ejecutarConsulta]);

    useEffect(() => {
        if (mostrarTabla) {
            setEjecutarConsulta(true);
        }
    }, [mostrarTabla]);

    useEffect(() => {
        if (mostrarTabla) {
            setTextoBoton('Nueva venta');
        } else {
            setTextoBoton('Mostrar ventas');
        }
    }, [mostrarTabla]);

    return (
        <div className="Ventas">
            <Header />
            <section>
                <button onClick={() => { setMostrarTabla(!mostrarTabla) }} className="ventas">{textoBoton}</button>
                {mostrarTabla ? (<TablaVentas listaVentas={ventas} setEjecutarConsulta={setEjecutarConsulta} />) :
                    (<FormularioVentas setMostrarTabla={setMostrarTabla} listaVentas={ventas} setVentas={setVentas} />)}
                <ToastContainer position="bottom-center" autoClose={5000} />
            </section>
            <Footer />
        </div>
    );
}

const TablaVentas = ({ listaVentas, setEjecutarConsulta }) => {

    const [busqueda, setBusqueda] = useState("");
    const [ventasFiltradas, setVentasFiltradas] = useState(listaVentas);

    useEffect(() => {
        setVentasFiltradas(
            listaVentas.filter((elemento) => {
                return JSON.stringify(elemento).toLowerCase().includes(busqueda.toLowerCase());
            })
        );
    }, [busqueda, listaVentas]);

    return (
        <section className="flex flex-col items-center justify-center w-full">
            <input
                placeholder='Buscar'
                className='self-end border border-gray-700 px-3 py-1 rounded-md outline-none mx-8'
                value={busqueda}
                onChange={(e) => setBusqueda(e.target.value)}
            />
            <table>
                <thead>
                    <tr>
                        <th>Nombre cliente</th>
                        <th>Documento</th>
                        <th>Telefono</th>
                        <th>Producto</th>
                        <th>Cantidad</th>
                        <th>Valor unitario</th>
                        <th>Valor total</th>
                        <th>ID Venta</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {ventasFiltradas.map((ventas) => {
                        return <FilaVentas key={nanoid()} ventas={ventas} setEjecutarConsulta={setEjecutarConsulta} />
                    })}
                </tbody>
            </table>
        </section>
    );
}

const FilaVentas = ({ ventas, setEjecutarConsulta }) => {

    const [editar, setEditar] = useState(false);
    const [productos, setProductos] = useState([]);
    const [openDialog, setOpenDialog] = useState(false);
    const [infoNuevaVenta, setInfoNuevaVenta] = useState({
        nombre: ventas.nombre,
        documento: ventas.documento,
        telefono: ventas.telefono,
        producto: ventas.producto,
        cantidad: ventas.cantidad
    });

    const actualizarVenta = async () => {

        const options = {
            method: 'PATCH',
            url: `http://localhost:2999/ventas/${ventas._id}/`,
            headers: { 'content-type': 'application/json' },
            data: { ...infoNuevaVenta },
        }
        await axios.request(options).then(function (response) {
            console.log(response.data);
            setEditar(false);
            setEjecutarConsulta(true);
            toast.success('La venta ha sido editada con exito');
        })
            .catch(function (error) {
                console.log(error)
                toast.error('La venta no pudo ser editada');
            })
    }

    const eliminarVenta = async () => {
        const options = {
            method: 'DELETE',
            url: `http://localhost:2999/ventas/${ventas._id}/`,
            headers: { 'content-type': 'application/json' },
            data: { id: ventas._id },
        }
        await axios.request(options).then(function (response) {
            console.log(response.data)
            setEjecutarConsulta(true)
            toast.success('La venta ha sido agregada con exito');
        })
            .catch(function (error) {
                console.log(error)
                toast.error('La venta no pudo ser agregada');
            });
        setOpenDialog(false)
    }

    useEffect(() => {
        obtenerProductos(setProductos);
    }, []);

    return (
        <tr>
            {editar ? (
                <>
                    <td><input className="inputsTabla" type="text"
                        value={infoNuevaVenta.nombre}
                        onChange={(e) => setInfoNuevaVenta({ ...infoNuevaVenta, nombre: e.target.value })} />
                    </td>
                    <td><input className="inputsTabla" type="text"
                        value={infoNuevaVenta.documento}
                        onChange={(e) => setInfoNuevaVenta({ ...infoNuevaVenta, documento: e.target.value })} />
                    </td>
                    <td><input className="inputsTabla" type="text"
                        value={infoNuevaVenta.telefono}
                        onChange={(e) => setInfoNuevaVenta({ ...infoNuevaVenta, telefono: e.target.value })} />
                    </td>


                    <td>
                        <select className="inputsTabla" type="text"
                            value={infoNuevaVenta.producto}
                            onChange={(e) => setInfoNuevaVenta({ ...infoNuevaVenta, producto: e.target.value })}
                        >
                            {productos.map(u => {
                                return <option key={nanoid}>{u.nombre}</option>
                            })}
                        </select>
                    </td>

                    <td><input className="inputsTabla" type="text"
                        value={infoNuevaVenta.cantidad}
                        onChange={(e) => setInfoNuevaVenta({ ...infoNuevaVenta, cantidad: e.target.value })} />
                    </td>
                </>
                    ) : (
                    <>
                        <td>{ventas.nombre}</td>
                        <td>{ventas.documento}</td>
                        <td>{ventas.telefono}</td>
                        <td>{ventas.producto}</td>
                        <td>{ventas.cantidad}</td>
                    </>
                    )
            }
                    <td>valor</td>
                    <td>$3.000</td>
                    <td>#00000000</td>


                    {/* function generateRandom(min,max){
                return Math.floor(Math.random()* (max - min) + min);
            }
            function multiplicar(){
                var x = parseInt(document.getElementById("valor1").value);
                var y = parseInt(document.getElementById("valor2").value);
                document.getElementById("resultado").innerHTML = x * y;
            } */}


                    <td>
                        <div className="iconos">
                            {editar ? (
                                <>
                                    <Tooltip title='Confirmar edición'>
                                        <i onClick={() => { actualizarVenta() }} id="check" className="fas fa-check"></i>
                                    </Tooltip>
                                    <Tooltip title='Cancelar edición'>
                                        <i onClick={() => { setEditar(!editar) }} id="cancel" className="far fa-window-close"></i>
                                    </Tooltip>
                                </>
                            ) : (
                                <>
                                    <Tooltip title='Editar venta'>
                                        <i onClick={() => { setEditar(!editar) }} id="pencil" className="fas fa-pencil-alt"></i>
                                    </Tooltip>
                                    <Tooltip title='Eliminar venta'>
                                        <i onClick={() => { setOpenDialog(true) }} id="trashCan" className="fas fa-trash"></i>
                                    </Tooltip>
                                </>
                            )}
                        </div>
                        <Dialog open={openDialog}>
                            <div className='p-8 flex flex-col'>
                                <h1 className='text-gray-800 text-2xl font-bold'>¿Desea eliminar el vehículo?</h1>
                                <div className='flex w-full items-center justify-center my-4'>
                                    <button onClick={() => { eliminarVenta() }} className='mx-2 px-4 py-2 hover:text-white hover:bg-green-500'>Sí</button>
                                    <button onClick={() => { setOpenDialog(false) }} className='mx-2 px-4 py-2 text-white bg-red-500'>No</button>
                                </div>
                            </div>
                        </Dialog>
                    </td>
                </tr>
            );
}

            const FormularioVentas = ({setMostrarTabla, listaVentas, setVentas}) => {

    const [productos, setProductos] = useState([]);
    useEffect(() => {
                obtenerProductos(setProductos);
    }, []);

            const form = useRef(null)

    const enviarBackend = async (e) => {
                e.preventDefault();
            const fd = new FormData(form.current);
            const nuevaVenta = { };
        fd.forEach((value, key) => nuevaVenta[key] = value);

            const options = {
                method: 'POST',
            url: 'http://localhost:2999/ventas/',
            headers: {'content-type': 'application/json' },
            data: {
                nombre: nuevaVenta.nombre, documento: nuevaVenta.documento,
            telefono: nuevaVenta.telefono, producto: nuevaVenta.producto,
            cantidad: nuevaVenta.cantidad
            }
        }
            await axios.request(options).then(function (response) {
                console.log(response.data)
            toast.success('La venta ha sido agregada con exito');
        })
            .catch(function (error) {
                console.log(error)
                toast.error('La venta no pudo ser agregada');
            })

            setMostrarTabla(true);
    }

            return (
            <form ref={form} onSubmit={enviarBackend} className="formulario">
                <input
                    className="entrada" type="text"
                    placeholder="Nombre cliente"
                    name="nombre" required
                />
                <input
                    className="entrada" type="text"
                    placeholder="Documento"
                    name='documento' required
                />
                <input
                    className="entrada" type="number"
                    placeholder="Teléfono"
                    name="telefono" required
                />
                <select
                    className="entrada" type="text"
                    placeholder='Producto' name="producto"
                    required
                >
                    {productos.map(u => {
                        return <option key={nanoid}>{u.nombre}</option>
                    })}
                </select>
                <input
                    className="entrada" type="number"
                    placeholder="Cantidad"
                    name="cantidad" required
                />
                <button type='submit' id="saveButton">Guardar</button>
            </form>
            );
}

            export default Ventas;