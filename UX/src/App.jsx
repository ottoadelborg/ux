import './App.css'
import React from 'react';
import { createBrowserRouter, Route, RouterProvider } from "react-router-dom";
import { Home } from './components/home';
import { Recipe } from './components/recipe';


function App() {
  
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/recipe",
    element: <Recipe />
  },

])
  return (
    <div className='app'>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
