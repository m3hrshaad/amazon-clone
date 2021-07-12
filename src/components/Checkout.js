import React from 'react';
import '../StyleComponents/Checkout.css';
import Subtotal from '../components/Subtotal';

function Checkout() {
    return (
        <div className="checkout">
            <div className="checkout_left">
                <img src="https://m.media-amazon.com/images/G/01/AdProductsWebsite/images/AUX/firetv_inline_composition_fragmented._TTW_.jpg"
                    alt="" className="checkout_ad" />
                <div>
                    <h2 className="checkout_title">Your Shopping basket</h2>
                    {/* basketItems */}
                    {/* basketItems */}
                    {/* basketItems */}
                    {/* basketItems */}
                </div>
            </div>
            <div className="checkout_right">
                <Subtotal />
            </div>
        </div>
    )
}

export default Checkout;
