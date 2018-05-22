import React, { Component } from 'react';
import Header from './Components/Header'
import Content from './Components/Content'
import UserDataContext from './UserDataContext';
import './Styles/App.css';

export default class App extends Component {

  _handleLogin = () => {
      this.setState({  logged: true,
        currentUser: 'Amanda',
        userList: [],
      })
  }
  _handleLogout = username => {
    this.setState({  logged: true,
      currentUser: username,
      userList: [],
    })
}

  contextActions = {
    handleLogin: this._handleLogin,
    handleLogout: this._handleLogout
  }

  state = {
    logged: false,
    currentUser: '',
    userList: [],
    ...this.contextActions
  }

  render() {
    console.log('contextValues',this.contextValues, this.state)
    return (
      <UserDataContext.Provider value={this.state}>
        <Header>ContextAPI</Header>
        <Content/>
      </UserDataContext.Provider>
    )
  }
}
