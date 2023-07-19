import React from 'react'
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import SkincareGenerator from '../api/SkincareGenerator';
import Footer from './Footer';
import '../App.css'

const Hero = () => {
   
   useEffect(()=>{
        window.scrollTo(0,0);
      },[])

  return (
    <div >
    

            <section className="mt-16 relative font-sans antialiased bg-gray-100 text-gray-700">
        
                <div x-init="init()" className=" relative h-screen  hero-bg flex items-center justify-center">
                    <div className="relative z-10 text-center text-white px-6 bg-gray-0 rounded-md">
                        
                        <h1 className="text-3xl md:text-5xl -mt-4 font-display font-bold "> Experience the Art of
                        <br />
                        Skincare </h1>
                        <p className="mt-4">Discover the Alchemy of Flawless Skin</p>
                        
                            <Link to="/api/searchproduct" className="relative inline-block text-lg group mb-6 mt-6">
                            <span className="relative z-10 block px-16 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-text">
                            <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-white"></span>
                            <span className="absolute left-0 w-full h-48 -ml-1.2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-lime group-hover:-rotate-180 ease"></span>
                            <span className="relative">Know your Product</span>
                            </span>
                            <span className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0" data-rounded="rounded-lg"></span>
                            
                            
                            </Link>
                    </div>
                </div>
                <div className="container mx-auto px-6 flex flex-wrap items-center py-24">
                    <div className="w-full lg:flex-1">
                        <div className="uppercase text-sm text-gray-700 tracking-widest">Find your skincare staples</div>
                        <h2 className="text-3xl md:text-4xl font-semibold font-display mt-3">
                        The future of skincare.
                        <br />
                        A new natural.
                        </h2>
                    </div>
                    <div className="w-full lg:w-auto text-center">
                        <svg className="inline-block w-32 h-32 -mb-10 -mt-4 lg:mt-0 lg:mb-0 lg:transform lg:rotate-90 lg:-ml-8" x="0px" y="0px" viewBox="0 0 100 125">
                            <path d="M91.8 45c-3.9 0-5.9 2.3-7.7 4.3-1.7 2-3.2 3.7-6.2 3.7s-4.5-1.7-6.2-3.7C70 47.3 68 45 64 45c-3.9 0-5.9 2.3-7.7 4.3-1.7 2-3.2 3.7-6.2 3.7s-4.5-1.7-6.2-3.7c-1.8-2-3.8-4.3-7.7-4.3-3.9 0-5.9 2.3-7.7 4.3-1.7 2-3.2 3.7-6.2 3.7s-4.5-1.7-6.2-3.7c-1.8-2-3.8-4.3-7.7-4.3-.6 0-1 .4-1 1s.4 1 1 1c3 0 4.5 1.7 6.2 3.7 1.8 2 3.8 4.3 7.7 4.3 3.9 0 5.9-2.3 7.7-4.3 1.7-2 3.2-3.7 6.2-3.7s4.5 1.7 6.2 3.7c1.8 2 3.8 4.3 7.7 4.3 3.9 0 5.9-2.3 7.7-4.3 1.7-2 3.2-3.7 6.2-3.7s4.5 1.7 6.2 3.7c1.8 2 3.8 4.3 7.7 4.3 3.9 0 5.9-2.3 7.7-4.3 1.7-2 3.2-3.7 6.2-3.7.6 0 1-.4 1-1s-.4-1-1-1z"/>
                        </svg>
                    </div>
                    <div className="w-full lg:flex-1">
                        <p>
                        
                        Need help with your routine? Tell us about your skin and what complexion perfection looks like to you; we'll help you achieve your skin goals in no time.</p>
                        
                        <Link to="/api/generateSkincare" className="relative inline-block text-lg group mt-3">
                        <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-black">
                        <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-lime"></span>
                        <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-purple group-hover:-rotate-180 ease"></span>
                        <span className="relative">My Routine</span>
                        </span>
                        <span className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0" data-rounded="rounded-lg"></span>
                        </Link>
                        </div>
                </div>
                <>
  <link href="https://unpkg.com/pattern.css" rel="stylesheet" />
  <div>
    <section className="text-gray-200 section2 bg-gray-900">
      <div className="max-w-6xl mx-auto px-5 py-24 ">
        <div className="text-center mb-20">
          <h1 className=" title-font  mb-4 text-4xl font-extrabold leading-10 tracking-tight sm:text-5xl sm:leading-none md:text-6xl">
            How it Works?
          </h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
           Our quizz Decodes your skin and creates products that are tailored to each individual.
           After filling out the questionnaire, you will receive an algorithmically-generated custom formulation 
          </p>
          
          <Link to="/api/generateSkincare" className="underline text-purple relative inline-block group mt-6">Get your Customised skincare here</Link>
          <div className="flex mt-6 justify-center">
            <div className="w-16 h-1 rounded-full bg-lime inline-flex" />
          </div>
        </div>
        <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 ">
          <div className="p-10 md:w-1/3 md:mb-0 mb-6 flex flex-col ">
            <div className="pattern-dots-md gray-light">
              <div className="rounded bg-gray-800 p-4 transform translate-x-6 -translate-y-6  ">
                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-green-100 text-green-500 mb-5 flex-shrink-0 p-2">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                    />
                  </svg>{" "}
                </div>
                <div className="flex-grow ">
                  <h2 className=" text-xl title-font font-medium mb-3">
                    Quiz
                  </h2>
                  <p className="leading-relaxed text-sm text-justify">
                  It starts with a skin quiz
                  Answer questions to tell us about your age group, skin type, concern, where you come from, your brand of choice.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="p-10 md:w-1/3 md:mb-0 mb-6 flex flex-col ">
            <div className="pattern-dots-md gray-light">
              <div className="rounded bg-gray-800 p-4 transform translate-x-6 -translate-y-6 ">
                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-blue-100 text-blue-500 mb-5 flex-shrink-0">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                    />
                  </svg>
                </div>
                <div className="flex-grow">
                  <h2 className=" text-xl title-font font-medium mb-3">
                    Analyse
                  </h2>
                  <p className="leading-relaxed text-sm text-justify">
                  Our algorithm takes it from there.
                  We analyse your information and calibrate your formula for your skin only 
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="p-10 md:w-1/3 md:mb-0 mb-6 flex flex-col ">
            <div className="pattern-dots-md gray-light">
              <div className="rounded bg-gray-800 p-4 transform translate-x-6 -translate-y-6 ">
                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-yellow-100 text-yellow-500 mb-5 flex-shrink-0">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"
                    />
                  </svg>
                </div>
                <div className="flex-grow">
                  <h2 className=" text-xl title-font font-medium mb-3">
                    Results
                  </h2>
                  <p className="leading-relaxed text-sm text-justify">
                  See your results and get recommendations. You begin to reach your skin care goals with your skin regimen.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </section>
    <div className="max-w-6xl mx-auto px-5 py-24">
      <div className="text-center mb-20">
      <h1 className=" title-font  mb-4 text-4xl font-extrabold leading-10 tracking-tight sm:text-5xl sm:leading-none md:text-6xl">
          Is your Product treating your concern right?
          
        </h1>
        <div className="flex mt-6 justify-center">
          <div className="w-16 h-1 rounded-full bg-lime inline-flex" />
        </div>
      <img className="sec3-img w-1/2 mx-auto my-4" src="https://cdn.pixabay.com/photo/2021/06/14/01/45/child-6334752_1280.png" alt="" />
        
        <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
         Enter your skin concern and the Product that you are using to target that concern and know if you are using the right product.
        </p>
        
        <Link to="/api/searchproduct" className="underline text-gray-900 relative inline-block group  mt-6">Test your Product here</Link>
      </div>
      </div>
  </div>
</>


            
                
            

               

                    
            
            
            



    {/*<div className="container mx-auto px-6 py-12">
        <h2 className="font-display font-semibold text-3xl">Testimonials</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-24 mt-12">
            <div className="relative">
                <p className="relative z-10 text-justify">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <div className="relative z-10 text-sm flex items-center justify-end">
                    <svg className="inline-block w-32 h-32 -mb-8" x="0px" y="0px" viewBox="0 0 100 125">
                        <path d="M91.8 45c-3.9 0-5.9 2.3-7.7 4.3-1.7 2-3.2 3.7-6.2 3.7s-4.5-1.7-6.2-3.7C70 47.3 68 45 64 45c-3.9 0-5.9 2.3-7.7 4.3-1.7 2-3.2 3.7-6.2 3.7s-4.5-1.7-6.2-3.7c-1.8-2-3.8-4.3-7.7-4.3-3.9 0-5.9 2.3-7.7 4.3-1.7 2-3.2 3.7-6.2 3.7s-4.5-1.7-6.2-3.7c-1.8-2-3.8-4.3-7.7-4.3-.6 0-1 .4-1 1s.4 1 1 1c3 0 4.5 1.7 6.2 3.7 1.8 2 3.8 4.3 7.7 4.3 3.9 0 5.9-2.3 7.7-4.3 1.7-2 3.2-3.7 6.2-3.7s4.5 1.7 6.2 3.7c1.8 2 3.8 4.3 7.7 4.3 3.9 0 5.9-2.3 7.7-4.3 1.7-2 3.2-3.7 6.2-3.7s4.5 1.7 6.2 3.7c1.8 2 3.8 4.3 7.7 4.3 3.9 0 5.9-2.3 7.7-4.3 1.7-2 3.2-3.7 6.2-3.7.6 0 1-.4 1-1s-.4-1-1-1z"/>
                    </svg>
                    <span>Elle Spearman</span>
                </div>
                <svg className="absolute top-0 left-0 w-28 h-28 -mt-10 -ml-8 opacity-5" viewBox="0 0 95.333 95.332">
                    <path d="M30.512,43.939c-2.348-0.676-4.696-1.019-6.98-1.019c-3.527,0-6.47,0.806-8.752,1.793
                                            c2.2-8.054,7.485-21.951,18.013-23.516c0.975-0.145,1.774-0.85,2.04-1.799l2.301-8.23c0.194-0.696,0.079-1.441-0.318-2.045
                                            s-1.035-1.007-1.75-1.105c-0.777-0.106-1.569-0.16-2.354-0.16c-12.637,0-25.152,13.19-30.433,32.076
                                            c-3.1,11.08-4.009,27.738,3.627,38.223c4.273,5.867,10.507,9,18.529,9.313c0.033,0.001,0.065,0.002,0.098,0.002
                                            c9.898,0,18.675-6.666,21.345-16.209c1.595-5.705,0.874-11.688-2.032-16.851C40.971,49.307,36.236,45.586,30.512,43.939z"/>
                    <path d="M92.471,54.413c-2.875-5.106-7.61-8.827-13.334-10.474c-2.348-0.676-4.696-1.019-6.979-1.019
                                            c-3.527,0-6.471,0.806-8.753,1.793c2.2-8.054,7.485-21.951,18.014-23.516c0.975-0.145,1.773-0.85,2.04-1.799l2.301-8.23
                                            c0.194-0.696,0.079-1.441-0.318-2.045c-0.396-0.604-1.034-1.007-1.75-1.105c-0.776-0.106-1.568-0.16-2.354-0.16
                                            c-12.637,0-25.152,13.19-30.434,32.076c-3.099,11.08-4.008,27.738,3.629,38.225c4.272,5.866,10.507,9,18.528,9.312
                                            c0.033,0.001,0.065,0.002,0.099,0.002c9.897,0,18.675-6.666,21.345-16.209C96.098,65.559,95.376,59.575,92.471,54.413z"/>
                </svg>
            </div>
            <div className="relative">
                <p className="relative z-10 text-justify">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <div className="relative z-10 text-sm flex items-center justify-end">
                    <svg className="inline-block w-32 h-32 -mb-8" x="0px" y="0px" viewBox="0 0 100 125">
                        <path d="M91.8 45c-3.9 0-5.9 2.3-7.7 4.3-1.7 2-3.2 3.7-6.2 3.7s-4.5-1.7-6.2-3.7C70 47.3 68 45 64 45c-3.9 0-5.9 2.3-7.7 4.3-1.7 2-3.2 3.7-6.2 3.7s-4.5-1.7-6.2-3.7c-1.8-2-3.8-4.3-7.7-4.3-3.9 0-5.9 2.3-7.7 4.3-1.7 2-3.2 3.7-6.2 3.7s-4.5-1.7-6.2-3.7c-1.8-2-3.8-4.3-7.7-4.3-.6 0-1 .4-1 1s.4 1 1 1c3 0 4.5 1.7 6.2 3.7 1.8 2 3.8 4.3 7.7 4.3 3.9 0 5.9-2.3 7.7-4.3 1.7-2 3.2-3.7 6.2-3.7s4.5 1.7 6.2 3.7c1.8 2 3.8 4.3 7.7 4.3 3.9 0 5.9-2.3 7.7-4.3 1.7-2 3.2-3.7 6.2-3.7s4.5 1.7 6.2 3.7c1.8 2 3.8 4.3 7.7 4.3 3.9 0 5.9-2.3 7.7-4.3 1.7-2 3.2-3.7 6.2-3.7.6 0 1-.4 1-1s-.4-1-1-1z"/>
                    </svg>
                    <span>Elle Spearman</span>
                </div>
                <svg className="absolute top-0 left-0 w-28 h-28 -mt-10 -ml-8 opacity-5" viewBox="0 0 95.333 95.332">
                    <path d="M30.512,43.939c-2.348-0.676-4.696-1.019-6.98-1.019c-3.527,0-6.47,0.806-8.752,1.793
                                            c2.2-8.054,7.485-21.951,18.013-23.516c0.975-0.145,1.774-0.85,2.04-1.799l2.301-8.23c0.194-0.696,0.079-1.441-0.318-2.045
                                            s-1.035-1.007-1.75-1.105c-0.777-0.106-1.569-0.16-2.354-0.16c-12.637,0-25.152,13.19-30.433,32.076
                                            c-3.1,11.08-4.009,27.738,3.627,38.223c4.273,5.867,10.507,9,18.529,9.313c0.033,0.001,0.065,0.002,0.098,0.002
                                            c9.898,0,18.675-6.666,21.345-16.209c1.595-5.705,0.874-11.688-2.032-16.851C40.971,49.307,36.236,45.586,30.512,43.939z"/>
                    <path d="M92.471,54.413c-2.875-5.106-7.61-8.827-13.334-10.474c-2.348-0.676-4.696-1.019-6.979-1.019
                                            c-3.527,0-6.471,0.806-8.753,1.793c2.2-8.054,7.485-21.951,18.014-23.516c0.975-0.145,1.773-0.85,2.04-1.799l2.301-8.23
                                            c0.194-0.696,0.079-1.441-0.318-2.045c-0.396-0.604-1.034-1.007-1.75-1.105c-0.776-0.106-1.568-0.16-2.354-0.16
                                            c-12.637,0-25.152,13.19-30.434,32.076c-3.099,11.08-4.008,27.738,3.629,38.225c4.272,5.866,10.507,9,18.528,9.312
                                            c0.033,0.001,0.065,0.002,0.099,0.002c9.897,0,18.675-6.666,21.345-16.209C96.098,65.559,95.376,59.575,92.471,54.413z"/>
                </svg>
            </div>
            <div className="relative">
                <p className="relative z-10 text-justify">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <div className="relative z-10 text-sm flex items-center justify-end">
                    <svg className="inline-block w-32 h-32 -mb-8" x="0px" y="0px" viewBox="0 0 100 125">
                        <path d="M91.8 45c-3.9 0-5.9 2.3-7.7 4.3-1.7 2-3.2 3.7-6.2 3.7s-4.5-1.7-6.2-3.7C70 47.3 68 45 64 45c-3.9 0-5.9 2.3-7.7 4.3-1.7 2-3.2 3.7-6.2 3.7s-4.5-1.7-6.2-3.7c-1.8-2-3.8-4.3-7.7-4.3-3.9 0-5.9 2.3-7.7 4.3-1.7 2-3.2 3.7-6.2 3.7s-4.5-1.7-6.2-3.7c-1.8-2-3.8-4.3-7.7-4.3-.6 0-1 .4-1 1s.4 1 1 1c3 0 4.5 1.7 6.2 3.7 1.8 2 3.8 4.3 7.7 4.3 3.9 0 5.9-2.3 7.7-4.3 1.7-2 3.2-3.7 6.2-3.7s4.5 1.7 6.2 3.7c1.8 2 3.8 4.3 7.7 4.3 3.9 0 5.9-2.3 7.7-4.3 1.7-2 3.2-3.7 6.2-3.7s4.5 1.7 6.2 3.7c1.8 2 3.8 4.3 7.7 4.3 3.9 0 5.9-2.3 7.7-4.3 1.7-2 3.2-3.7 6.2-3.7.6 0 1-.4 1-1s-.4-1-1-1z"/>
                    </svg>
                    <span>Elle Spearman</span>
                </div>
                <svg className="absolute top-0 left-0 w-28 h-28 -mt-10 -ml-8 opacity-5" viewBox="0 0 95.333 95.332">
                    <path d="M30.512,43.939c-2.348-0.676-4.696-1.019-6.98-1.019c-3.527,0-6.47,0.806-8.752,1.793
                                            c2.2-8.054,7.485-21.951,18.013-23.516c0.975-0.145,1.774-0.85,2.04-1.799l2.301-8.23c0.194-0.696,0.079-1.441-0.318-2.045
                                            s-1.035-1.007-1.75-1.105c-0.777-0.106-1.569-0.16-2.354-0.16c-12.637,0-25.152,13.19-30.433,32.076
                                            c-3.1,11.08-4.009,27.738,3.627,38.223c4.273,5.867,10.507,9,18.529,9.313c0.033,0.001,0.065,0.002,0.098,0.002
                                            c9.898,0,18.675-6.666,21.345-16.209c1.595-5.705,0.874-11.688-2.032-16.851C40.971,49.307,36.236,45.586,30.512,43.939z"/>
                    <path d="M92.471,54.413c-2.875-5.106-7.61-8.827-13.334-10.474c-2.348-0.676-4.696-1.019-6.979-1.019
                                            c-3.527,0-6.471,0.806-8.753,1.793c2.2-8.054,7.485-21.951,18.014-23.516c0.975-0.145,1.773-0.85,2.04-1.799l2.301-8.23
                                            c0.194-0.696,0.079-1.441-0.318-2.045c-0.396-0.604-1.034-1.007-1.75-1.105c-0.776-0.106-1.568-0.16-2.354-0.16
                                            c-12.637,0-25.152,13.19-30.434,32.076c-3.099,11.08-4.008,27.738,3.629,38.225c4.272,5.866,10.507,9,18.528,9.312
                                            c0.033,0.001,0.065,0.002,0.099,0.002c9.897,0,18.675-6.666,21.345-16.209C96.098,65.559,95.376,59.575,92.471,54.413z"/>
                </svg>
            </div>
        </div>
  </div>*/}
      <Footer/>
</section>
    
    

    
    
    </div>
  )
}

export default Hero