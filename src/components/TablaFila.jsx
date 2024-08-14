import { notificacionSweet } from "./TablaFila.service";


const TablaFila = ( { users, eliminarUsuario, setUsuarioAEditar } ) => {
    
  console.log(users) // users = {id, nombre, categoria, }

  const handleEliminar = () => {
    
    notificacionSweet(users.nombre, () => {
      eliminaruserso(users.id)
    })

  }

  const handleEditar = (user) => {
    console.log(user)
    setUsuarioAEditar(user)
  }

  return (
    <tr>
      <th scope="row">{users.nombre}</th>
      <td>{users.apellido}</td>
      <td>{users.edad}</td>
      <td>{users.color}</td>
      <td>
        <button className="btn btn-warning me-2" onClick={() => handleEditar(product)}>Editar</button>
        <button className="btn btn-danger" onClick={handleEliminar}>Eliminar</button>
      </td>
    </tr>
  );
};

export default TablaFila;
