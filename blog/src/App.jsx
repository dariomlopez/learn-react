import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Blog</h1>
      <div className="card">
        <p>¡Bienvenid@ a mi Blog!</p>
      </div>
    </>
  )
}

export default App