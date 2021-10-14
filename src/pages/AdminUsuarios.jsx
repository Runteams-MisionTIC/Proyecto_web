import React, {useState, useEffect, useRef} from 'react';
import '../styles/AdminU.css';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

const adminBackend = [
    {
        nombre:"Juan",
        documento:"1010101",
        rol:"administrador",
        estado:"autorizado"
    },
    {
        nombre:"Orlando",
        documento:"1010101",
        rol:"administrador",
        estado:"no autorizado"
    },
    {
        nombre:"Sebastian",
        documento:"1010101",
        rol:"vendedor",
        estado:"no autorizado"
    },
    {
        nombre:"Yinare",
        documento:"1010101",
        rol:"vendedor",
        estado:"autorizado"
    },
    {
        nombre:"Nicolas",
        documento:"1010101",
        rol:"administrador",
        estado:"pendiente"
    }
]

const Admin = () => {
    

    const [mostrarTabla, setMostrarTabla] = useState(true);
    const [textoBoton, setTextoBoton] = useState("Nuevo usuario")
    const [admin, setAdmin] = useState([])

    useEffect(() => {
        //Obtener lista de usuarios
        setAdmin(adminBackend)
    },[])

    useEffect(() => {
        if (mostrarTabla === false) {
            setTextoBoton("Mostrar tabla")
        }else{
            setTextoBoton("Nuevo usuario")
        }
    },[mostrarTabla])

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

    const enviarBackend = (e) => {
        e.preventDefault();
        const fd = new FormData(form.current);
        const nuevoAdmin = {};
        fd.forEach((value, key) => nuevoAdmin[key] = value);
        console.log(nuevoAdmin)
        
        toast.success('El usuario ha sido agregado exitosamente');
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

const TablaAdmin = ({listaAdmin}) => {
    return(
        <section className="contenedor-principal">
            <table>
                <thead>
                    <tr>
                        <th>Nombre usuario</th>
                        <th>Documento</th>
                        <th>Rol</th>
                        <th>Estado</th>
                    </tr>
                </thead>
                <tbody>
                    {listaAdmin.map((admin)=>{
                        return(
                            <tr>
                                <td>{admin.nombre}</td>
                                <td>{admin.documento}</td>
                                <td>{admin.rol}</td>
                                <td>{admin.estado}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
            <button className="admin">Buscar</button>
            <button className="admin">Deshabilitar</button>
            <button className="admin">Editar</button>
        </section>
    );
}

export default Admin;
