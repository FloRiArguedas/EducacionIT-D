import { useState } from "react"
import Formulario from "./components/Formulario"
import Tabla from "./components/Tabla"
import usuarios from './constants/usuarios'
import { v4 as uuidv4 } from 'uuid'; //Librería para generar ID al azar

/* CONTENEDOR */
const InicioApp = () => {
  
  const [users, setUsers] = useState(usuarios) 

  const [usuarioAEditar, setUsuarioAEditar] = useState(null)

  const agregarUsuario = (usuario) => {
    usuario.id = uuidv4() //Agrego el ID para el usuario
    console.log('Agregando el usuario nuevo al array...', usuario)

    const nuevoEstadousuarios = [...usuarios, usuario] //Nuevo array con usuario nuevo.

    setUsers(nuevoEstadousuarios) 
  }

  const eliminarUsuario = (id) => { 

    const nuevoEstadoUsuarios = users.filter(function(user) {

      if ( user.id !== id ) {
        return user
      } else {
        console.log(user, '----> Usuario que se va a eliminar', id)
      }
    })
    console.log(nuevoEstadoUsuarios)
    setUsers(nuevoEstadoUsuarios) 
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