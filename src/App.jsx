import React, { Component } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectCurrentUser } from './redux/user/user-selectors'
import { setCurrentUser } from './redux/user/user-actions'

// @ToDo - We call this here to insert the shop collections in batches to the firebase store
// import { selectCatalogCollectionOverview } from './redux/shop/shop-selectors' 

import Header from './components/header/Header'
import Home from './pages/home/Home'
import Shop from './pages/shop/Shop'
import Checkout from './pages/checkout/Checkout'

// import { auth, createUserProfileDocument } from './firebase/firebase.utils'

import SigninRegister from './pages/signin-register/SigninRegister'

import './App.css'

class App extends Component {

  unsubscribeFromAuth = null

  componentDidMount() {

    const { setCurrentUser } = this.props

    // this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
    //   if (userAuth) {
    //     const userRef = await createUserProfileDocument(userAuth)

    //     userRef.onSnapshot(snapshot => {
    //       setCurrentUser({
    //           id: snapshot.id,
    //           ...snapshot.data()
    //         }
    //       )
    //     })
    //   } else {
    //     setCurrentUser(userAuth)
    //     // addCollectionAndDocuments('collections', collectionsArray.map(({ title, items }) => ({ title, items })))
    //   }
    // })

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
          <Route path='/shop' component={Shop} />
          <Route exact path='/checkout' component={Checkout} />
          <Route exact path='/signin' render={() => this.props.currentUser ? (<Redirect to='/' />) : (<SigninRegister />) }  />
        </Switch>
      </>
    )
  }
}

const mapStateToProps = createStructuredSelector({ 
  currentUser: selectCurrentUser,
  // collectionsArray: selectCatalogCollectionOverview 
})

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
