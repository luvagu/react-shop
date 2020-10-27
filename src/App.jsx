import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'

import { connect } from 'react-redux'
import { setCurrentUser } from './redux/user/user-actions'

import Header from './components/header/Header'
import Home from './pages/home/Home'
import Shop from './pages/shop/Shop'

import { auth, createUserProfileDocument } from './firebase/firebase.utils'

import SigninRegister from './pages/signin-register/SigninRegister'

import './App.css'

class App extends Component {

  unsubscribeFromAuth = null

  componentDidMount() {

    const { setCurrentUser } = this.props

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth)

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
              id: snapShot.id,
              ...snapShot.data()
            }
          )
        })
      } else {
        setCurrentUser(userAuth)
      }
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth()
  }
  
  render() {
    return (
      <>
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/shop' component={Shop} />
          <Route exact path='/signin' component={SigninRegister} />
        </Switch>
      </>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(null, mapDispatchToProps)(App);
