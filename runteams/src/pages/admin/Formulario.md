import React, { useEffect, useState } from "react"

const productosBackend = [
  {
    id_producto:124,
    nombre_producto:"Pantaloneta niño",
    valor_producto:25000,
    stock_producto:7
  },
  {
    id_producto:125,
    nombre_producto:"Pantaloneta niña",
    valor_producto:28000,
    stock_producto:17
  },
  {
    id_producto:126,
    nombre_producto:"Pantaloneta adulto",
    valor_producto:29000,
    stock_producto:27
  },
  {
    id_producto:127,
    nombre_producto:"camiseta mujer",
    valor_producto:35000,
    stock_producto:15,
  },   
  {
    id_producto:128,
    nombre_producto:"camiseta polo",
    valor_producto:135000,
    stock_producto:4,
  },     
];

const Productos = () => {
  const [mostrarTabla, setMostrarTabla] = useState(true);
  const [productos, setProductos] = useState([]);
  const [textoBoton, setTextoBoton] = useState('Crear Nuevo producto');


  useEffect(()=> {
    //traer productos desde el backend
    setProductos(productosBackend);
  }, []);

  useEffect(() => {
    if(mostrarTabla){
      setTextoBoton('Crear Nuevo Producto')

    }else{
      setTextoBoton("Mostrar todos los productos");
    }
  },[mostrarTabla]);

 return(
   <div className= "flex h-full w-full flex-col items-center justify-start p-8">
     <div className= 'flex flex-col'>
      <h2 className="text-3xl font-extrabold text-gray-1000 p-5">Maestro productos</h2>
     </div>
    
     <button 
      onClick={() => { 
       setMostrarTabla(!mostrarTabla);
       }}
     className= ' text-white bg-blue-400 p-5 shadow-sd hover:bg-blue-600 m-6 w-28 self-end rounded-full' 
     >
       {textoBoton}
     </button>
     {mostrarTabla ? (
       <TablaProductos listaProductos={productos} />
     )  : (
      <FormularioCreacionProductos />
     )}     
   </div>
 );
};


const TablaProductos = ({ listaProductos }) => {
  useEffect(() => {
    console.log('Este es el listado  de productos en la tabla', listaProductos);
  },[listaProductos]);

  
return(
  
  
  <div className="flex h-full w-full flex-col items-center justify-start p-2">
     <h2 className="text-2xl font-extrabold text-gray-1000" >Lista de Productos</h2>
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
          return(
            <tr>
              <td>{producto.id_producto}</td>
              <td>{producto.nombre_producto}</td>
              <td>{producto.valor_producto}</td>
              <td>{producto.stock_producto}</td>  
            </tr>
          );
        })}       
      </tbody>
  </table>
  </div>   
  
  </div>   
  );
};
const FormularioCreacionProductos = () => {
  return <div className= 'flex flex-col items-center'>
    <h2 className= 'text-2xl font extra-bold text-gray-1000 p-4'>Crear un nuevo producto</h2>
    <form className= 'grid grid-cols-4'>
      <input className='bg-gray-50 border border-gray-600 p-2 rounded-lg m-1' type="text" />
      <input className='bg-gray-50 border border-gray-600 p-2 rounded-lg m-1' type="text" />
      <input className='bg-gray-50 border border-gray-600 p-2 rounded-lg m-1'type="text" />
      <input className='bg-gray-50 border border-gray-600 p-2 rounded-lg m-1'type="text" />
    </form>
      <button className='m-4 col-span-2 bg-blue-400 p-2 rounded-lg shadow-sd hover:bg-blue-600 text-white'>Guardar Producto </button>
  </div>;
  };
export default Productos;
