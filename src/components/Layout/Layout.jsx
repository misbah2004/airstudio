import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Bootombar from './Bootombar'

const Layout = ({children}) => {
  return (
    <div>
      <Header/>
      <main>{children}</main>
      <Footer/>
      <Bootombar/>
    </div>
  )
}

export default Layout
