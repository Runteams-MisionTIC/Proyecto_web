import React, { useEffect, useState } from "react"

//Formulario que muestre mensaje que pida edad y diga si usuario es mayor de edad

const Vehiculos = () => {
  
  const [nombreVehiculo, setNombreVehiculo] = useState(""); 

    useEffect(() =>{
      console.log('Funcion primera vez al renderizar');
    }, []);

    useEffect(()=> {
      console.log('Variable xxx') 
      console.log('El valor de la variable es:', nombreVehiculo)
    }, [nombreVehiculo]);

    const enviarDatosAlBackend = () =>{
      console.log('El valor de la variable nombre vehiculo es; ', nombreVehiculo);}

      
    return (

    <form className="flex flex-col">
      <h2>Formulario de creación de vehiculos</h2>

      <input onChange={(e) => {setNombreVehiculo(e.target.value)}} type='text' placeholder='Nombre' />
      <input onChange={(e) => {console.log(e.target.value)}} type="text" placeholder= "marca"/>
      <input onChange={(e) => {console.log(e.target.value)}} type="text" placeholder= "modelo"/>
      <button type= 'button' onClick={enviarDatosAlBackend} className='bg-indigo-500 text-white'>Envirar Datos</button>
    </form>
  )
}

export default Vehiculos