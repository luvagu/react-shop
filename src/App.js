import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'

import Header from './components/header/Header';
import Home from './pages/home/Home';
import Shop from './pages/shop/Shop';

import { auth, createUserProfileDocument } from './firebase/firebase.utils'

import SigninRegister from './pages/signin-register/SigninRegister';

import './App.css';

class App extends Component {
  constructor() {
    super()
  
    this.state = {
       currentUser: null
    }
  }

  unsubscribeFromAuth = null

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async user => {
      createUserProfileDocument(user)
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth()
  }
  
  render() {
    return (
      <>
        <Header currentUser={this.state.currentUser}  />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/shop' component={Shop} />
          <Route exact path='/signin' component={SigninRegister} />
        </Switch>
      </>
    )
  }
}

export default App;
