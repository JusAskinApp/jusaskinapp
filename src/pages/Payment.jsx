import React from 'react'
// import PayPalButton from '../components/paypal/PaypalButton'
import BaseCompPaypal from '../components/paypal/BaseCompPaypal'
import SubscriptionPlans from '../components/paypal/SubscriptionPlans'

function Payment() {
  return (
    <div>
        {/* <PayPalButton/> */}
        <BaseCompPaypal/>
        {/* <SubscriptionPlans/> */}
    </div>
  )
}

export default Payment