import React from 'react'

import { Link,} from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='page-top' >
    
    <div className="flex-wrap  mx-auto h-15 z-10 relative py-1 bg-clip-padding bg-gradient-to-r from-violet-200 to-pink-200 text-l text-center tracking-wider flex items-center justify-center px-6">
        <div>
            <Link to="/" className="font-bold text-xl md:text-2xl  text-black font-unb">skinsforskin</Link>
        </div>
    </div>
    <div x-data="{showMenu: false}" className=" h-12 bg-white relative mx-auto px-6 border-b border-l border-r border-black items-center justify-between py-3 ">
    
        <div className="flex items-center justify-center font-normal relative z-10">
            <button className="md:hidden" x-on:click="showMenu = true">
                <svg xmlns="http://www.w3.org/2000/svg" className="text-black h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"/>
                </svg>
            </button>
            <div className="hidden md:flex items-center justify-center item-center ">
                <Link to="/about" className="mx-6 font-normal text-black hover:text-green hover:scale-110 duration-300">About us</Link>
                <Link to="/api/searchproduct" className="mx-6 font-normal text-black  hover:text-green hover:scale-110 duration-300">Test Your Product</Link>
                <Link to="/api/generateSkincare" className="mx-6 font-normal text-black  hover:text-green hover:scale-110 duration-300 ">Get Your Skincare</Link>
            </div>
        </div>
        <div x-show="showMenu" className="fixed inset-0  h-screen md:hidden flex flex-col items-center justify-center text-2xl space-y-4 bg-blue-100 text-black z-40">
            <button x-on:click="showMenu = false" className="absolute top-0 right-0 mt-12 mr-12 text-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/>
                </svg>
            </button>
            <Link to="/about" className="mx-6 font-light text-green hover:text-green hover:scale-110 duration-300">About</Link>
            <Link to="/api/searchproduct" className="mx-6 font-light text-green hover:text-green hover:scale-110 duration-300">Test Your Product</Link>
            <Link to="/api/generateSkincare" className="mx-6 font-light text-green hover:text-green hover:scale-110 duration-300">Get Your Skincare</Link>
        </div>
    </div>
    
    </nav>
  )
}

export default Navbar