import React from 'react'
import './checkout.css'
import Subtotal from "../components/subtotal"

function Checkout() {
  return (
    <div className='checkout'>
        <div className='checkout_left'>
            <img 
                className='checkout_ad'
                src='https://blog.hubspot.com/hubfs/How%20to%20Explain%20Banner%20Ads%20to%20Anyone-2.png'
            />
            <div>
                <h2 className='checkout_title'>
                    Shopping Basket
                </h2>
            </div>
        </div>

        <div className='checkout_right'>
            <Subtotal />
        </div>
    </div>
  )
}

export default Checkout