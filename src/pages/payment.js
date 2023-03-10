import React, { useEffect, useState } from 'react'
import "./payment.css"
import { useStateValue } from '../StateProvider';
import CurrencyFormat from 'react-currency-format'
import CheckoutProduct from '../components/checkoutProduct';
import { getBasketTotal } from '../reducer';
import { Link, useNavigate } from 'react-router-dom';
import axios from '../axios';
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';
import { db } from '../firebase';

function Payment() {
  const navigate = useNavigate();
  const [{ basket, user}, dispatch] = useStateValue();
  const [errors, setErrors] = useStateValue(null);
  const [succeeded, setSucceeded] = useState(false);
  const [disabled, setDisabled] = useStateValue(true);
  const [processing, setProcessing] = useState("");
  const [clientSec, setClientSec] = useState(true);

  const stripe = useStripe();
  const elements = useElements();

  useEffect(() => {
    const getClientSec = async () => {
        const response = await axios({
            method: 'post',
            url: `/payments/create?total=${getBasketTotal(basket) * 100}`
        });
        setClientSec(response.data.clientSec);
    }

    getClientSec();
  }, [basket]);

  console.log("SECRET >>> ", clientSec)

  const handleSubmit = async (event) => {
    event.preventDefault();
    setProcessing(true);

    const payload = await stripe.confirmCardPayment(clientSec, {
        payment_method: {
            card: elements.getElement(CardElement)
        }
    }).then(({ paymentIntent }) => {

        db.collection('users').doc(user?.uid).collection('orders').doc(paymentIntent.id).set({
            basket: basket,
            amount: paymentIntent.amount,
            created: paymentIntent.created,
        })

        setSucceeded(true);
        setErrors(null);
        setProcessing(false);

        dispatch({
            type:'EMPTY_BASKET',
        })

        navigate('/orders', {replace: true});
    })
  }

  const handleChange = (event) => {
    setDisabled(event.empty);
    setErrors(event.error ? event.error.message : "");
  }

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
                        <form onSubmit={handleSubmit}>
                            <CardElement onChange={handleChange}/>
                            <div className='payment_priceContainer'>
                                <CurrencyFormat
                                    renderText={(value) => (
                                        <h3>Order Total: {value}</h3>
                                    )}
                                    decimalScale={2}
                                    value={getBasketTotal(basket)}
                                    displayType="text"
                                    thousandSeparator={true}
                                    prefix={"$"}
                                />

                                <button disabled={processing || disabled || succeeded}>
                                    <span>{processing ? <p>Processing</p> : "Buy Now"}</span> 
                                </button>
                            </div>
                            {/* {errors && <div>{errors}</div>} */}
                        </form>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Payment