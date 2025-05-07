import { useContext } from "react";
import { ContextoTarea } from "../Contexto/ContextoTarea";

function TareaTarjeta({ tarea }) {
  const { eliminarTarea } = useContext(ContextoTarea);

  return (
    <div className="bg-gray-600  text-white p-5 rounded-2xl">
      <h1 className="text-3xl font-bold capitalize">{tarea.titulo}</h1>
      <p className="text-gray-300 text-sm">{tarea.descripcion}</p>
      <button
        className="bg-amber-950 px-3 rounded-2xl py-3 mt-5 hover:bg-amber-700"
        onClick={() => eliminarTarea(tarea.id)}
      >
        Eliminar Tarea
      </button>
    </div>
  );
}

export default TareaTarjeta;
