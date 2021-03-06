import React from 'react';
import { Switch, Route, Redirect } from "react-router-dom"
import HomePage from "./pages/homepage/homepage.component"
import ShopPage from "./pages/shop/shop.component"
import CheckOutPage from "./pages/checkout/checkout"

import Header from "./components/header/header";
import SignInAndSignUp from "./pages/sign-in-and-sign-out/sign-in-and-sign-out"
import {auth, createUserProfileDocument} from "./firebase/firebase.utils"
import {connect} from "react-redux";
import { setCurrentUser } from "./redux/user/user.actions";


import './App.css';



class App extends React.Component {


  unsubscribeFromAuth = null

  componentDidMount() {
    const {setCurrentUser} = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged( async userAuth => {
      if (userAuth) {
  
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapshot => {
            setCurrentUser({
              currentUser: {
                id: snapshot.id,
                ...snapshot.data()
              }
            });
          });
      }
      else 
      setCurrentUser(userAuth)
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render () {
    // console.log(this.props.currentUser)
    return (
      <div>
        <Header  />
        <Switch>
          <Route exact path = "/" component = {HomePage} />
          <Route  path = "/shop" component = {ShopPage} />
          <Route exact  path = "/checkout" component = {CheckOutPage} />
          <Route exact path = "/signin" render={() => this.props.currentUser ? (<Redirect to="/"/>) : <SignInAndSignUp /> } />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = ({user}) => ({
  currentUser: user.currentUser
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps )(App);
