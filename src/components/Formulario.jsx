import { useEffect, useState } from "react"

const Formulario = ({agregarUsuario, usuarioAEditar, setUsuarioAEditar}) => { // props = { agregarUsuario }

   const formInicial = {
    id: null,
    nombre: '',
    apellido: '',
    edad: '',
    color:''
   }

   // useEffect(callback, [<referencias>])
   useEffect(() => {
        console.log('Cambió el usuario a editar')
        usuarioAEditar ? setForm(usuarioAEditar): setForm(formInicial)
   }, [usuarioAEditar])
   

   console.log(usuarioAEditar)
   
   const [form, setForm] = useState(formInicial)

   //console.log(form)


   const handleChange = e => { // Evento -> e -> evt -> evento -> event
    console.log(e.target.name)
    console.log(e.target.value)
    // debugger

    /* const obj = {
        ...form, // Spread Operator (Todo lo que tenía el form),
        [e.target.name]: e.target.value,
    }

    setForm(obj) */

    setForm({
        ...form, // Spread Operator (Todo lo que tenía el form),
        [e.target.name]: e.target.value,
    })

   }

   const handleSubmit = e => {
    e.preventDefault() // Detiene el comportamiento por defecto de los formulario
    console.log('Enviando la información')
    agregarUsuario(form)
    //console.log(form)
    handleReset()
   }

   const handleReset = () => {
    setForm(formInicial)
    setUsuarioAEditar(null)
   }

  return (
    <>
        <h2>Formulario de carga/edición</h2>
        <form className="w-75 border border-danger rounded-3 p-4" onSubmit={handleSubmit}>
            {/* Campo Nombre */}
            <div className="mb-3">
                <label htmlFor="lbl-nombre" className="form-label">Nombre</label>
                <input 
                    type="text" 
                    className="form-control" 
                    id="lbl-nombre" 
                    name="nombre" 
                    placeholder="Ingrese el nombre"
                    value={form.nombre}
                    onChange={handleChange}
                />
            </div>
            {/* Campo Categoría */}
            <div className="mb-3">
                <label htmlFor="lbl-apellido" className="form-label">Apellido</label>
                <input 
                    type="text" 
                    className="form-control" 
                    id="lbl-apellido" 
                    name="apellido" 
                    placeholder="Ingrese el Apellido"
                    value={form.apellido}
                    onChange={handleChange}
                />
            </div>
            {/* Campo Precio */}
            <div className="mb-3">
                <label htmlFor="lbl-edad" className="form-label">Edad</label>
                <input 
                    type="text" 
                    className="form-control" 
                    id="lbl-edad" 
                    name="edad" 
                    placeholder="Ingrese la edad"
                    value={form.edad}
                    onChange={handleChange}
                />
            </div>
            {/* Campo Color */}
            <div className="mb-3">
                <label htmlFor="lbl-color" className="form-label">Color</label>
                <input 
                    type="text" 
                    className="form-control" 
                    id="lbl-color" 
                    name="color" 
                    placeholder="Ingrese el color"
                    value={form.color}
                    onChange={handleChange}
                />
            </div>
            
            <button type="submit" className="btn btn-dark me-2">Enviar</button>
            <button type="reset" className="btn btn-danger" onClick={handleReset}>Resetear</button>
        </form>
    </>
  )
}

export default Formulario