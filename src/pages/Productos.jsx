import React, {useState, useEffect, useRef} from 'react';
import '../styles/productos.css';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { nanoid } from 'nanoid';
import { Tooltip } from '@material-ui/core';
import { Dialog } from '@material-ui/core';





const Productos = () => {
    
    const [mostrarTabla, setMostrarTabla] = useState(true);
    const [textoBoton, setTextoBoton] = useState("Nuevo producto");
    const [productos, setProductos] = useState([]);
    const [ejecutarConsulta, setEjecutarConsulta] = useState(true);

    const obtenerProductos = async () => {
        const options = { method: 'GET', url: 'http://localhost:2999/productos/' };
        await axios.request(options).then(function (response) {
            setProductos(response.data);
          })
          .catch(function (error) {
            console.error(error);
          });
        setEjecutarConsulta(false);
    };

    useEffect(()=>{
        if (ejecutarConsulta) {
            obtenerProductos();
        }
    },[ejecutarConsulta]);

    useEffect(() => {
        if (mostrarTabla) {
          setEjecutarConsulta(true);
        }
    }, [mostrarTabla]);

    useEffect(() => {
        if (mostrarTabla) {
          setTextoBoton('Nuevo producto');
        } else {
          setTextoBoton('Mostrar productos');
        }
    }, [mostrarTabla]);

    return (
        <div className="Productos">
            <Header/>
            <section>
                <button  onClick = {() => {setMostrarTabla(!mostrarTabla)}} className="productos">{textoBoton}</button>
                {mostrarTabla ? ( <TablaProductos  listaProductos = {productos} setEjecutarConsulta={setEjecutarConsulta} />) : 
                (<FormularioProductos setMostrarTabla={setMostrarTabla} listaProductos={productos} setProductos={setProductos}/>)}
                <ToastContainer position="bottom-center" autoClose={5000} />
            </section>
            <Footer/>
        </div>
    );
}

const TablaProductos = ({listaProductos, setEjecutarConsulta}) => {
    const [busqueda, setBusqueda] = useState("");
    const [ProductosFiltrados, setProductosFiltrados] = useState(listaProductos);

    useEffect(() => {
        setProductosFiltrados(
            listaProductos.filter((elemento) => {
                return JSON.stringify(elemento).toLowerCase().includes(busqueda.toLowerCase());
            })
        );
    }, [busqueda, listaProductos]);

    return(
        <section className="flex flex-col items-center justify-center w-full">
            <input
                placeholder='Buscar'
                className='self-end border border-gray-700 px-3 py-1 rounded-md outline-none focus:border-indi'
                value={busqueda}
                onChange={(e) => setBusqueda(e.target.value)}
            />
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
                    {ProductosFiltrados.map((productos)=>{
                        return <FilaProductos key={nanoid()} productos={productos} setEjecutarConsulta={setEjecutarConsulta} />
                    })}
                </tbody>
            </table>
        </section>
    );
}

const FilaProductos = ({productos, setEjecutarConsulta}) => {

    const [editar, setEditar] = useState(false);
    const [openDialog, setOpenDialog] = useState(false);
    const [infoNuevaProducto, setInfoNuevaProducto] = useState({
        id: productos.id,
        nombre: productos.nombre,
        valor: productos.valor,
        stock: productos.stock,
    });

    const actualizarProducto = async () => {
        
        const options = {
            method: 'PATCH',
            url: `http://localhost:2999/productos/${productos._id}/`,
            headers: {'content-type':'application/json'},
            data: {...infoNuevaProducto },
        }
        await axios.request(options).then(function(response){
            console.log(response.data);
            setEditar(false);
            setEjecutarConsulta(true);
            toast.success('el producto ha sido editada con exito');
        })
        .catch(function(error){
            console.log(error)
            toast.error('el producto no fue editado');
        })
    }

    const eliminarProducto = async () => {
        const options = {
            method: 'DELETE',
            url: `http://localhost:2999/productos/${productos._id}/`,
            headers: {'content-type':'application/json'},
            data: {id: productos._id},
        }
        await axios.request(options).then(function(response){
            console.log(response.data)
            setEjecutarConsulta(true)
            toast.success('El producto ha sido agregado con exito');
        })
        .catch(function(error){
            console.log(error)
            toast.error('No se pudo eliminar producto');
        });
        setOpenDialog(false)
    }

    return(
        <tr>
            {editar ? (
                <>
                    <td><input className="inputsTabla" type="text" value={infoNuevaProducto.id} 
                    onChange={(e)=>setInfoNuevaProducto({...infoNuevaProducto, id: e.target.value})} />
                    </td>
                    <td><input className="inputsTabla" type="text" 
                    value={infoNuevaProducto.nombre} 
                    onChange={(e)=>setInfoNuevaProducto({...infoNuevaProducto,nombre: e.target.value})} />
                    </td>
                    <td><input className="inputsTabla" type="number" 
                    value={infoNuevaProducto.valor}
                    onChange={(e)=>setInfoNuevaProducto({...infoNuevaProducto,valor: e.target.value})} />
                    </td>
                    <td><input className="inputsTabla" type="number" 
                    value={infoNuevaProducto.stock} 
                    onChange={(e)=>setInfoNuevaProducto({...infoNuevaProducto,stock: e.target.value})} />
                    </td>
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
                        <i onClick={() => {actualizarProducto()}} id="check" className="fas fa-check"></i>
                    ):(
                        <i onClick={() => {setEditar(!editar)}} id="pencil" className="fas fa-pencil-alt"></i>
                    )}
                    <i onClick={() => {eliminarProducto()}} id="trashCan" className="fas fa-trash"></i>
                </div>
            </td>
        </tr>
    );
}

const FormularioProductos = ({setMostrarTabla, listaProductos, setProductos}) => {

    const form = useRef(null)     

    const enviarBackend = async (e) => {
        e.preventDefault();
        const fd = new FormData(form.current);
        const nuevoProducto = {};
        fd.forEach((value, key) => nuevoProducto[key] = value);

        const options = {
            method: 'POST',
            url: 'http://localhost:2999/productos/',
            headers: {'content-type':'application/json'},
            data: {id:nuevoProducto.id, nombre:nuevoProducto.nombre, 
                   valor:nuevoProducto.valor, stock:nuevoProducto.stock, 
                   }
        }
        await axios.request(options).then(function(response){
            console.log(response.data)
            toast.success('El producto ha sido agregado con exito');
        })
        .catch(function(error){
            console.log(error)
            toast.error('El producto no pudo ser agregado');
        })

        setMostrarTabla(true);
    }

    return (
        <form ref={form} onSubmit={enviarBackend} className="formulario">
            <input 
                className="entrada" type="number"
                placeholder="id" 
                name="id" required
            />
            <input 
                className="entrada" type="text" 
                placeholder="Nombre"
                name='nombre' required
            />
            <input 
                className="entrada" type="number" min={1}
                placeholder="Valor"
                name="valor" required
            />
            <input 
                className="entrada" type="number" min={1}
                placeholder="Stock"
                name="stock" required
            />
            <button type='submit' id="saveButton">Guardar</button>
        </form>
    );
}

export default Productos;
