import React from 'react';
import './CheckoutProduct.css';
import {useStateValue} from './StateProvider.js'

function CheckoutProduct({id,title,price,image,rating}) {
    const [{basket},dispatch]=useStateValue();
    const removeFromBasket=() => {
         dispatch({
             type:'REMOVE FROM BASKET',
             id:id,
         })
    }

    
    return (
        <div className='checkoutProduct'>
            <img  className='checkoutProduct__image' src={image} alt='' />
            <div className='checkoutProduct__info'>
                <p className='checkoutProduct__title'>{title}</p>
                <p className='checkoutProduct__price' >
                <small>$</small>
                <strong>{price}</strong>
                </p>
                <div className='checkoutProduct__rating'>
                    
                        <p>stars</p>
                    
                </div>
                <button onClick={removeFromBasket}>Remove from basket</button>
            </div>
            
        </div>
    );
}

export default CheckoutProduct;