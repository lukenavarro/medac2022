import React, { useState } from 'react'

export const Componente = () => {
    const[nombre,setnombre] = useState("");
    
    const cambiarNombre = (nuevoNombre) =>{
        setnombre(nuevoNombre);
    }
    const[apellido,setApellido] = useState("");
    
    const cambpiarApellido = (nuevoApellido) =>{
        setApellido(nuevoApellido);
    }
    
    const[dni,setDni] = useState("");
    
    const cambiarDni = (nuevoDni) =>{
        setDni(nuevoDni);
    }
    const[telefono,setTelefono] = useState("");
    
    const cambiarTelefono = (nuevoTelefono) =>{
        setTelefono(nuevoTelefono);
    }
    
    const[cuentaBancaria,setCuentaBancaria] = useState("");
    
    const cambiarCuentaBancaria = (nuevaCuentaBancaria) =>{
        setCuentaBancaria(nuevaCuentaBancaria);
    }
    
    const[pinSecreto,setPinSecreto] = useState("");
    
    const cambiarPinSecreto = (nuevoPinSecreto) =>{
        setPinSecreto(nuevoPinSecreto);
    }
    const[email,setEmail] = useState("");

    const cambiarEmail = (nuevoEmail) =>{
        setEmail(nuevoEmail);
    }
    
  return (
    <div>
        <form>
            <input placeholder='nombre' type="text" onChange={e =>cambiarNombre(e.target.value)}></input>
            <br></br>
            <input placeholder='apellidos' type="text" onChange={e =>cambpiarApellido(e.target.value)}></input>
            <br></br>
            <input placeholder='DNI' type="text" onChange={e =>cambiarDni(e.target.value)}></input>
            <br></br>
            <input placeholder='Telefono' type="text" onChange={e =>cambiarTelefono(e.target.value)}></input>
            <br></br>
            <input placeholder='Cuenta Bancaria' type="text" onChange={e =>cambiarCuentaBancaria(e.target.value)}></input>
            <br></br>
            <input placeholder='PinSecreto' type="password" onChange={e =>cambiarPinSecreto(e.target.value)}></input>
            <br></br>
            <input placeholder='email' type="text" onChange={e =>cambiarEmail(e.target.value)}></input>
            <br></br>
            <input type="submit"></input>
        </form>
        <ul>
            <li>{nombre}</li>
            <li>{apellido}</li>
            <li>{dni}</li>
            <li>{telefono}</li>
            <li>{cuentaBancaria}</li>
            <li>{pinSecreto}</li>
            <li>{email}</li>
        </ul>
    </div>
  )
}
