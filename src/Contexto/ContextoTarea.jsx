import { createContext, useState, useEffect } from "react";
import { tareas as datos } from "../Datos/tareas";

export const ContextoTarea = createContext();

export function ContexTareaProveedor(propiedades) {
  const [tareas, setTareas] = useState([]);

  function crearTarea(tarea) {
    setTareas([
      ...tareas,
      {
        titulo: tarea.titulo,

        id: tareas.length,
        descripcion: tarea.descripcion,
      },
    ]);
  }

  function eliminarTarea(tareaId) {
    setTareas(tareas.filter((tarea) => tarea.id !== tareaId));
  }

  useEffect(() => {
    setTareas(datos);
  }, []);

  return (
    <ContextoTarea.Provider
      value={{
        tareas,
        eliminarTarea,
        crearTarea,
      }}
    >
      {propiedades.children}
    </ContextoTarea.Provider>
  );
}
