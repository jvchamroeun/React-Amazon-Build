import React from 'react'
import { useStateValue } from '../StateProvider'
import './checkoutProduct.css'

function CheckoutProduct({id, image, title, price, ratings}) {
  const [{ basket }, dispatch] = useStateValue();

  const removeFromBasket = () => {
    //remove item from basket
    dispatch({
        type: 'REMOVE_FROM_BASKET',
        id: id,
    })
    }
  return (
    <div className='checkoutProduct'>
        <img className='checkoutProduct_image' src={image} />

        <div className='checkoutProduct_info'>
            <p className='checkoutProduct_title'>{title}</p>
            <p className='checkoutProduct_price'>
                <small>$</small>
                <strong>{price}</strong>
            </p>
            <p className='checkoutProduct_ratings'>
                {Array(ratings)
                .fill()
                .map((_, i) => (
                    <p>*</p>
                ))}
            </p>
            <button onClick={removeFromBasket}>Remove from Basket</button>
        </div>
    </div>
  )
}

export default CheckoutProduct