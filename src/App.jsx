import { useEffect, useState } from 'react'
import { Outlet } from 'react-router'
import './App.css'
import { loadSession } from './services/user.service'
import { getTareasUser } from './services/tasks.service';

function App() {
  const [user, setUser] = useState(loadSession());
  const [tarea, setTareas] = useState([])


  const fetchTareas = async() => {

    if(user){
      setTareas(await getTareasUser(user))
    }
  }
  
  useEffect(() => {
    fetchTareas();
  }, [])
  return (
    <>
      <Outlet context={{user, setUser, tarea, setTareas}}/>
    </>
  )
}

export default App
