// import { useState } from 'react'

import './assets/css/App.css'
import roma from '/roma.png';
import toledo from '/toledo.jpg';
import salamanca from '/salamanca.jpg';
import uganda from '/uganda-forever.jpg';

// Componentes
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
// import { algo } from './components/Footer';
import PostContainer from './components/PostContainer';
import Post from './components/Post';
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

function App() {

  return (
    <>
      <Home />
    </>
  )
}

export default App
