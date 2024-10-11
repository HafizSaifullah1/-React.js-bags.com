import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Navbar.jsx'
import assets from './assets/bags.png'
import Cards from './Cards.jsx'
import Footer from './Footer.jsx'
function App() {


  return (
    <div>


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

    {/* Center Navigation Links */}
    <div className="flex flex-col lg:flex-row justify-center items-center space-y-3 lg:space-y-0 lg:space-x-3">
        <p className="px-2 hover:text-violet-500 cursor-pointer font-bold text-xl">Home</p>
        <p className="px-2 hover:text-violet-500 cursor-pointer font-bold text-xl">About</p>
        <p className="px-2 hover:text-violet-500 cursor-pointer font-bold text-xl">Service</p>
        <p className="px-2 hover:text-violet-500 cursor-pointer font-bold text-xl">Contact</p>
    </div>
</div>



      <div className="bg-gradient-to-r w-full h-screen drop-shadow-2xl	 from-indigo-500 from-10% via-sky-400 via-30% to-emerald-500 to-90% flex items-center justify-center">
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
        <Navbar />
    
      </div>

      <Cards />
      <Footer />
    </div>
  )
}


export default App
