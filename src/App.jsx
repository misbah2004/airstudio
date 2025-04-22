import React from 'react'
import Layout from './components/Layout/Layout'
import HomePage from './pages/HomePage'
import { BrowserRouter, createBrowserRouter, Route, RouterProvider, Routes } from 'react-router-dom'
import ShopPage from './pages/ShopPage'
import StorePage from './pages/StorePage'
import ContactUsPage from './pages/ContactUsPage'
import ProductDetailsPage from './pages/ProductDetailsPage'
const App = () => {

  return (
    <>
      <Layout>
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/shop' element={<ShopPage/>}/>
      <Route path='/store' element={<StorePage/>}/>
      <Route path='/contact' element={<ContactUsPage/>}/>
      <Route path='/detail' element={<ProductDetailsPage/>}/>
    </Routes>
      </Layout>
    </>
  )
}

export default App
