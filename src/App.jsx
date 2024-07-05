import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navproduct from './components/Navproduct'
import Homeproduct from './components/Homeproduct'
import Addproduct from './components/Addproduct'
import { Link, Routes, Route } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navproduct/>
      <Routes>
        <Route path='/' element={<Homeproduct/>}></Route>
        <Route path='/addproduct'element={<Addproduct/>}></Route>
        </Routes>
    </>
  )
}

export default App
