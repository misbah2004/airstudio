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
import { data } from './components/data/utilites'
import AddToCart from './components/cart/AddToCart'
import ProductsSection from './components/products/ProductsSection'
import { Toaster } from 'react-hot-toast'
import AllProducts from './components/products/AllProducts'
import ProductPhoneSection from './components/Details/ProductPhoneSection'
const App = () => {

  return (
    <>
      <Layout>
      <Toaster />
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/shop' element={<ShopPage/>}/>
      <Route path='/store' element={<StorePage/>}/>
      <Route path='/contact' element={<ContactUsPage/>}/>
      <Route path='/detail/:id' element={<ProductDetailsPage/>}/>
      <Route path='/rejister' element={<RejisterPage/>}/>
      <Route path='/order' element={<OrderPage/>}/>
      <Route path='/ordertable' element={<OrderTablePage/>}/>
      <Route path='/chat' element={<ChatPage/>}/>
      <Route path='/userregister' element={<UserRegisterPage/>}/>
      <Route path='/userlogin' element={<UserLoginPage/>}/>
      <Route path='/sellerregister' element={<SellerRegisterPage/>}/>
      <Route path='/cart' element={<AddToCart/>}/>
      <Route path='/allproducts' element={<AllProducts/>}/>
      <Route path='/productphone/:id' element={<ProductPhoneSection/>}/>
    </Routes>
      </Layout>
    </>
  )
}

export default App
