import React, {useState, useEffect, useRef} from 'react';
import '../styles/ventas.css';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

const ventasBackend = [
    {
        nombre:"Juan",
        documento:"1010101",
        telefono:"12345",
        producto:"Camiseta",
        cantidad:"2",
        valor:"100"
    },
    {
        nombre:"Jose",
        documento:"101r0101",
        telefono:"123445",
        producto:"Camis5eta",
        cantidad:"32",
        valor:"1020"
    },
    {
        nombre:"Rubio",
        documento:"101011201",
        telefono:"1212345",
        producto:"Camis12eta",
        cantidad:"122",
        valor:"10120"
    },
    {
        nombre:"Rubio",
        documento:"101011201",
        telefono:"1212345",
        producto:"Camis12eta",
        cantidad:"122",
        valor:"10120"
    }
]

const Ventas = () => {
    

    const [mostrarTabla, setMostrarTabla] = useState(true);
    const [textoBoton, setTextoBoton] = useState("Nueva venta")
    const [ventas, setVentas] = useState([])

    useEffect(() => {
        //Obtener lista de ventas
        setVentas(ventasBackend)
    },[])

    useEffect(() => {
        if (mostrarTabla === false) {
            setTextoBoton("Mostrar tabla")
        }else{
            setTextoBoton("Nueva venta")
        }
    },[mostrarTabla])

    return (
        <div className="Ventas">
            <Header/>
            <section>
                <button  onClick = {() => {setMostrarTabla(!mostrarTabla)}} className="ventas">{textoBoton}</button>
                {mostrarTabla ? <TablaVentas  listaVentas = {ventas}/> : 
                <FormularioVentas cambiarATabla={setMostrarTabla} listaVentas={ventas} ingresarInformacionVenta={setVentas}/>}
                <ToastContainer position="bottom-center" autoClose={5000} />
            </section>
            <Footer/>
        </div>
    );
}

const FormularioVentas = ({cambiarATabla, listaVentas, ingresarInformacionVenta}) => {

    const form = useRef(null)     

    const enviarBackend = (e) => {
        e.preventDefault();
        const fd = new FormData(form.current);
        const nuevaVenta = {};
        fd.forEach((value, key) => nuevaVenta[key] = value);
        console.log(nuevaVenta)
        
        toast.success('La venta ha sido agregada con exito');
        cambiarATabla(true);
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
                className="entrada" type="text" 
                placeholder="Teléfono"
                name="telefono" required
            />
            <input 
                className="entrada" type="text" 
                placeholder="Producto"
                name="producto" required
            />
            <input 
                className="entrada" type="text" 
                placeholder="Cantidad"
                name="cantidad" required
            />
            <button type='submit' id="saveButton">Guardar</button>
        </form>
    );
}


const TablaVentas = ({listaVentas}) => {
    return(
        <section className="contenedor-principal">
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
                    </tr>
                </thead>
                <tbody>
                    {listaVentas.map((ventas)=>{
                        return(
                            <tr>
                                <td>{ventas.nombre}</td>
                                <td>{ventas.documento}</td>
                                <td>{ventas.telefono}</td>
                                <td>{ventas.producto}</td>
                                <td>{ventas.cantidad}</td>
                                <td>600</td>
                                <td>$3.000</td>
                                <td>#00000000</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
            <button className="ventas">Procesar</button>
            <button className="ventas">Buscar</button>
            <button className="ventas">Reportes</button>
        </section>
    );
}

export default Ventas;