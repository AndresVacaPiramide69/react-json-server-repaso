import { useOutletContext } from "react-router";
import Task from "./Task/Task";
import { useState } from "react";

export default function Tasks() {
//   const { user, setUser } = useOutletContext();
  const { tarea, setTareas } = useOutletContext();
  const [nombre, setNombre] = useState("");

  const handleOnClick = (e) => {
    e.preventDefault();

    if (nombre.trim() === "") {
      alert("No se vale tener campos vacios");
    }
  };

  return (
    <>
      <div className="flex gap-5 justify-center mb-5">
        <input
          className="input input-primary"
          name="name"
          placeholder="nombre de la tearea"
          onChange={(e) => {
            setNombre(e.target.value);
          }}
        />
        <button className="btn btn-primary" onClick={handleOnClick}>
          Crear
        </button>
      </div>

      <div className="flex justify-center gap-5">
        <ul className="list-disc">
          {tarea.map((t) => {
            return <Task tarea={t} key={t.id} tareas={tarea} setTareas={setTareas}/>;
          })}
        </ul>
      </div>
    </>
  );
}
