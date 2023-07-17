// import { useState } from 'react'
import logo from '/favicon.png'
import './App.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import roma from '/roma.png';
import toledo from '/toledo.jpg';
import salamanca from '/salamanca.jpg';
import uganda from '/uganda-forever.jpg';

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

const Navbar = () => {
  return (
  <>
    <div className='d-flex py-2 px-3 border border-danger justify-content-between align-items-center'>
      <div className='d-flex justify-content-between align-items-center'>
        <img  className='mx-2' src={logo} alt="logo :)" width={40} />
        <h2 className='mx-2' >Blog</h2>
      </div>
      <ul className='d-flex align-items-center m-0' style={{listStyleType: 'none', paddingLeft: 0}}>
        <li className='d-inline-block mx-3'><a href='#'>Link 1</a></li>
        <li className='d-inline-block mx-3'><a href='#'>Link 2</a></li>
        <li className='d-inline-block mx-3'><a href='#'>Link 3</a></li>
        <li className='d-inline-block mx-3'><a href='#'>Link 4</a></li>
        <li className='d-inline-block mx-3'><a href='#'>Link 5</a></li>
      </ul>
    </div> 
  </>
)}
const Hero = () => {
  // Fuente: https://mdbootstrap.com/docs/react/extended/hero/
  return (
  <>
  <div
    className='p-0 text-center bg-image'
    style={{ backgroundImage: "url('https://mdbootstrap.com/img/new/slides/041.webp')", height: 400 }}
      >
      <div className='mask' style={{ height: '100%', width: '100%', backgroundColor: 'rgba(0, 0, 0, 0.45)' }}>
        <div className='d-flex justify-content-center align-items-center h-100'>
          <div className='text-white'>
            <h1 className='mb-3'>Heading</h1>
            <h4 className='mb-3'>Subheading</h4>
            <a className='btn btn-outline-light btn-lg' href='#!' role='button'>
              Call to action
            </a>
          </div>
        </div>
      </div>
  </div> 
  </>
)}

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
const Footer = () => {
  // Fuente: https://mdbootstrap.com/docs/standard/navigation/footer#subsection-links
  return (
  <>
  <div className='border border-danger'>
  <footer  className="text-center text-lg-start" style={{backgroundColor: "rgba(0, 0, 0, 0.1)"}}>
  
  <div  className="container py-4" >
    <div  className="row"> 
      <div  className="col-lg-3 col-md-6 mb-4 mb-md-0">
        <h5  className="text-uppercase">Col 1</h5>
        <ul  className="list-unstyled mb-0">
          <li>
            <a href="#!"  className="text-dark">Link 1</a>
          </li>
          <li>
            <a href="#!"  className="text-dark">Link 2</a>
          </li>
          <li>
            <a href="#!"  className="text-dark">Link 3</a>
          </li>
          <li>
            <a href="#!"  className="text-dark">Link 4</a>
          </li>
        </ul>
      </div>
       
      <div  className="col-lg-3 col-md-6 mb-4 mb-md-0">
        <h5  className="text-uppercase mb-0">Col 2</h5>
        <ul  className="list-unstyled">
          <li>
            <a href="#!"  className="text-dark">Link 1</a>
          </li>
          <li>
            <a href="#!"  className="text-dark">Link 2</a>
          </li>
          <li>
            <a href="#!"  className="text-dark">Link 3</a>
          </li>
          <li>
            <a href="#!"  className="text-dark">Link 4</a>
          </li>
        </ul>
      </div>
    
      <div  className="col-lg-3 col-md-6 mb-4 mb-md-0">
        <h5  className="text-uppercase">Col 3</h5>
        <ul  className="list-unstyled mb-0">
          <li>
            <a href="#!"  className="text-dark">Link 1</a>
          </li>
          <li>
            <a href="#!"  className="text-dark">Link 2</a>
          </li>
          <li>
            <a href="#!"  className="text-dark">Link 3</a>
          </li>
          <li>
            <a href="#!"  className="text-dark">Link 4</a>
          </li>
        </ul>
      </div>
    
      <div  className="col-lg-3 col-md-6 mb-4 mb-md-0">
        <h5  className="text-uppercase mb-0">Col 4</h5>
        <ul  className="list-unstyled">
          <li>
            <a href="#!"  className="text-dark">Link 1</a>
          </li>
          <li>
            <a href="#!"  className="text-dark">Link 2</a>
          </li>
          <li>
            <a href="#!"  className="text-dark">Link 3</a>
          </li>
          <li>
            <a href="#!"  className="text-dark">Link 4</a>
          </li>
        </ul>
      </div>
    </div> 
  </div>

  <div  className="text-center p-3" style={{backgroundColor: "rgba(0, 0, 0, 0.2)"}}>
    © 2023 Copyright:&nbsp;
    <a  className="text-dark" href="#!">MiBlog.com</a>
  </div>
  
</footer> 
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
