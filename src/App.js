import React, {useEffect} from 'react';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Login from './components/Login';
import Payment from './components/Payment';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from './components/Checkout';
import { auth } from "./firebase";
import { useStateValue } from './providers/StateProvider';
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";


const promise = loadStripe('pk_test_51JEagiGwyCd3NyJrPxVPPiHazb8GDWzJKxJCvArd7ygubhipnNzcpKFuWYqL2hnlptklfvdp6ESJAT0dX9IitFkv00pSBBlPnt');

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    // will only run once when the app component loads
    auth.onAuthStateChanged(authUser => {
      console.log('THE USER IS >>> ', authUser);
      
      if (authUser) {
        // the user just logged in  / the was  logged in
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      } else {
        // the user is logged out
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, [])

  return (
    //BEM
    <Router>
      <div className="app">
        
        <Switch>
          <Route path="/login">
            <Login />
          </Route>

          <Route path="/checkout">
              <Header />
            <Checkout />
          </Route>

          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>

          <Route path="/">
              <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
