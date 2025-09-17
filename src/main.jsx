import React from 'react'
import ReactDOM from 'react-dom/client'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Projects from './components/Project'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Experience from './components/Experience'
import Education from './components/Education'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar/>
      <main>
        <Home />
        <About />
        <Education />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
      </main>
  </React.StrictMode>,
)