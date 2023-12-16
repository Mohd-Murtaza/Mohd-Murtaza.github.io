import './App.css'
import Landing from './Sections/Landing'
import About from './Sections/About'
import Education from './Sections/Education'
import Skills from './Sections/Skills'
import Experience from './Sections/Experience'
import Contact from './Sections/Contact'
import ScrollToTop from "react-scroll-to-top";
import Project from './Sections/Project';
import AnimatedCursor from "react-animated-cursor"
import Github from './Sections/Github'


function App() {
  return (
    <>
      <AnimatedCursor 
          innerSize={8}
          outerSize={30}
          innerScale={1}
          outerScale={1.5}
          outerAlpha={0}
          outerStyle={{
            mixBlendMode: 'exclusion',
            background: '#ffffff90',
            opacity: '0.5'
          }}
          innerStyle={{
            mixBlendMode: 'exclusion',
            backgroundColor: 'var(--secondary-color)'
          }}
      />
      <ScrollToTop smooth/>
      <Landing/>
      <About/>
      <Github/>
      <Education/>
      <Skills/>
      <Experience/>
      <Project/>
      <Contact/>
    </>
  )
}

export default App
