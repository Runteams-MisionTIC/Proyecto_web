import React, {useState, useEffect, useRef} from 'react';
import '../styles/ventas.css';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { nanoid } from 'nanoid';



const Ventas = () => {
    
    const [mostrarTabla, setMostrarTabla] = useState(true);
    const [textoBoton, setTextoBoton] = useState("Nueva venta")
    const [ventas, setVentas] = useState([])
    const [hacerConsulta, setHacerConsulta] = useState(true)

    useEffect(() => {
        const obtenerVentas = async () => {
            const options = {method: 'GET', url: 'http://localhost:2999/ventas'}
            await axios.request(options).then(function(response){
                setVentas(response.data)
            })
            .catch(function(error){
                console.log(error)
            });
            if (hacerConsulta) {
                obtenerVentas()
                setHacerConsulta(false)
            }
        }
    },[hacerConsulta])

    useEffect(() => {
        const obtenerVentas = async () => {
            const options = {method: 'GET', url: 'http://localhost:2999/ventas'}
            await axios.request(options).then(function(response){
                setVentas(response.data)
            })
            .catch(function(error){
                console.log(error)
            });
        }
        if(mostrarTabla){
            obtenerVentas()
        }
    },[]);

    useEffect(() => {
        if (mostrarTabla === false) {
            setTextoBoton("Mostrar tabla");
            setHacerConsulta(true)
        }else{
            setTextoBoton("Nueva venta");
        }
    },[mostrarTabla]);

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

    const enviarBackend = async (e) => {
        
        e.preventDefault();
        const fd = new FormData(form.current);
        const nuevaVenta = {};
        fd.forEach((value, key) => nuevaVenta[key] = value);

        const options = {
            method: 'POST',
            url: 'http://localhost:2999/ventas/nueva',
            headers: {'content-type':'application/json'},
            data: {nombre:nuevaVenta.nombre, documento:nuevaVenta.documento, 
                   telefono:nuevaVenta.telefono, producto:nuevaVenta.producto, 
                   cantidad:nuevaVenta.cantidad}
        }
        await axios.request(options).then(function(response){
            console.log(response.data)
            toast.success('La venta ha sido agregada con exito');
        })
        .catch(function(error){
            console.log(error)
            toast.error('La venta no pudo ser agregada');
        })

        ingresarInformacionVenta([...listaVentas, nuevaVenta])
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

const TablaVentas = ({listaVentas, setHacerConsulta}) => {

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
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {listaVentas.map((ventas)=>{
                        return <FilaVentas key={nanoid()} ventas={ventas} setHacerConsulta={setHacerConsulta} />
                    })}
                </tbody>
            </table>
            <button className="ventas">Procesar</button>
            <button className="ventas">Buscar</button>
            <button className="ventas">Reportes</button>
        </section>
    );
}

const FilaVentas = ({ventas, setHacerConsulta}) => {

    const [editar, setEditar] = useState(false);

    const [infoNuevaVenta, setInfoNuevaVenta] = useState({
        nombre: ventas.nombre,
        documento: ventas.documento,
        telefono: ventas.telefono,
        producto: ventas.producto,
        cantidad: ventas.cantidad
    })

    const actualizarVenta = async () => {
        //enviar la info al backend
        
        const options = {
            method: 'PATCH',
            url: 'http://localhost:2999/ventas/editar',
            headers: {'content-type':'application/json'},
            data: {...infoNuevaVenta, id:ventas._id}
        }
        await axios.request(options).then(function(response){
            console.log(response.data)
            setEditar(false)
            setHacerConsulta(true)
            toast.success('La venta ha sido editada con exito');
        })
        .catch(function(error){
            console.log(error)
            toast.error('La venta no pudo ser editada');
        })
    }

    const eliminarVenta = async () => {
        const options = {
            method: 'DELETE',
            url: 'http://localhost:2999/ventas/eliminar',
            headers: {'content-type':'application/json'},
            data: {id:ventas._id}
        }
        await axios.request(options).then(function(response){
            console.log(response.data)
            setHacerConsulta(true)
            toast.success('La venta ha sido agregada con exito');
        })
        .catch(function(error){
            console.log(error)
            toast.error('La venta no pudo ser agregada');
        })
    }

    return(
        <tr>
            {editar ? (
                <>
                    <td><input name='nombre' className="inputsTabla" type="text" value={infoNuevaVenta.nombre} onChange={e=>{setInfoNuevaVenta({...infoNuevaVenta,nombre: e.target.nombre})}} /></td>
                    <td><input name='documento' className="inputsTabla" type="text" value={infoNuevaVenta.documento} onChange={e=>{setInfoNuevaVenta({...infoNuevaVenta,documento: e.target.documento})}} /></td>
                    <td><input name='telefono' className="inputsTabla" type="text" value={infoNuevaVenta.telefono} onChange={e=>{setInfoNuevaVenta({...infoNuevaVenta,telefono: e.target.telefono})}} /></td>
                    <td><input name='producto' className="inputsTabla" type="text" value={infoNuevaVenta.producto} onChange={e=>{setInfoNuevaVenta({...infoNuevaVenta,producto: e.target.producto})}} /></td>
                    <td><input name='cantidad' className="inputsTabla" type="text" value={infoNuevaVenta.cantidad} onChange={e=>{setInfoNuevaVenta({...infoNuevaVenta,cantidad: e.target.cantidad})}} /></td>
                </>
             )  : (
                    <>
                        <td>{ventas.nombre}</td>
                        <td>{ventas.documento}</td>
                        <td>{ventas.telefono}</td>
                        <td>{ventas.producto}</td>
                        <td>{ventas.cantidad}</td>
                    </>
                )
            }

            <td>600</td>
            <td>$3.000</td>
            <td>#00000000</td>
            <td>
                <div className="iconos">
                    {editar ? (
                        <i onClick={() => {actualizarVenta(); setEditar(false)}} id="check" className="fas fa-check"></i>
                    ):(
                        <i onClick={() => {setEditar(!editar)}} id="pencil" className="fas fa-pencil-alt"></i>
                    )}
                    <i onClick={() => {eliminarVenta()}} id="trashCan" className="fas fa-trash"></i>
                </div>
            </td>
        </tr>
    );
}

export default Ventas;