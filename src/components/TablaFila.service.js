import Swal from "sweetalert2";

export const notificacionSweet = (nombre, cb) => {

    Swal.fire({
        title: `¿Estás seguro de que queres eliminar el usuario: ${nombre}`,
        text: "Cuidado, usted no podrá revertir esto!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Si, borrar!",
        cancelButtonText: "No, cancelar!",
      }).then((result) => {
        if (result.isConfirmed) {
          cb()
          Swal.fire({
            title: "Usuario Eliminado",
            text: "El usuario fue eliminado con éxito",
            icon: "success"
          });
        }
      });
}

