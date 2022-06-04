import React from 'react'
import './CheckoutProduct.css'
import { useStateValue } from './StateProvider'

function CheckoutProduct({ id, title, des, image, price, rating }) {

    const [{ basket }, dispatch] = useStateValue();

    const RemoveFromBasket = () => {
        dispatch({
            type: "REMOVE_FROM_BASKET",
            id: id,
        });
    }

    return (
        <div className="checkoutProduct">
            <img className="checkoutProduct__img" src={image} alt="" />
            <div className="checkoutProduct__info">
                <p className="checkoutProduct__title">{title}</p>
                <p className="checkoutProduct__des">{des}</p>
                <p className="checkoutProduct__des">{rating}⭐</p>
                <p className="Checkoutproduct__price">
                    <small>Rs.</small>
                    <strong>{price}</strong>
                </p>
                <button onClick={RemoveFromBasket}>Remove From Basket</button>
            </div>
        </div>
    )
}

export default CheckoutProduct
