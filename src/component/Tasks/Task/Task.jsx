import { useState } from "react";
import { updateTareas } from "../../../services/tasks.service";

export default function Task({ tarea, tareas, setTareas }) {
  const [isEditing, setIsEditing] = useState(false);
  const [nuevoNombre, setNuevoNombre] = useState("");

  const handleOnClickGuardar = async() => {
    if (!nuevoNombre.trim()) {
      alert("Campo vacio");
      return;
    }
    setTareas(
      tareas.map((t) =>
        t.id === tarea.id
          ? {
              ...t,
              name: nuevoNombre,
            }
          : t
      )
    );
    setIsEditing(false);
    setNuevoNombre("");
    await updateTareas(tareas)
  };

  const handleOnChange = (e) => {
    setNuevoNombre(e.target.value);
  };

  return (
    <li key={tarea.id}>
      <p>{tarea.id}</p>
      <div className="flex justify-center gap-10">
        {isEditing ? (
          <>
            <input
              type="text"
              onChange={handleOnChange}
              name="name"
              placeholder="edita el nombre"
            />
            <button className="btn btn-primary" onClick={handleOnClickGuardar}>
              Guardar
            </button>
          </>
        ) : (
          <>
            <p>{tarea.name}</p>
            <button
              onClick={() => setIsEditing(true)}
              className="btn btn-primary"
            >
              Editar
            </button>
          </>
        )}
      </div>
    </li>
  );
}
