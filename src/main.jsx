import React from 'react'
import ReactDOM from 'react-dom/client'
import SkincareGenerator from './api/SkincareGenerator.jsx';
import SearchProduct from './api/SearchProduct.jsx';
import About from './components/About.jsx';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App.jsx'



const router = createBrowserRouter([
  
  {
    path: "/",
    element: <App/>,
  },
  {
    path:"/api/generateSkincare",
    element:<SkincareGenerator/>
  }
  ,{
    path:"/about",
    element:<About/>
  },
  {
    path:"/api/searchproduct",
    element:<SearchProduct/>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
