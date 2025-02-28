import { useState } from 'react'
import { OuteletContex, Outlet } from 'react-router'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [user, setUser] = useState({})
  return (
    <>
      <NavBar/>
      <Outlet context={{user, setUser}}/>
    </>
  )
}

export default App
