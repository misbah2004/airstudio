import React from 'react'
import ShopHeroSection from '../components/home/ShopHeroSection'
import ContactUsSection from '../components/contact/ContactUsSection'
import SubscriptionSection from '../components/subscribtion/SubscriptionSection'

const ContactUsPage = () => {
  
  return (
    <>
      <ShopHeroSection heading={"Contact Us"}/>
      <ContactUsSection/>
      <SubscriptionSection/>
    </>
  )
}

export default ContactUsPage
