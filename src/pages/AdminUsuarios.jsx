import React, { useState, useEffect, useRef } from 'react';
import '../styles/usuarios.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { nanoid } from 'nanoid';
import { Tooltip } from '@material-ui/core';
import { Dialog } from '@material-ui/core';
import { getToken } from '../components/getToken';



const Usuarios = () => {
    
    const [mostrarTabla, setMostrarTabla] = useState(true);
    const [textoBoton, setTextoBoton] = useState("Nuevo usuario");
    const [usuarios, setUsuarios] = useState([]);
    const [ejecutarConsulta, setEjecutarConsulta] = useState(true);

    const obtenerUsuarios = async () => {
        const options = {
            method: 'GET',
            url: 'https://runteams-backend.herokuapp.com/usuarios/',
            headers: {
                Authorization: getToken()
            }
        };
        await axios.request(options).then(function (response) {
            setUsuarios(response.data);
          })
          .catch(function (error) {
            console.error(error);
          });
        setEjecutarConsulta(false);
    };

    useEffect(() => {
        if (ejecutarConsulta) {
            obtenerUsuarios();
        }
    }, [ejecutarConsulta]);

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
            <section>
                <button onClick={() => { setMostrarTabla(!mostrarTabla) }} className="usuarios">{textoBoton}</button>
                {mostrarTabla ? (<TablaUsuarios listaUsuarios={usuarios} setEjecutarConsulta={setEjecutarConsulta} />) : 
                    (<FormularioUsuarios setMostrarTabla={setMostrarTabla} listaUsuarios={usuarios} setUsuarios={setUsuarios} />)}
                <ToastContainer position="bottom-center" autoClose={5000} />
            </section>
        </div>
    );
}

const TablaUsuarios = ({ listaUsuarios, setEjecutarConsulta }) => {

    return (
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
                    {listaUsuarios.map((usuarios) => {
                        return <FilaUsuarios key={nanoid()} usuarios={usuarios} setEjecutarConsulta={setEjecutarConsulta} />
                    })}
                </tbody>
            </table>
        </section>
    );
}

const FilaUsuarios = ({ usuarios, setEjecutarConsulta }) => {

    const [editar, setEditar] = useState(false);
    const [openDialog, setOpenDialog] = useState(false);
    const [infoNuevoUsuario, setInfoNuevoUsuario] = useState({
        nombre: usuarios.nombre,
        documento: usuarios.documento,
        rol: usuarios.rol,
        estado: usuarios.estado
    });

    const actualizarUsuario = async () => {
        
        const options = {
            method: 'PATCH',
            url: `https://runteams-backend.herokuapp.com/usuarios/${usuarios._id}/`,
            headers: { 'content-type': 'application/json', Authorization: getToken() },
            data: { ...infoNuevoUsuario },
        }
        await axios.request(options).then(function (response) {
            console.log(response.data);
            setEditar(false);
            setEjecutarConsulta(true);
            toast.success('El usuario ha sido editado con exito');
        })
        .catch(function (error) {
            console.log(error)
            toast.error('El usuario no pudo ser editado');
        })
    }

    const eliminarUsuario = async () => {
        const options = {
            method: 'DELETE',
            url: `https://runteams-backend.herokuapp.com/usuarios/${usuarios._id}/`,
            headers: { 'content-type': 'application/json', Authorization: getToken() },
        }
        await axios.request(options).then(function (response) {
            console.log(response.data)
            setEjecutarConsulta(true)
            toast.success('El usuario ha sido eliminado con exito');
        })
            .catch(function (error) {
                console.log(error)
                toast.error('El usuario no pudo ser eliminado');
            });
        setOpenDialog(false)
    }

    return (
        <tr>
            {editar ? (
                <>
                    <td><input className="inputsTabla" type="text" 
                        value={infoNuevoUsuario.nombre} 
                        onChange={(e) => setInfoNuevoUsuario({ ...infoNuevoUsuario, nombre: e.target.value })} />
                    </td>
                    <td><input className="inputsTabla" type="text" 
                        value={infoNuevoUsuario.documento} 
                        onChange={(e) => setInfoNuevoUsuario({ ...infoNuevoUsuario, documento: e.target.value })} />
                    </td>
                    <td><input className="inputsTabla" type="text" 
                        value={infoNuevoUsuario.rol} 
                        onChange={(e) => setInfoNuevoUsuario({ ...infoNuevoUsuario, rol: e.target.value })} />
                    </td>
                    <td><input className="inputsTabla" type="text" 
                        value={infoNuevoUsuario.estado} 
                        onChange={(e) => setInfoNuevoUsuario({ ...infoNuevoUsuario, estado: e.target.value })} />
                    </td>
                    
                </>
             ) : (
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
                        <>
                            <Tooltip title='Confirmar edición'>
                                <i onClick={() => { actualizarUsuario() }} id="check" className="fas fa-check"></i>
                            </Tooltip>
                            <Tooltip title='Cancelar edición'>
                                <i onClick={() => { setEditar(!editar) }} id="cancel" className="far fa-window-close"></i>
                            </Tooltip>
                        </>
                    ) : (
                        <>
                            <Tooltip title='Editar usuario'>
                                <i onClick={() => { setEditar(!editar) }} id="pencil" className="fas fa-pencil-alt"></i>
                            </Tooltip>
                            <Tooltip title='Eliminar usuario'>
                                <i onClick={() => { setOpenDialog(true) }} id="trashCan" className="fas fa-trash"></i>
                            </Tooltip>
                        </>
                    )}
                </div>
                <Dialog open={openDialog}>
                    <div className='p-8 flex flex-col'>
                        <h1 className='text-gray-800 text-2xl font-bold'>¿Desea eliminar el usuario?</h1>
                        <div className='flex w-full items-center justify-center my-4'>
                            <button onClick={() => { eliminarUsuario() }} className='mx-2 px-4 py-2 hover:text-white hover:bg-green-500'>Sí</button>
                            <button onClick={() => { setOpenDialog(false) }} className='mx-2 px-4 py-2 text-white bg-red-500'>No</button>
                        </div>
                    </div>
                </Dialog>
            </td>
        </tr>
    );
}

const FormularioUsuarios = ({ setMostrarTabla, listaUsuarios, setUsuarios }) => {

    const form = useRef(null)     

    const enviarBackend = async (e) => {
        e.preventDefault();
        const fd = new FormData(form.current);
        const nuevoUsuario = {};
        fd.forEach((value, key) => nuevoUsuario[key] = value);

        const options = {
            method: 'POST',
            url: 'https://runteams-backend.herokuapp.com/usuarios/',
            headers: { 'content-type': 'application/json', Authorization: getToken() },
            data: {
                nombre: nuevoUsuario.nombre, documento: nuevoUsuario.documento, 
                   rol: nuevoUsuario.rol, estado: nuevoUsuario.estado
                }
        }
        await axios.request(options).then(function (response) {
            console.log(response.data)
            toast.success('El usuario ha sido agregado con exito');
        })
        .catch(function (error) {
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
