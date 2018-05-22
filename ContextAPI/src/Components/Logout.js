import React, { Component } from 'react'
import UserDataContext from '../UserDataContext';

export default class Logout extends Component {
  render() {
    return (
      <UserDataContext.Consumer>
            {({currentUser}) => {
                return <button className='logout'>{`Logout ${currentUser}`}</button>
            }}
      </UserDataContext.Consumer>
    );
  }
}
