import React from 'react'
import Layout from './components/Layout/Layout'
import HomePage from './pages/HomePage'
import { BrowserRouter, createBrowserRouter, Route, RouterProvider, Routes } from 'react-router-dom'
import ShopPage from './pages/ShopPage'
const App = () => {

  return (
    <>
      <Layout>
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/shop' element={<ShopPage/>}/>
 
    </Routes>
      </Layout>
    
    </>
  )
}

export default App
