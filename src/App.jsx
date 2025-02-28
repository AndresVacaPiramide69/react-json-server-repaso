import { useState } from 'react'
import { Outlet } from 'react-router'
import './App.css'

function App() {
  const [user, setUser] = useState({})
  return (
    <>
      <Outlet context={{user, setUser}}/>
    </>
  )
}

export default App
