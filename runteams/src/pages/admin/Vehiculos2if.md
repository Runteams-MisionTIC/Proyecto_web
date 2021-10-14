import React, { useEffect, useState } from "react";
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
        <FormularioCreacionProductos funcionParaMostrarLaTabla={setMostrarTabla} 
        listaProductos={productos}
        funcionParaAgregarUnProducto={setProductos} />
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
  
  funcionParaMostrarLaTabla,
  listaProductos,
  funcionParaAgregarUnProducto, 
}) => {
  const [id, setId] = useState();
  const [nombre, setNombre] = useState("");
  const [valor, setValor] = useState("");
  const [stock, setStock] = useState("");

  const enviarAlBackend = () => {
    console.log("id", id, "nombre", nombre, "valor", valor, "stock", stock);
    if(id==null || nombre==null || valor==null || stock==null){

      toast.error('Ingrese los datos solicitados')
    }
    else{
      toast.success('Producto creado con éxito');
      funcionParaMostrarLaTabla(true);
      funcionParaAgregarUnProducto([...listaProductos, 
      {id:id, nombre:nombre,valor:valor, stock:stock}
    ]);
    }


  };

  return (
    <div className="flex flex-col items-center justify-center">
      <h2 className="text-2xl font-extra-bold text-gray-1000 p-4">
        Crear un nuevo producto
      </h2>
      <form className="flex flex-col ">
        <label className="flex flex-col items-center" htmlFor="id">
          Id
          <input
            name="id"
            className="bg-gray-50 border  border-gray-600 p-2 rounded-lg m-2"
            type="number"
            min={1}
            placeholder="id"
            value={id} 
            onChange={(e) => {
              setId(e.target.value);
            }}
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
            value={nombre} 
            onChange={(e) => {
              setNombre(e.target.value);
            }}
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
            value={valor} 
            onChange={(e) => {
              setValor(e.target.value);
            }}
            required
          />
        </label>

        <label className="flex flex-col items-center" htmlFor="stock">
          Stock
          <input
            name="stock"
            className="bg-gray-50 border border-gray-600 p-2 rounded-lg m-2"
            type="number  "
            placeholder="stock"
            value={stock} 
            onChange={(e) => {
              setStock(e.target.value);
            }}
            required
          />
        </label>
        <button
          type="submit"
          className="m-4 col-span-2 bg-blue-400 p-2 rounded-lg shadow-sd hover:bg-blue-600 text-white"
          onClick={() =>{enviarAlBackend();
          }}
        >
          Guardar Producto{" "}
        </button>
      </form>
    </div>
  );
};

export default Productos;