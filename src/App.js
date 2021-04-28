
import './App.css';
import Header from './Header.js';
import Home from './Home.js';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Checkout from './Checkout';
import Login from './Login';
import { useEffect } from 'react';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';
import Payment from './Payment';
import {loadStripe} from '@stripe/stripe-js';
import {Elements} from '@stripe/react-stripe-js';
import Orders from './Orders';

const promise = loadStripe('pk_test_51IjNfGICTR4ziYxa5RRKxhCskrboJ1QjADcTtyygTVIGfF4QeSTMoXpQN2noKUmLANqBgAsvlRSAPJMayMzQEGMP00Q5mG4qP3');

function App() {
  //BEM
  const [{},dispatch] = useStateValue();
  useEffect(() => {
    //will only run once when the app component loads..
    auth.onAuthStateChanged(authUser => {
      console.log('The user is >>>' ,authUser );

      if (authUser){
        // the use just logged in / the user was logged in
        dispatch({
          type: "SET_USER",
          user: authUser
        })
      }else{
        //the user is logged out
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  },[])
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          {/* checkout path */}
          <Route path='/orders'>
              <Orders />
          </Route>
          <Route path='/login'>
            <Login />
          </Route>
          <Route path='/checkout'>
            <Checkout />
          </Route>
          <Route path='/payment'>
            <Elements stripe={promise}>
                <Payment />
            </Elements>
            <h1>I am the payment</h1>
          </Route>
          {/* base path or home path */}
          <Route exact path='/'>
            <Home />
          </Route>
        </Switch>

      </div>
    </Router>
  );
}

export default App;
