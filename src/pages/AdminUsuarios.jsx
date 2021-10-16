import React, {useState, useEffect, useRef} from 'react';
import '../styles/AdminU.css';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { nanoid } from 'nanoid';



const Admin = () => {
    
    const [mostrarTabla, setMostrarTabla] = useState(true);
    const [textoBoton, setTextoBoton] = useState("Nuevo usuario")
    const [admin, setAdmin] = useState([])
    const [hacerConsulta, setHacerConsulta] = useState(true)

    useEffect(() => {
        const obtenerAdmin = async () => {
            const options = {method: 'GET', url: 'http://localhost:2999/admin'}
            await axios.request(options).then(function(response){
                setAdmin(response.data)
            })
            .catch(function(error){
                console.log(error)
            });
            if (hacerConsulta) {
                obtenerAdmin()
                setHacerConsulta(false)
            } 
        }
    },[hacerConsulta])

    useEffect(() => {
    const obtenerAdmin = async () => {
            const options = {method: 'GET', url: 'http://localhost:2999/admin'}
            await axios.request(options).then(function(response){
                setAdmin(response.data)
            })
            .catch(function(error){
                console.log(error)
            });
        }
        if(mostrarTabla){
            obtenerAdmin()
        }
    },[]);

    useEffect(() => {
    if (mostrarTabla === false) {
        setTextoBoton("Mostrar tabla");
        setHacerConsulta(true)
    }else{
        setTextoBoton("Nuevo usuario");
    }
    },[mostrarTabla]);

    return (
        <div className="Admin">
            <Header/>
            <section>
                <button  onClick = {() => {setMostrarTabla(!mostrarTabla)}} className="admin">{textoBoton}</button>
                {mostrarTabla ? <TablaAdmin  listaAdmin = {admin}/> : 
                <FormularioAdmin cambiarATabla={setMostrarTabla} listaAdmin={admin} ingresarInformacionAdmin={setAdmin}/>}
                <ToastContainer position="bottom-center" autoClose={5000} />
            </section>
            <Footer/>
        </div>
    );
}

const FormularioAdmin = ({cambiarATabla, listaAdmin, ingresarInformacionAdmin}) => {

    const form = useRef(null)     

    const enviarBackend = async (e) => {

        e.preventDefault();
        const fd = new FormData(form.current);
        const nuevoAdmin = {};
        fd.forEach((value, key) => nuevoAdmin[key] = value);

        const options = {
            method: 'POST',
            url: 'http://localhost:2999/admin/nuevo',
            headers: {'content-type':'application/json'},
            data: {nombre:nuevoAdmin.nombre, documento:nuevoAdmin.documento, 
                   rol:nuevoAdmin.rol, estado:nuevoAdmin.estado}
        }
        await axios.request(options).then(function(response){
            console.log(response.data)
            toast.success('El usuario ha sido agregado exitosamente');
        })
        .catch(function(error){
            console.log(error)
            toast.error('El usuario no pudo ser registrado');
        })

        ingresarInformacionAdmin([...listaAdmin, nuevoAdmin])
        cambiarATabla(true);
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

const TablaAdmin = ({listaAdmin, setHacerConsulta}) => {

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
                    {listaAdmin.map((admin)=>{
                        return <FilaAdmin key={nanoid()} admin={admin} setHacerConsulta={setHacerConsulta} />
                    })}
                </tbody>
            </table>
            <button className="admin">Procesar</button>
            <button className="admin">Buscar</button>
            <button className="admin">Reportes</button>
        </section>
    );
}

const FilaAdmin = ({admin, setHacerConsulta}) => {

    const [editar, setEditar] = useState(false);

    const [infoNuevoAdmin, setInfoNuevoAdmin] = useState({
        nombre: admin.nombre,
        documento: admin.documento,
        rol: admin.rol,
        estado: admin.estado,
    })

    const actualizarAdmin = async () => {
        //enviar la info al backend
        
        const options = {
           method: 'PATCH',
           url: 'http://localhost:2999/admin/editar',
           headers: {'content-type':'application/json'},
           data: {...infoNuevoAdmin, id:admin._id}
        }
        await axios.request(options).then(function(response){
           console.log(response.data)
           setEditar(false)
           setHacerConsulta(true)
           toast.success('El usuario ha sido registrado exitosamente');
        })
        .catch(function(error){
           console.log(error)
           toast.error('El usuario no pudo ser registrado');
        })
    }

    const eliminarAdmin = async () => {
        const options = {
           method: 'DELETE',
           url: 'http://localhost:2999/admin/eliminar',
           headers: {'content-type':'application/json'},
           data: {id:admin._id}
        }
        await axios.request(options).then(function(response){
           console.log(response.data)
           setHacerConsulta(true)
           toast.success('El usuario ha sido registrado exitosamente');
        })
        .catch(function(error){
           console.log(error)
           toast.error('El usuario no pudo ser registrado');
        })
    }

    return(
        <tr>
            {editar ? (
                <>
                    <td><input name='nombre' className="inputsTabla" type="text" value={infoNuevoAdmin.nombre} onChange={e=>{setInfoNuevoAdmin({...infoNuevoAdmin,nombre: e.target.nombre})}} /></td>
                    <td><input name='documento' className="inputsTabla" type="text" value={infoNuevoAdmin.documento} onChange={e=>{setInfoNuevoAdmin({...infoNuevoAdmin,documento: e.target.documento})}} /></td>
                    <td><input name='rol' className="inputsTabla" type="text" value={infoNuevoAdmin.telefono} onChange={e=>{setInfoNuevoAdmin({...infoNuevoAdmin,telefono: e.target.telefono})}} /></td>
                    <td><input name='estado' className="inputsTabla" type="text" value={infoNuevoAdmin.producto} onChange={e=>{setInfoNuevoAdmin({...infoNuevoAdmin,producto: e.target.producto})}} /></td>
                </>
             )  : (
                    <>
                        <td>{admin.nombre}</td>
                        <td>{admin.documento}</td>
                        <td>{admin.rol}</td>
                        <td>{admin.estado}</td>
                    </>
                )
            }
            <td>
                <div className="iconos">
                    {editar ? (
                        <i onClick={() => {actualizarAdmin(); setEditar(false)}} id="check" className="fas fa-check"></i>
                    ):(
                        <i onClick={() => {setEditar(!editar)}} id="pencil" className="fas fa-pencil-alt"></i>
                    )}
                    <i onClick={() => {eliminarAdmin()}} id="trashCan" className="fas fa-trash"></i>
                </div>
            </td>
        </tr>
    );
}

export default Admin;

