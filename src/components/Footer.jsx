import React from 'react'
import "../App.css"

import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div>
    <footer className="bg-gradient-to-r from-violet-200 to-pink-200 shadow w-full">
        <div className="zmx-auto p-4 md:py-8">
            <div className="sm:flex sm:items-center sm:justify-between">
            <Link to="/" className="font-bold text-xl md:text-3xl text-black font-unb">skinsforskin</Link>
                
                <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                    
            <Link to="/about" className="mx-6 font-normal text-black hover:text-green hover:scale-110 duration-300">About</Link>
                <Link to="/api/searchproduct" className="mx-6 font-normal text-black  hover:text-green hover:scale-110 duration-300">Test Your Product</Link>
            <Link to="/api/generateSkincare" className="mx-6 font-normal text-black  hover:text-green hover:scale-110 duration-300 ">Get Your Skincare</Link>
                </ul>
            </div>
            <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
            <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="https://enjae.netlify.app/" className="hover:underline">enjae™</a>. All Rights Reserved.</span>
        </div>
    </footer>
    
    </div>
  )
}

export default Footer