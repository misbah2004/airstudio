import React from 'react'
import RejisterComponentSection from '../components/rejister/RejisterComponentSection'
import RejisterComponentSectionTwo from '../components/rejister/RejisterComponentSectionTwo'
import RejisterComponentSectionThree from '../components/rejister/RejisterComponentSectionThree'
import SubscriptionSection from '../components/subscribtion/SubscriptionSection'

const RejisterPage = () => {
  return (
    <div>
      <RejisterComponentSection/>
      <RejisterComponentSectionTwo/>
      <RejisterComponentSectionThree/>
      <SubscriptionSection/>
    </div>
  )
}

export default RejisterPage
