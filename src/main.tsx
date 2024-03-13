import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Products from './components/Products/Products.tsx'
import Product from "./components/Product/Product.tsx"

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
    <Route path='/' element={<Products/>}/>
    <Route path='/product/:productId' element={<Product/>}/>
    </>
  )
)
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
