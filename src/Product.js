import React from 'react'
import './Product.css'
import { useStateValue } from './StateProvider';

function Product({ id, title, image, price, rating, des }) {

    const [{ }, dispatch] = useStateValue();
    const addToBasket = () => {
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id: id,
                title: title,
                des: des,
                image: image,
                price: price,
                rating: rating
            }
        })
    }

    return (
        <div className="product">
            <img src={image} alt="" />
            <div className="product__rating">
                <p>{rating}⭐</p>
            </div>

            <div className="product__info">
                <strong>{title}</strong>
                <p>{des}</p>
                <p className="product__price">
                    <strong>Rs.</strong>
                    <strong>{price}</strong>
                </p>
            </div>
            <button onClick={addToBasket}>Add To Bag</button>
        </div>
    )
}

export default Product
