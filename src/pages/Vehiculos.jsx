import React, { useEffect, useState, useRef } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';
import { nanoid } from 'nanoid';
import 'react-toastify/dist/ReactToastify.css';
import '../styles/ventas.css'

const Vehiculos = () => {
  const [mostrarTabla, setMostrarTabla] = useState(true);
  const [ventas, setVentas] = useState([]);
  const [textoBoton, setTextoBoton] = useState('Crear Nuevo Vehículo');
  const [ejecutarConsulta, setEjecutarConsulta] = useState(true);

  const obtenerVentas = async () => {
    const options = { method: 'GET', url: 'http://localhost:2999/venta/' };
    await axios.request(options).then(function (response) {
        setVentas(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
    setEjecutarConsulta(false);
  };

  useEffect(() => {
    console.log('consulta', ejecutarConsulta);
    if (ejecutarConsulta) {
      obtenerVentas();
    }
  }, [ejecutarConsulta]);

  useEffect(() => {
    //obtener lista de vehículos desde el backend
    if (mostrarTabla) {
      setEjecutarConsulta(true);
    }
  }, [mostrarTabla]);

  useEffect(() => {
    if (mostrarTabla) {
      setTextoBoton('Crear Nuevo Vehículo');
      setColorBoton('indigo');
    } else {
      setTextoBoton('Mostrar Todos los vehículos');
      setColorBoton('green');
    }
  }, [mostrarTabla]);
  return (
    <div className='flex h-full w-full flex-col items-center justify-start p-8'>
      <div className='flex flex-col w-full'>
        <h2 className='text-3xl font-extrabold text-gray-900'>
          Página de administración de vehículos
        </h2>
        <button onClick={() => {setMostrarTabla(!mostrarTabla)}}>{textoBoton}</button>
      </div>
      {mostrarTabla ? (
        <TablaVehiculos listaVehiculos={ventas} setEjecutarConsulta={setEjecutarConsulta} />
      ) : (
        <FormularioCreacionVehiculos
          setMostrarTabla={setMostrarTabla}
          listaVehiculos={ventas}
          setVentas={setVentas}
        />
      )}
      <ToastContainer position='bottom-center' autoClose={5000} />
    </div>
  );
};

const TablaVehiculos = ({ listaVehiculos, setEjecutarConsulta }) => {
  useEffect(() => {
    console.log('este es el listado de ventas en el componente de tabla', listaVehiculos);
  }, [listaVehiculos]);

  return (
    <div className='flex flex-col items-center justify-center w-full'>
      <h2 className='text-2xl font-extrabold text-gray-800'>Todos los vehículos</h2>
      <table className='tabla'>
        <thead>
          <tr>
            <th>Nombre del vehículo</th>
            <th>Marca del vehículo</th>
            <th>Modelo del vehículo</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {listaVehiculos.map((vehiculo) => {
            return (
              <FilaVehiculo
                key={nanoid()}
                vehiculo={vehiculo}
                setEjecutarConsulta={setEjecutarConsulta}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

const FilaVehiculo = ({ vehiculo, setEjecutarConsulta }) => {
  const [edit, setEdit] = useState(false);
  const [infoNuevoVehiculo, setInfoNuevoVehiculo] = useState({
    name: vehiculo.name,
    brand: vehiculo.brand,
    model: vehiculo.model,
  });

  const actualizarVehiculo = async () => {
    console.log(infoNuevoVehiculo);
    //enviar la info al backend
    const options = {
      method: 'PATCH',
      url: 'https://vast-waters-45728.herokuapp.com/vehicle/update/',
      headers: { 'Content-Type': 'application/json' },
      data: { ...infoNuevoVehiculo, id: vehiculo._id },
    };

    await axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        toast.success('Vehículo modificado con éxito');
        setEdit(false);
        setEjecutarConsulta(true);
      })
      .catch(function (error) {
        toast.error('Error modificando el vehículo');
        console.error(error);
      });
  };

  const eliminarVehiculo = async () => {
    const options = {
      method: 'DELETE',
      url: 'https://vast-waters-45728.herokuapp.com/vehicle/delete/',
      headers: { 'Content-Type': 'application/json' },
      data: { id: vehiculo._id },
    };

    await axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        toast.success('vehículo eliminado con éxito');
        setEjecutarConsulta(true);
      })
      .catch(function (error) {
        console.error(error);
        toast.error('Error eliminando el vehículo');
      });
  };

  return (
    <tr>
      {edit ? (
        <>
          <td>
            <input
              className='bg-gray-50 border border-gray-600 p-2 rounded-lg m-2'
              type='text'
              value={infoNuevoVehiculo.name}
              onChange={(e) => setInfoNuevoVehiculo({ ...infoNuevoVehiculo, name: e.target.value })}
            />
          </td>
          <td>
            <input
              className='bg-gray-50 border border-gray-600 p-2 rounded-lg m-2'
              type='text'
              value={infoNuevoVehiculo.brand}
              onChange={(e) =>
                setInfoNuevoVehiculo({ ...infoNuevoVehiculo, brand: e.target.value })
              }
            />
          </td>
          <td>
            <input
              className='bg-gray-50 border border-gray-600 p-2 rounded-lg m-2'
              type='text'
              value={infoNuevoVehiculo.model}
              onChange={(e) =>
                setInfoNuevoVehiculo({ ...infoNuevoVehiculo, model: e.target.value })
              }
            />
          </td>
        </>
      ) : (
        <>
          <td>{vehiculo.name}</td>
          <td>{vehiculo.brand}</td>
          <td>{vehiculo.model}</td>
        </>
      )}
      <td>
        <div className='flex w-full justify-around'>
          {edit ? (
            <i
              onClick={() => actualizarVehiculo()}
              className='fas fa-check text-green-700 hover:text-green-500'
            />
          ) : (
            <i
              onClick={() => setEdit(!edit)}
              className='fas fa-pencil-alt text-yellow-700 hover:text-yellow-500'
            />
          )}
          <i
            onClick={() => eliminarVehiculo()}
            className='fas fa-trash text-red-700 hover:text-red-500'
          />
        </div>
      </td>
    </tr>
  );
};

const FormularioCreacionVehiculos = ({ setMostrarTabla, listaVehiculos, setVentas }) => {
  const form = useRef(null);

  const submitForm = async (e) => {
    e.preventDefault();
    const fd = new FormData(form.current);

    const nuevoVehiculo = {};
    fd.forEach((value, key) => {
      nuevoVehiculo[key] = value;
    });

    const options = {
      method: 'POST',
      url: 'https://vast-waters-45728.herokuapp.com/vehicle/create',
      headers: { 'Content-Type': 'application/json' },
      data: { name: nuevoVehiculo.name, brand: nuevoVehiculo.brand, model: nuevoVehiculo.model },
    };

    await axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        toast.success('Vehículo agregado con éxito');
      })
      .catch(function (error) {
        console.error(error);
        toast.error('Error creando un vehículo');
      });

    setMostrarTabla(true);
  };

  return (
    <div className='flex flex-col items-center justify-center'>
      <h2 className='text-2xl font-extrabold text-gray-800'>Crear nuevo vehículo</h2>
      <form ref={form} onSubmit={submitForm} className='flex flex-col'>
        <label className='flex flex-col' htmlFor='nombre'>
          Nombre del vehículo
          <input
            name='name'
            className='bg-gray-50 border border-gray-600 p-2 rounded-lg m-2'
            type='text'
            placeholder='Corolla'
            required
          />
        </label>
        <label className='flex flex-col' htmlFor='marca'>
          Marca del vehículo
          <select
            className='bg-gray-50 border border-gray-600 p-2 rounded-lg m-2'
            name='brand'
            required
            defaultValue={0}
          >
            <option disabled value={0}>
              Seleccione una opción
            </option>
            <option>Renault</option>
            <option>Toyota</option>
            <option>Ford</option>
            <option>Mazda</option>
            <option>Chevrolet</option>
          </select>
        </label>
        <label className='flex flex-col' htmlFor='modelo'>
          Modelo del vehículo
          <input
            name='model'
            className='bg-gray-50 border border-gray-600 p-2 rounded-lg m-2'
            type='number'
            min={1992}
            max={2022}
            placeholder='2014'
            required
          />
        </label>

        <button
          type='submit'
          className='col-span-2 bg-green-400 p-2 rounded-full shadow-md hover:bg-green-600 text-white'
        >
          Guardar vehiculo
        </button>
      </form>
    </div>
  );
};

export default Vehiculos;