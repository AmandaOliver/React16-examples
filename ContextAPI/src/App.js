import React, { Fragment, Component } from 'react';
import Header from './Components/Header';
import Content from './Components/Content'
import { UserDataProvider } from './Contexts/UserContext'

import './Styles/App.css';

class App extends Component {
  render() {
    return (
      <UserDataProvider>
          {/* <Header >Demo ContextAPI</Header> */}
        {/* <Content />   */}
        <Login />
        <Logout/>
      </UserDataProvider>
    )
  }
}

export default App;
