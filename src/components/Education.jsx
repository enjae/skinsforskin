import React from 'react'
import { useEffect } from 'react';
import Navbar from './Navbar'
import Footer from './Footer'
import { Link } from 'react-router-dom';

const Education = () => {
  useEffect(()=>{
    window.scrollTo(0,0);
  },[])
  return (
    <div className="w-screen ">
    <Navbar/>
    <div className="ax-w-7xl  w-[380px] lg:w-[800px] mx-auto px-4 sm:px-6 lg:px-8 py-12">
    <h1 className="mb-4 text-center text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl ">This page is under construction</h1>
<p className="mb-6 text-lg text-center font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">We are currently researching on articles to provide you full, appropriate and true knowledge.</p>

<div className="relative z-10 text-center  px-6">
<h3 className='text-center'>
Meanwhile use our tool find the best products for you.
</h3>
<Link to="/api" className="relative inline-block text-lg group mt-3">
            <span className="relative z-10 block px-16 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-text">
            <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-purple"></span>
            <span className="absolute left-0 w-full h-48 -ml-1.2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-lime group-hover:-rotate-180 ease"></span>
            <span className="relative">Find Skincare</span>
            </span>
            <span className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0" data-rounded="rounded-lg"></span>
            
            
            </Link>
</div>


   
    
    </div>
    

        </div>
    


        
    
    
  )
}
export default Education


