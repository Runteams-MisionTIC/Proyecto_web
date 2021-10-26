import axios from 'axios'
import { getToken } from './getToken';

export const obtenerProductos = async (setProductos, setEjecutarConsulta = () => { }) => {
    const options = {
        method: 'GET',
        url: 'http://localhost:2999/productos/',
        headers: {
            Authorization: getToken()
        }
    };
    await axios.request(options).then(function (response) {
        setProductos(response.data);
    })
        .catch(function (error) {
            console.error(error);
        });
    setEjecutarConsulta(false);
};


export const obtenerUsuarios = async (setUsuarios, setEjecutarConsulta = () => { }) => {
    const options = {
        method: 'GET',
        url: 'http://localhost:2999/usuarios/',
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