import React from 'react'
import './Checkout.css'
import { useStateValue } from './StateProvider'
import CheckoutProduct from './CheckoutProduct';
import Subtotal from './Subtotal';

function Checkout() {

    const [{ basket }] = useStateValue();

    return (
        <div className="checkout">
            <div>
                <img className="checkout__ad" src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/31/1ae72dae-ffbd-465d-81e2-4751fd06fbbe1654012895525-EORS-Desktop-Banner.jpg" alt="" />

                {basket?.length === 0 ? (
                    <div className="flex">
                        <h2>Your Cart is Empty.</h2>
                        <p>Please shop to fill up your Cart. Click 'Add to Bag' Button to fill items in your cart.</p>
                    </div>
                ) : (
                    <div>
                        <h2 className="checkout__title">Your Shopping Basket</h2>
                        {basket?.map(item => (
                            <CheckoutProduct
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}
                                des={item.des}
                            />
                        ))}
                    </div>
                )}
            </div>

            {basket.length > 0 && (
                <div className="checkout__right">
                    <Subtotal />
                </div>
            )}

        </div>

    );
}

export default Checkout
