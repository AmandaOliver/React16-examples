import React, { Component } from 'react';
import Login from './Login'
import UserList from './UserList';
import UserDataContext from '../UserDataContext';

export default class Content extends Component {
    render() {
        return (
            <UserDataContext.Consumer>
                {({ logged }) =>
                    !logged ? <Login /> : <UserList />
                }
            </UserDataContext.Consumer>
        )
    }
}
