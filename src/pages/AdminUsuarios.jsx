import React, {useState, useEffect, useRef} from 'react';
import '../styles/usuarios.css';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { nanoid } from 'nanoid';



const Usuarios = () => {
    
    const [mostrarTabla, setMostrarTabla] = useState(true);
    const [textoBoton, setTextoBoton] = useState("Nuevo usuario");
    const [usuarios, setUsuarios] = useState([]);
    const [ejecutarConsulta, setEjecutarConsulta] = useState(true);

    const obtenerUsuarios = async () => {
        const options = { method: 'GET', url: 'http://localhost:2999/usuarios/' };
        await axios.request(options).then(function (response) {
            setUsuarios(response.data);
          })
          .catch(function (error) {
            console.error(error);
          });
        setEjecutarConsulta(false);
    };

    useEffect(()=>{
        if (ejecutarConsulta) {
            obtenerUsuarios();
        }
    },[ejecutarConsulta]);

    useEffect(() => {
        if (mostrarTabla) {
          setEjecutarConsulta(true);
        }
    }, [mostrarTabla]);

    useEffect(() => {
        if (mostrarTabla) {
          setTextoBoton('Nuevo usuario');
        } else {
          setTextoBoton('Mostrar usuarios');
        }
    }, [mostrarTabla]);

    return (
        <div className="Usuarios">
            <Header/>
            <section>
                <button  onClick = {() => {setMostrarTabla(!mostrarTabla)}} className="usuarios">{textoBoton}</button>
                {mostrarTabla ? ( <TablaUsuarios  listaUsuarios = {usuarios} setEjecutarConsulta={setEjecutarConsulta} />) : 
                (<FormularioUsuarios setMostrarTabla={setMostrarTabla} listaUsuarios={usuarios} setUsuarios={setUsuarios}/>)}
                <ToastContainer position="bottom-center" autoClose={5000} />
            </section>
            <Footer/>
        </div>
    );
}

const TablaUsuarios = ({listaUsuarios, setEjecutarConsulta}) => {

    return(
        <section className="contenedor-principal">
            <table>
                <thead>
                    <tr>
                        <th>Nombre usuario</th>
                        <th>Documento</th>
                        <th>Rol</th>
                        <th>Estado</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {listaUsuarios.map((usuarios)=>{
                        return <FilaUsuarios key={nanoid()} usuarios={usuarios} setEjecutarConsulta={setEjecutarConsulta} />
                    })}
                </tbody>
            </table>
            <button className="usuarios">Procesar</button>
            <button className="usuarios">Buscar</button>
            <button className="usuarios">Reportes</button>
        </section>
    );
}

const FilaUsuarios = ({usuarios, setEjecutarConsulta}) => {

    const [editar, setEditar] = useState(false);

    const [infoNuevoUsuario, setInfoNuevoUsuario] = useState({
        nombre: usuarios.nombre,
        documento: usuarios.documento,
        rol: usuarios.rol,
        estado: usuarios.estado
    });

    const actualizarUsuario = async () => {
        
        const options = {
            method: 'PATCH',
            url: `http://localhost:2999/usuarios/${usuarios._id}/`,
            headers: {'content-type':'application/json'},
            data: {...infoNuevoUsuario },
        }
        await axios.request(options).then(function(response){
            console.log(response.data);
            setEditar(false);
            setEjecutarConsulta(true);
            toast.success('El usuario ha sido editado con exito');
        })
        .catch(function(error){
            console.log(error)
            toast.error('El usuario no pudo ser editado');
        })
    }

    const eliminarUsuario = async () => {
        const options = {
            method: 'DELETE',
            url: `http://localhost:2999/usuarios/${usuarios._id}/`,
            headers: {'content-type':'application/json'},
            data: {id: usuarios._id},
        }
        await axios.request(options).then(function(response){
            console.log(response.data)
            setEjecutarConsulta(true)
            toast.success('El usuario ha sido eliminado con exito');
        })
        .catch(function(error){
            console.log(error)
            toast.error('El usuario no pudo ser eliminado');
        });
    }

    return(
        <tr>
            {editar ? (
                <>
                    <td><input className="inputsTabla" type="text" 
                        value={infoNuevoUsuario.nombre} 
                        onChange={(e)=>setInfoNuevoUsuario({...infoNuevoUsuario, nombre: e.target.value})} />
                    </td>
                    <td><input className="inputsTabla" type="text" 
                        value={infoNuevoUsuario.documento} 
                        onChange={(e)=>setInfoNuevoUsuario({...infoNuevoUsuario, documento: e.target.value})} />
                    </td>
                    <td><input className="inputsTabla" type="text" 
                        value={infoNuevoUsuario.rol} 
                        onChange={(e)=>setInfoNuevoUsuario({...infoNuevoUsuario, rol: e.target.value})} />
                    </td>
                    <td><input className="inputsTabla" type="text" 
                        value={infoNuevoUsuario.estado} 
                        onChange={(e)=>setInfoNuevoUsuario({...infoNuevoUsuario, estado: e.target.value})} />
                    </td>
                    
                </>
             )  : (
                    <>
                        <td>{usuarios.nombre}</td>
                        <td>{usuarios.documento}</td>
                        <td>{usuarios.rol}</td>
                        <td>{usuarios.estado}</td>
                    </>
                )
            }
            <td>
                <div className="iconos">
                    {editar ? (
                        <i onClick={() => {actualizarUsuario()}} id="check" className="fas fa-check"></i>
                    ):(
                        <i onClick={() => {setEditar(!editar)}} id="pencil" className="fas fa-pencil-alt"></i>
                    )}
                    <i onClick={() => {eliminarUsuario()}} id="trashCan" className="fas fa-trash"></i>
                </div>
            </td>
        </tr>
    );
}

const FormularioUsuarios = ({setMostrarTabla, listaUsuarios, setUsuarios}) => {

    const form = useRef(null)     

    const enviarBackend = async (e) => {
        e.preventDefault();
        const fd = new FormData(form.current);
        const nuevoUsuario = {};
        fd.forEach((value, key) => nuevoUsuario[key] = value);

        const options = {
            method: 'POST',
            url: 'http://localhost:2999/usuarios/',
            headers: {'content-type':'application/json'},
            data: {nombre:nuevoUsuario.nombre, documento:nuevoUsuario.documento, 
                   rol:nuevoUsuario.rol, estado:nuevoUsuario.estado}
        }
        await axios.request(options).then(function(response){
            console.log(response.data)
            toast.success('El usuario ha sido agregado con exito');
        })
        .catch(function(error){
            console.log(error)
            toast.error('El usuario no pudo ser agregado');
        })

        setMostrarTabla(true);
    }

    return (
        <form ref={form} onSubmit={enviarBackend} className="formulario">
            <input 
                className="entrada" type="text" 
                placeholder="Nombre usuario" 
                name="nombre" required
            />
            <input 
                className="entrada" type="text" 
                placeholder="Documento"
                name='documento' required
            />
            <input 
                className="entrada" type="text" 
                placeholder="Rol"
                name="rol" required
            />
            <input 
                className="entrada" type="text" 
                placeholder="Estado"
                name="estado" required
            />
            <button type='submit' id="saveButton">Guardar</button>
        </form>
    );
}

export default Usuarios;