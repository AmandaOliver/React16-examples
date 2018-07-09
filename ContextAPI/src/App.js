import React, { Component } from 'react'
import Header from './Components/Header'
import Content from './Components/Content'

// we need to import our context definition, we could just initialize the context in this file,
// but i don't want to :D
import UserDataContext from './UserDataContext'
import './Styles/App.css'

// Main class of our application, which state is going to be the global app state
export default class App extends Component {

  /**
  * method to modify the state of the app when a user logs in:
  * @param {string} username the username of the user that is logging in
  */
  _handleLogin = username => {
    this.setState(({ previousUsersList }) => ({
        logged: true,
        currentUser: username,
        previousUsersList,
      }))
  }

  /**
   * method to modify the state of the app when a user logs out
   * @param {string} username the username of the user that is logging out
   */
  _handleLogout = username => {
    this.setState(({ previousUsersList }) => ({
        logged: false,
        currentUser: '',
        previousUsersList: !previousUsersList.includes(username) ? previousUsersList.concat(username) : previousUsersList,
    }))
  }
  _produceError = () => {
    this.setState((prevState) => ({
      ...prevState,
      shouldFail: true,
    }));
  }

  // inner state of the class, we will share this with the provider
  // ***** ReduxVSContextAPI: notice that the values in here would be the ones in the Redux store,
  // ***** and the methods would be the reducers+actions
  // ***** this way the initial state and store content is clearer than in the redux version
  state = {
    logged: false,
    currentUser: '',
    previousUsersList: [],
    handleLogin: this._handleLogin,
    handleLogout: this._handleLogout,
    produceError: this._produceError,
  }

  /**
   * render method that wrapps everything in a provider component in order
   * to share it's value with the childs that uses the consumer.
   * *****ReduxVSContextAPI: notice that the provider it's the same, but it receives value prop instead of 'store'
   */
  render() {
    return (
      <UserDataContext.Provider value={this.state}>
        <Header>Context API App</Header>
        <Content/>
      </UserDataContext.Provider>
    )
  }
}
