import React from 'react';
import '../StyleComponents/Subtotal.css';
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from '../providers/StateProvider';
import { getBasketTotal } from '../reducer/reducer';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
// import { SportsBasketball } from '@material-ui/icons';

function Subtotal() {
    const history = useHistory();
    const [{ basket }, dispatch] = useStateValue();
    
    return (
        <div className="subtotal">
            <CurrencyFormat
                renderText={(value) => (
                    <>
                        <p>
                            Subtotal ({basket.length} items):
                            <strong>{ value }</strong>
                        </p>
                        <small className="subtotal_gift">
                            <input type="checkbox" /> This order contains a gift</small>
                    </>
                )}
                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
            />

            <button onClick={e => history.push('/payment')}>Proceed to Checkout</button>
        </div>
    )
}

export default Subtotal;
