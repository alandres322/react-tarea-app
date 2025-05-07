import { useState, useContext } from "react";
import { ContextoTarea } from "../Contexto/ContextoTarea";

function FormTareas() {
  const [titulo, setTitulo] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const { crearTarea } = useContext(ContextoTarea);

  const enviarForm = (e) => {
    e.preventDefault();
    crearTarea({
      titulo,
      descripcion,
    });

    setTitulo("");
    setDescripcion("");
  };

  return (
    <div className="max-w-md mx-auto">
      <form onSubmit={enviarForm} className="bg-blue-950 p-13 mb-6">
        <h1 className="text-3xl font-bold text-white mb-10 text-center" >Crea tu tarea</h1>
        <input
          placeholder="Escriba su tarea"
          onChange={(e) => setTitulo(e.target.value)}
          value={titulo}
          className="bg-amber-100 p-1 w-full mb-3"
          autoFocus
        />
        <textarea
          placeholder="Escriba la descripcion de la tarea"
          onChange={(e) => setDescripcion(e.target.value)}
          className="bg-amber-100 p-1 w-full mb-3"
          value={descripcion}
        ></textarea>

        <button
        className="bg-amber-950 px-3 rounded-2xl py-3 mt-5 hover:bg-amber-700 text-white"
        >Guardar</button>
      </form>
    </div>
  );
}

export default FormTareas;
