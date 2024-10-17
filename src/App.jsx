import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import axios from 'axios'
import './App.css'
import Navbar from './Navbar.jsx'
import Cards from './Cards.jsx'
import Footer from './Footer.jsx'


function App() {


  const [loader, setLoader] = useState(false)

  


  return (
    <div>


      <Navbar />

      <Cards />
      <Footer />
    </div>
  )
}


export default App;