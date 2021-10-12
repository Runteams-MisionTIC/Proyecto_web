import React, {useState, useEffect} from 'react';
import '../styles/ventas.css';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
        if (mostrarTabla == false) {
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
    const [nombre, setNombre] = useState("");
    const [documento, setDocumento] = useState("");
    const [telefono, setTelefono] = useState("");
    const [producto, setProducto] = useState("");
    const [cantidad, setCantidad] = useState("");

    const enviarBackend = () => {
        console.log(nombre, documento, telefono, producto, cantidad);
        ingresarInformacionVenta([...listaVentas, 
            {nombre:nombre, documento:documento, telefono:telefono, producto:producto, cantidad:cantidad}])
        toast.success('La venta ha sido agregada con exito');
        cambiarATabla(true);
    }
    
    return (
        <form className="formulario">
            <input 
                className="entrada" type="text" 
                placeholder="Nombre cliente" value={nombre} 
                onChange={(e) => {
                    setNombre(e.target.value);
                }}
            />
            <input 
                className="entrada" type="text" 
                placeholder="Documento" value={documento} 
                onChange={(e) => {
                    setDocumento(e.target.value);
                }}
            />
            <input 
                className="entrada" type="text" 
                placeholder="Teléfono" value={telefono} 
                onChange={(e) => {
                    setTelefono(e.target.value);
                }}
            />
            <input 
                className="entrada" type="text" 
                placeholder="Producto" value={producto} 
                onChange={(e) => {
                    setProducto(e.target.value);
                }}
            />
            <input 
                className="entrada" type="text" 
                placeholder="Cantidad" value={cantidad} 
                onChange={(e) => {
                    setCantidad(e.target.value);
                }}
            />
            <button id="saveButton"
            type="button"
            onClick={() => {enviarBackend()}} >
                Guardar
            </button>
        </form>
    );
}


const TablaVentas = ({listaVentas}) => {

    useEffect(() => {
        console.log("La lista es: ", listaVentas);
    },[listaVentas]);

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
                                <td>{ventas.numero}</td>
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