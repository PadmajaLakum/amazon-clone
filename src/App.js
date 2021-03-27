import React,{useEffect, useeffect} from 'react';
import './App.css';
import {BrowserRouter as Router ,Switch,Route} from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import { Check } from '@material-ui/icons';
import Login from './Login';
import {useStateValue} from './StateProvider';
import { auth } from './firebase';

function App() {
  const [{basket},dispatch]=useStateValue();
  useEffect(() => {
    const unsubscribe =auth.onAuthStateChanged((authUser) => {
      if(authUser) {
     dispatch({
       type:'SET USER',
       user:authUser
     });
      }
      else {
        dispatch({
          type:'SET USER',
          user:null
        });

      }
    })
    return () => {
      unsubscribe();
    }

  }, []);
//console.log(user);

  return (
    <Router>
    <div className="app">
      <Switch>
        <Route path='/checkout'>
          <h2> check out</h2>
          <Checkout />
        </Route>
        <Route path='/login'>
          <Login />
          
        </Route>
        <Route path='/'>
        <Header />
          <Home />
        </Route>
      </Switch>
   </div>
      </Router>
      

      
    
  );
}

export default App;
