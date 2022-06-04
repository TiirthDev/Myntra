import React from 'react'
import './Subtotal.css'
import CurrencyFormat from "react-currency-format";
import { useStateValue } from './StateProvider'
import { getBasketTotal } from './reducer';

function Subtotal() {
    const [{ basket }, dispatch] = useStateValue();


    return (
        <div className="subtotal">
            <CurrencyFormat

                renderText={(value) => (
                    <>
                        <p>
                            Price Details ({basket.length} items)
                        </p>
                        <p className="price-details">
                            Total MRP: <strong>{`${value}`}</strong>
                        </p>
                        <p className="price-details">
                            Discount On MRP: <strong className='green'>-₹0</strong>
                        </p>
                        <p className="price-details">
                            Coupon Discount: <strong>₹0</strong>
                        </p>
                        <p className="price-details">
                            Convenience Fee: <strong className='green'>FREE</strong>
                        </p>
                        <hr />
                        <p className="price-details">
                            Total Amount: <strong>{`${value}`}</strong>
                        </p>
                    </>
                )}

                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"₹"}
            />
            <button>Place Order</button>
        </div>
    )
}

export default Subtotal
