import Hero from './components/Hero'
import Navbar from './components/Navbar'
import SearchProduct from './api/SearchProduct';

import { useEffect } from 'react';
import './App.css'
import SkincareGenerator from './api/SkincareGenerator';


function App() {
  

  return (
    <div className='w-screen-xl'>
        <Navbar/>
        <Hero/>
    
    </div>
  )
}





export default App
