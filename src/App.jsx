// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/navbar/Navbar'
import Hero from './components/hero-section/Hero'
import Itberries from './components/itberries_section/Itberries'
import Aboutme from './components/about-section/Aboutme'
import Skills from './components/skills-section/Skills'
import Portfolio from './components/portfolio-section/Portfolio'
import  Grid from './components/grid-section/Grid'
import Contact from './components/contact-section/Contact'
import Footer from './components/footer-section/Footer'
import {BrowserRouter} from 'react-router-dom'
function App() {
  return (
  
   <BrowserRouter>
<div>
   <Navbar/>
   <Hero/>
   <Itberries/>
   <Aboutme/>
   <Skills/>
   <Portfolio/>
   <Grid/>
   <Contact/>
   <Footer/>

   </div>
   </BrowserRouter>
    
  )
}

export default App
