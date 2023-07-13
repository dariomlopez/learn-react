import { useState } from 'react'
import logo from '/favicon.png'
import './App.css'
import Button from 'react-bootstrap/Button';

function App() {
  
  return (
    <>
      <h1>Blog</h1>
      <div className="card text-center">
        <p>¡Bienvenid@ a mi Blog!</p>
        <img src={logo} className="d-inline-block mx-auto" width={150}/>
      </div>
      <div className="mb-2">
      <Button variant="primary">Primary</Button>{' '}
      <Button variant="secondary">Secondary</Button>{' '}
      <Button variant="success">Success</Button>{' '}
      <Button variant="warning">Warning</Button>{' '}
      <Button variant="danger">Danger</Button>{' '}
      <Button variant="info">Info</Button>{' '}
      <Button variant="light">Light</Button>{' '}
      <Button variant="dark">Dark</Button>
      <Button variant="link">Link</Button>
    </div>
    </>
  )
}

export default App
