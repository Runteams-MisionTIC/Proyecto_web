import React, { useEffect, useState, useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const productosBackend = [
  {
    id: 124,
    nombre: "Pantaloneta niño",
    valor: 25000,
    stock: 7,
  },
  {
    id: 125,
    nombre: "Pantaloneta niña",
    valor: 28000,
    stock: 17,
  },
  {
    id: 126,
    nombre: "Pantaloneta adulto",
    valor: 29000,
    stock: 27,
  },
  {
    id: 127,
    nombre: "camiseta mujer",
    valor: 35000,
    stock: 15,
  },
  {
    id: 128,
    nombre: "camiseta fin",
    valor: 135000,
    stock: 4,
  },
];

const Productos = () => {
  const [mostrarTabla, setMostrarTabla] = useState(true);
  const [productos, setProductos] = useState([]);
  const [textoBoton, setTextoBoton] = useState("Crear Nuevo producto");

  useEffect(() => {
    //traer productos desde el backend
    setProductos(productosBackend);
  }, []);

  useEffect(() => {
    if (mostrarTabla) {
      setTextoBoton("Crear Nuevo Producto");
    } else {
      setTextoBoton("Mostrar todos los productos");
    }
  }, [mostrarTabla]);

  return (
    <div className="flex h-full w-full flex-col items-center justify-start p-8">
      <div className="flex flex-col">
        <h2 className="text-3xl font-extrabold text-gray-1000 p-5">
          Maestro productos
        </h2>
      </div>
      <button
        onClick={() => {
          setMostrarTabla(!mostrarTabla);
        }}
        className=" text-white bg-blue-400 p-5 shadow-sd hover:bg-blue-600 m-6 w-28 self-end rounded-full"
      >
        {textoBoton}
      </button>
      {mostrarTabla ? (
        <TablaProductos listaProductos={productos} />
      ) : (
        <FormularioCreacionProductos 
        setMostrarTabla={setMostrarTabla} 
        listaProductos={productos}
        setProductos={setProductos} />
      )}

    <ToastContainer
    position="bottom-center"
    autoClose={5000} />
    </div>
  );
};
const TablaProductos = ({ listaProductos}) => {
  useEffect(() => {
    console.log("Este es el listado  de productos en la tabla", listaProductos);
  }, [listaProductos]);

  return (
    <div className="flex h-full w-full flex-col items-center justify-start p-2">
      <h2 className="text-2xl font-extra-bold text-gray-1000 p-4">
        Lista de Productos
      </h2>
      <div>
        <table>
          <thead>
            <tr className="p-4">
              <th>Id producto</th>
              <th>Nombre producto</th>
              <th>Valor Producto</th>
              <th>Stock</th>
            </tr>
          </thead>
          <tbody>
            {listaProductos.map((producto) => {
              return (
                <tr>
                  <td>{producto.id}</td>
                  <td>{producto.nombre}</td>
                  <td>{producto.valor}</td>
                  <td>{producto.stock}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};
const FormularioCreacionProductos = ({  
  setMostrarTabla,
  listaProductos,
  setProductos, 
}) => {
  const form = useRef(null);

 

  const submitForm = (e)=>{
    e.preventDefault();
    const fd = new FormData(form.current);

    const nuevoProducto = {};
    fd.forEach((value, key) => {
      nuevoProducto[key]=value;
    });
    setMostrarTabla(true);
    toast.success('Producto agregado con éxito');
    setProductos([...listaProductos, nuevoProducto]);
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <h2 className="text-2xl font-extra-bold text-gray-1000 p-4">
        Crear un nuevo producto
      </h2>
      <form ref={form} onSubmit={submitForm} className="flex flex-col ">
        <label className="flex flex-col items-center" htmlFor="id">
          Id
          <input
            name="id"
            className="bg-gray-50 border  border-gray-600 p-2 rounded-lg m-2"
            type="number"
            min={1}
            placeholder="id"
             
            required
          />
        </label>

        <label className="flex flex-col items-center" htmlFor="nombre">
          Nombre
          <input
            name="nombre"
            className="bg-gray-50 border border-gray-600 p-2 rounded-lg m-2"
            type="text"
            placeholder="nombre"
           
            required
          />
        </label>

        <label className="flex flex-col items-center" htmlFor="valor">
          Valor
          <input
            name="valor"
            className="bg-gray-50 border border-gray-600 p-2 rounded-lg m-2"
            type="number"
            min={1}
            placeholder="valor"
           
            required
          />
        </label>

        <label className="flex flex-col items-center" htmlFor="stock">
          Stock
          <input
            name="stock"
            className="bg-gray-50 border border-gray-600 p-2 rounded-lg m-2"
            type="number"
            min={1} 
            placeholder="stock"
             
            required
          />
        </label>
        <button
          type="submit"
          className="m-4 col-span-2 bg-blue-400 p-2 rounded-lg shadow-sd hover:bg-blue-600 text-white">
          Guardar Producto
        </button>
      </form>
    </div>
  );
};

export default Productos;
