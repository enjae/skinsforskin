import React from 'react'
import '../App.css'
import Navbar from './Navbar'
import { useEffect } from 'react'
import Footer from './Footer'

const About = () => {
  useEffect(()=>{
    window.scrollTo(0,0);
  },[])
  return (
    <div className="w-screen">
    <Navbar/>
    <div className='max-w-7xl mt-16  w-[380px] lg:w-[800px] mx-auto px-4 sm:px-6 lg:px-8 py-12'>
        
        <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl">Know what's best for <span className="underline underline-offset-3 decoration-8 decoration-blue-400 dark:decoration-blue-600">Your Skin</span></h1>
        
        <p className="w-auto mt-8  mb-12 text-lg text-gray-500 md:text-xl"> Whether you’ve got general questions about our range, a particular skin issue you’d like to find a product for, or want some help developing your skincare routine – we’re here to help
        </p>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
    <div className="mb-3 text-black "> <h2>Problem Statement</h2> <p>Websites available on internet provides skincare routines for a particular brand. They are either Proprietary or used for advertisement purpose to promote a specific brand. </p> </div>
    <div className="mb-3 text-black "> <h2>Our Mission</h2> <p>We aim to provide you information about the products within your range and accesible to you in your own country. We aim to provide you the best products there are for your skin concerns which are made specifically for you ❤️ </p> </div>


    </div>
    
<blockquote className="text-xl italic font-semibold text-gray-900 ">
<svg aria-hidden="true" className="w-10 h-10 text-gray-400 dark:text-gray-600" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" fill="currentColor"/></svg>
<p>"Created to provide real Result while encouraging acts of self-care"</p>
</blockquote>

        
    
    </div>
    <div className='page-bottom'>
    <Footer/>
    </div>

    </div>
  )
}

export default About