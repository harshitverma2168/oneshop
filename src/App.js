import React from 'react';
import {BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.scss';
import { HomePage } from './components/pages/homepage/homepage.component';
import ShopPage from './components/pages/shop/shop.component';
import Cart from './components/pages/cart/cart.component';
import LoginPage from './components/pages/login/login.component';
import { Hats } from './components/pages/Hats/hats.component';
import { Header } from './components/header/header.component';
import SignInSignUp from './components/pages/signin-signup/signinsignup.component';
import { auth } from './firebase/firebase.util';
class App extends React.Component {
 constructor(props) {
   super(props)
 
   this.state = {
      currentUser:null
   }
 }
  
  unsubscribeFromAuth = null
  

  componentDidMount() {
    this.unsubscribeFromAuth=auth.onAuthStateChanged(user =>
    {
      this.setState({ currentUser: user })
      console.log(user);
      })
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }



  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Header currentUser={this.state.currentUser}/>
          <Switch>
            <Route exact path='/' component={HomePage} />
            <Route path='/hats' component={Hats} />
            <Route path='/shop' component={ShopPage} />
            <Route path='/login' component={SignInSignUp} />
            <Route path='/cart' component={Cart} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}
export default App;
