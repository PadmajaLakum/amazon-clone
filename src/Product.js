import React from 'react';
import './Product.css';
import {useStateValue} from './StateProvider';


function Product({id,title,price,rating,image}) {
    const [{basket},dispatch]=useStateValue();
    const addToBasket= () => {
     dispatch({
         type:'ADD TO BASKET',
         item: {
             id:id,
             title:title,
             image:image,
             rating:rating,
             price:price,
         }
     })
    }

    return (
        <div className='product'>
            <div className='product__info'>
            <p>{title}</p>
            <p className='product__price'>
                <small>$</small>
              <strong>{price}</strong>  
            </p>
            <p className='product__rating'>
                {rating}
                <p>stars</p>
            </p>
            </div>
            <img src={image} alt='' />
            <button  onClick={addToBasket}>Add to basket</button>

            
        </div>
    );
}

export default Product;