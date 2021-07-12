import React from 'react';
import '../StyleComponents/Subtotal.css';
import CurrencyFormat from 'react-currency-format';
// import { SportsBasketball } from '@material-ui/icons';

function Subtotal() {
    return (
        <div className="subtotal">
            <CurrencyFormat
                renderText={(value) => (
                    <>
                        <p>
                            Subtotal (0 items):
                            <strong>0</strong>
                        </p>
                        <small className="subtotal_gift">
                            <input type="checkbox" /> This order contains a gift</small>
                    </>
                )}
                decimalScale={2}
                value={0}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
            />
        </div>
    )
}

export default Subtotal;
