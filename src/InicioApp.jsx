import { useState } from "react"
import Formulario from "./components/Formulario"
import Tabla from "./components/Tabla"
import usuarios from './constants/usuarios'
import { v4 as uuidv4 } from 'uuid'; //Librería para generar ID al azar

/* CONTENEDOR */
const InicioApp = () => {
  
  const [users, setUsers] = useState(usuarios) 

  const [usuarioAEditar, setUsuarioAEditar] = useState(null) //Array con el usuario que quiero editar

  //?AGREGAR USUARIO
  const agregarUsuario = (usuario) => {
    usuario.id = uuidv4() //Agrego el ID para el usuario
    console.log('Agregando el usuario nuevo al array...', usuario)
    const nuevoEstadousuarios = [...usuarios, usuario] //Nuevo array con usuario nuevo.
    setUsers(nuevoEstadousuarios) 
  }

  //?ELIMINAR USUARIO
  const eliminarUsuario = (id) => { 
    //Nuevo array para recorrerlo y comparar el ID
    const nuevoEstadoUsuarios = users.filter(function(user) { 
      if ( user.id !== id ) {
        return user
      } else {console.log(user, 'Este es el usuario que se va a eliminar', id)}
    })
    setUsers(nuevoEstadoUsuarios) //Creo el nuevo array sin el usuario borrado.
  }

  //?EDITAR USUARIO

  const editarUsuario = (usuarioEditado) => {
    //console.log( 'Se está editando...' ,usuarioEditado)
    const nuevoEstadoUsuarios = usuarios.map (function(user){
      if (user.id === usuarioEditado.id){
          return usuarioEditado
      } else {
        return user
      }
    })
    setUsers(nuevoEstadoUsuarios)
  }

  return (
    <div className="container">
      <Formulario 
        agregarUsuario={agregarUsuario}
        usuarioAEditar={usuarioAEditar}
        setUsuarioAEditar={setUsuarioAEditar}
        editarUsuario={editarUsuario}
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