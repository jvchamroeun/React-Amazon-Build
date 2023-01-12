import React from 'react'
import "./payment.css"
import { useStateValue } from '../StateProvider';
import CheckoutProduct from '../components/checkoutProduct';
import { Link } from 'react-router-dom';

function Payment() {
    const [{ basket, user}, dispatch] = useStateValue();
  return (
    <div className='payment'>
        <div className='payment_container'>
            <h1>
                Checkout (<Link to='/checkout'>{basket?.length} items</Link>)
            </h1>

            <div className='payment_section'>
                <div className='payment_title'>
                    <h3>Delivery Address</h3>
                </div>
                <div className='payment_address'>
                    <p>{user?.email}</p>
                    <p>19867 Silly Ave.</p>
                    <p>Abbotsford, BC</p>
                </div>
            </div>

            <div className='payment_section'>
                <div className='payment_title'>
                    <h3>Review Items and Delivery</h3>
                </div>
                <div className='payment_items'>
                    {basket.map(item => (
                        <CheckoutProduct
                            id={item.id}
                            title={item.title}
                            image={item.image}
                            price={item.price}
                            ratings={item.ratings}
                        />
                    ))}
                </div>
            </div>

            <div className='payment_section'>
                <div className='payment_title'>
                    <h3>Payment Method</h3>
                </div>
                <div className='payment_details'>

                </div>
            </div>

        </div>
    </div>
  )
}

export default Payment