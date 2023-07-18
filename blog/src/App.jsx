// import { useState } from 'react'

import './assets/css/App.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import roma from '/roma.png';
import toledo from '/toledo.jpg';
import salamanca from '/salamanca.jpg';
import uganda from '/uganda-forever.jpg';

// Componentes
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
// import { algo } from './components/Footer';
// Header + Navbar
// PostContainer
  // Posts
// Home

const Home = () => {
  return (
  <>
  <div id="home" className=''>
    <header>
      <Navbar />
    </header>
    <main>
      <Hero />
      <PostContainer title="Últimos Posts" />
      <PostContainer title="Guías" />
      <PostContainer title="Consejos" />
      <Footer />
    </main>
  </div>
  </>
)};

const Post = (props) => {
  const {title, subtitle, img} = props
  return(
  <>
  <div className='col'>
    <Card 
    // style={{ width: '15rem' }}
    >
    {/* TODO: colocar un condicional (ternario) para que si no tengo img, coloque una por defecto */}
    <Card.Img variant="top" src={img} />
    <Card.Body>
      {title && <Card.Title>{title}</Card.Title>}
      {subtitle && <Card.Text>
      {subtitle}
      </Card.Text>}
      <Button variant="primary">Click</Button>
    </Card.Body>
    </Card>
  </div>
  </>
)}

const PostContainer = (props) => {
  const {title} = props
  return (
  <>
  <div className='container py-3'>
    {title && <h2>{title}</h2>}
    <div className='row g-3 py-0'>
    {/* Idea: Crear un componente <Post id="1" seoTitle="lorem" descripcion="seo" variant=""> */}
    <Post title="Viaje a Roma" subtitle="Pizzas al mejor precio" img={roma}/>
    <Post title="Viaje a Toledo" subtitle="Toletum y buen acero" img={toledo}/>
    <Post title="Viaje a Salamanca" subtitle="Hay ranas" img={salamanca}/>
    <Post title="Viaje a Uganda" subtitle="Hay gente y no nieva (por ahora)" img={uganda}/>
    </div>
  </div>
  </>
)}

function App() {

  return (
    <>
      <Home />
    </>
  )
}

export default App
