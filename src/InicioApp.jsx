import { useState } from "react"
import Formulario from "./components/Formulario"
import Tabla from "./components/Tabla"
import usuarios from './constants/usuarios'
import { v4 as uuidv4 } from 'uuid';

/* CONTENEDOR */
const InicioApp = () => {
  
  const [users, setUsers] = useState(usuarios) // <= array
  console.log(users)
  const [usuarioAEditar, setUsuarioAEditar] = useState(null)

  const agregarUsuario = (usuario) => {
    usuario.id = uuidv4()
    console.log('Agregando el usuario al array...', usuario)

    const nuevoEstadousuarios = [...usuarios, usuario]
    //console.log(nuevoEstadousuarios)
    setUsers(nuevoEstadousuarios) // Le aviso a react que cambie el estado.
  }

  const eliminarUsuario = (id) => { // Para poder eliminar un producto -> Necesito un identificador
    //console.log('Recibí el id: ', id)
    //const nuevoEstadoProductos = products.filter(prod => prod.id !== id)
    const nuevoEstadoUsuarios = users.filter(function(user) {
      //debugger
      if ( user.id !== id ) {
        return user
      } else {
        console.log(user, '----> Producto que se va a eliminar', id)
      }
    })
    console.log(nuevoEstadoUsuarios)
    setUsers(nuevoEstadoUsuarios) // Cambio el estado. Le aviso a react que tiene que volver a dibujar los componentes involucrados
  }

  return (
    <div className="container">
      <Formulario 
        agregarUsuario={agregarUsuario}
        usuarioAEditar={usuarioAEditar}
        setUsuarioAEditar={setUsuarioAEditar}
      />
      <Tabla 
        users={users} 
        eliminarUsuario={eliminarUsuario}
        setUsuarioAEditar={setUsuarioAEditar}
      />
    </div>
  )
}

export default InicioApp