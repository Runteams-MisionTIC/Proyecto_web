import React, {useState, useEffect, useRef} from 'react';
import '../styles/productos.css';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { nanoid } from 'nanoid';



const Productos = () => {
    
    const [mostrarTabla, setMostrarTabla] = useState(true);
    const [textoBoton, setTextoBoton] = useState("Nuevo produto")
    const [productos, setProductos] = useState([])
    const [hacerConsulta, setHacerConsulta] = useState(true)

    useEffect(() => {
        const obtenerProductos = async () => {
            const options = {method: 'GET', url: 'http://localhost:2999/productos'}
            await axios.request(options).then(function(response){
                setProductos(response.data)
            })
            .catch(function(error){
                console.log(error)
            });
            if (hacerConsulta) {
                obtenerProductos()
                setHacerConsulta(false)
            }
        }
    },[hacerConsulta])

    useEffect(() => {
        const obtenerProductos = async () => {
            const options = {method: 'GET', url: 'http://localhost:2999/productos'}
            await axios.request(options).then(function(response){
                setProductos(response.data)
            })
            .catch(function(error){
                console.log(error)
            });
        }
        if(mostrarTabla){
            obtenerProductos()
        }
    },[]);

    useEffect(() => {
        if (mostrarTabla === false) {
            setTextoBoton("Mostrar tabla");
            setHacerConsulta(true)
        }else{
            setTextoBoton("Nuevo producto");
        }
    },[mostrarTabla]);

    return (
        <div className="Productos">
            <Header/>
            <section>
                <button  onClick = {() => {setMostrarTabla(!mostrarTabla)}} className="productos">{textoBoton}</button>
                {mostrarTabla ? <TablaProductos  listaProductos = {productos}/> : 
                <FormularioProductos cambiarATabla={setMostrarTabla} listaProductos={productos} ingresarInformacionProducto={setProductos}/>}
                <ToastContainer position="bottom-center" autoClose={5000} />
            </section>
            <Footer/>
        </div>
    );
}

const FormularioProductos = ({cambiarATabla, listaProductos, ingresarInformacionProducto}) => {

    const form = useRef(null)     

    const enviarBackend = (e) => {
        
        e.preventDefault();
        const fd = new FormData(form.current);
        const nuevaProducto = {};
        fd.forEach((value, key) => nuevaProducto[key] = value);

        const options = {
            method: 'POST',
            url: 'http://localhost:2999/productos/nueva',
            headers: {'content-type':'application/json'},
            data: {nombre:nuevaProducto.nombre, documento:nuevaProducto.documento, 
                   telefono:nuevaProducto.telefono, producto:nuevaProducto.producto, 
                   cantidad:nuevaProducto.cantidad}
        }
        axios.request(options).then(function(response){
            console.log(response.data)
            toast.success('el producto ha sido agregada con exito');
        })
        .catch(function(error){
            console.log(error)
            toast.error('el producto no pudo ser agregada');
        })

        ingresarInformacionProducto([...listaProductos, nuevaProducto])
        cambiarATabla(true);
    }

    return (
        <form ref={form} onSubmit={enviarBackend} className="formulario">
            <input 
                className="entrada" type="text" 
                placeholder="id" 
                name="id" required
            />
            <input 
                className="entrada" type="text" 
                placeholder="Nombre"
                name='nombre' required
            />
            <input 
                className="entrada" type="text" 
                placeholder="Valor"
                name="valor" required
            />
            <input 
                className="entrada" type="text" 
                placeholder="Stock"
                name="stock" required
            />

            <button type='submit' id="saveButton">Guardar</button>
        </form>
    );
}

const TablaProductos = ({listaProductos, setHacerConsulta}) => {

    return(
        <section className="contenedor-principal">
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nombre </th>
                        <th>Valor</th>
                        <th>Stock</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {listaProductos.map((productos)=>{
                        return <FilaProductos key={nanoid()} productos={productos} setHacerConsulta={setHacerConsulta} />
                    })}
                </tbody>
            </table>
            <button className="productos">Procesar</button>
            <button className="productos">Buscar</button>
            <button className="productos">Reportes</button>
        </section>
    );
}

const FilaProductos = ({productos, setHacerConsulta}) => {

    const [editar, setEditar] = useState(false);

    const [infoNuevaProducto, setInfoNuevaProducto] = useState({
        id: productos.id,
        nombre: productos.nombre,
        valor: productos.valor,
        stock: productos.stock,

    })
    const actualizarProducto = async () => {
        //enviar la info al backend
        
        const options = {
            method: 'PATCH',
            url: 'http://localhost:2999/producto/editar',
            headers: {'content-type':'application/json'},
            data: {...infoNuevaProducto, id:productos._id}
        }
        await axios.request(options).then(function(response){
            console.log(response.data)
            setEditar(false)
            setHacerConsulta(true)
            toast.success('el producto ha sido editada con exito');
        })
        .catch(function(error){
            console.log(error)
            toast.error('el producto no pudo ser editada');
        })

    }

    const eliminarProducto = async () => {
        const options = {
            method: 'DELETE',
            url: 'http://localhost:2999/productos/eliminar',
            headers: {'content-type':'application/json'},
            data: {id:productos._id}
        }
        await axios.request(options).then(function(response){
            console.log(response.data)
            setHacerConsulta(true)
            toast.success('el producto ha sido agregada con exito');
        })
        .catch(function(error){
            console.log(error)
            toast.error('el productono pudo ser agregada');
        })
    }

    return(
        <tr>
            {editar ? (
                <>
                    <td><input name='id' className="inputsTabla" type="text" value={infoNuevaProducto.id} onChange={e=>{setInfoNuevaProducto({...infoNuevaProducto,id: e.target.id})}} /></td>
                    <td><input name='nombre' className="inputsTabla" type="text" value={infoNuevaProducto.nombre} onChange={e=>{setInfoNuevaProducto({...infoNuevaProducto,nombre: e.target.nombre})}} /></td>
                    <td><input name='valor' className="inputsTabla" type="text" value={infoNuevaProducto.valor} onChange={e=>{setInfoNuevaProducto({...infoNuevaProducto,valor: e.target.valor})}} /></td>
                    <td><input name='stock' className="inputsTabla" type="text" value={infoNuevaProducto.stock} onChange={e=>{setInfoNuevaProducto({...infoNuevaProducto,stock: e.target.stock})}} /></td>
                   
                </>
             )  : (
                    <>
                        <td>{productos.id}</td>
                        <td>{productos.nombre}</td>
                        <td>{productos.valor}</td>
                        <td>{productos.stock}</td>

                    </>
                )
            }

            
            <td>
                <div className="iconos">
                    {editar ? (
                        <i onClick={() => {actualizarProducto(); setEditar(false)}} id="check" className="fas fa-check"></i>
                    ):(
                        <i onClick={() => {setEditar(!editar)}} id="pencil" className="fas fa-pencil-alt"></i>
                    )}
                    <i onClick={() => {eliminarProducto()}} id="trashCan" className="fas fa-trash"></i>
                </div>
            </td>
        </tr>
    );
}

export default Productos;
