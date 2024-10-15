import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import axios from 'axios'
import './App.css'
import Navbar from './Navbar.jsx'
import assets from './assets/bags.png'
// import assets from './assets/lg.gif'
import Cards from './Cards.jsx'
import Footer from './Footer.jsx'


function App() {
  const [showMenu, setShowMenu] = useState(false);

  const [loader, setLoader] = useState(false)


  return (
    <div>


      <div className='justify-center item-center'>
        <img src="https://loading.io/assets/mod/spinner/spinner/lg.gif" alt="" />
      </div>



      <div className="p-5 flex flex-col lg:flex-row justify-between items-center bg-black text-white">
        {/* Logo Container */}
        <div className="flex-shrink-0 mb-4 lg:mb-0">
          <img
            width={70}
            className="rounded-full"
            src={assets}
            alt="Logo" // Added alt for accessibility
          />
        </div>

        {/* Hamburger Icon for Mobile */}
        <div className="lg:hidden">
          <button
            className="text-white focus:outline-none"
            onClick={() => setShowMenu(!showMenu)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>

        {/* Center Navigation Links */}
        <div
          className={`${showMenu ? 'block' : 'hidden'
            } lg:flex flex-col lg:flex-row justify-center items-center space-y-3 lg:space-y-0 lg:space-x-3`}
        >
          <p className="px-2 hover:text-violet-500 cursor-pointer font-bold text-xl">Home</p>
          <p className="px-2 hover:text-violet-500 cursor-pointer font-bold text-xl">About</p>
          <p className="px-2 hover:text-violet-500 cursor-pointer font-bold text-xl">Service</p>
          <p className="px-2 hover:text-violet-500 cursor-pointer font-bold text-xl">Contact</p>
        </div>
      </div>

      <div className="bg-gradient-to-r w-full h-screen drop-shadow-2xl from-indigo-500 from-10% via-sky-400 via-30% to-emerald-500 to-90% flex items-center justify-center">
        <div className="text-center max-w-3xl flex flex-col items-center justify-center space-y-6">
          <h1 className="text-4xl font-bold text-white">
            Discover the Perfect Bag for Every Occasion
          </h1>
          <p className="text-lg font-medium text-white">
            Explore our exclusive collection of stylish and versatile women’s bags, designed to complement your unique style. Whether it's a casual day out or a formal event, we have the perfect bag for every occasion.
          </p>
        </div>
      </div>
      <div>

      </div>
      <Navbar />

      <Cards />
      <Footer />
    </div>
  )
}


export default App;