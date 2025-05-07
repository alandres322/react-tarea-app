import TareaTarjeta from "./TareaTarjeta";
import { useContext } from "react";
import { ContextoTarea } from "../Contexto/ContextoTarea";

function ListaTareas() {
  const { tareas } = useContext(ContextoTarea);

  if (tareas.length === 0) {
    return <h1 className="text-4xl text-black text-center font-bold">No existe tareas aun</h1>;
  }

  return (
    <div className="grid grid-cols-4 gap-3">
      {tareas.map((tarea) => (
        <TareaTarjeta key={tarea.id} tarea={tarea} />
      ))}
    </div>
  );
}

export default ListaTareas;
