import React from 'react'
import Layout from './components/Layout/Layout'
import HomePage from './pages/HomePage'
import { BrowserRouter, createBrowserRouter, Route, RouterProvider, Routes } from 'react-router-dom'
import ShopPage from './pages/ShopPage'
import StorePage from './pages/StorePage'
import ContactUsPage from './pages/ContactUsPage'
import ProductDetailsPage from './pages/ProductDetailsPage'
import RejisterPage from './pages/RejisterPage'
import OrderPage from './pages/OrderPage'
import OrderTablePage from './pages/OrderTablePage'
import ChatPage from './pages/ChatPage'
import UserRejisterPage from './pages/UserRegisterPage'
import UserRegisterPage from './pages/UserRegisterPage'
import UserLoginPage from './pages/UserLoginPage'
import SellerRegisterPage from './pages/SellerRegisterPage'
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
      <Route path='/rejister' element={<RejisterPage/>}/>
      <Route path='/order' element={<OrderPage/>}/>
      <Route path='/ordertable' element={<OrderTablePage/>}/>
      <Route path='/chat' element={<ChatPage/>}/>
      <Route path='/userregister' element={<UserRegisterPage/>}/>
      <Route path='/userlogin' element={<UserLoginPage/>}/>
      <Route path='/sellerregister' element={<SellerRegisterPage/>}/>
    </Routes>
      </Layout>
    </>
  )
}

export default App
