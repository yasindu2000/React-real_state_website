import React from 'react'
import Header from './components/Header'
import About from './components/About'
import Projects from './components/Projects'
import Tesimonails from './components/Tesimonails'
import Contact from './components/Contact'
import { ToastContainer} from 'react-toastify';
import Footer from './components/Footer'


function App() {
  

  return (
    <div className='w-full overflow-hidden'>
      <ToastContainer/>
      <Header/>
      <About/>
      <Projects/>
      <Tesimonails/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
