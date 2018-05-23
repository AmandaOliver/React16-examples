import React, { Component } from 'react';
import Login from './Login'
import UserList from './UserList';
import UserDataContext from '../UserDataContext';

export default class Content extends Component {
    render() {
        return (
            // consumer uses render-props approach, so it receives a function as a child that receives the global state as a param
            // in this example we are deconstructing it for simplicity
            <UserDataContext.Consumer>
                {({ logged }) =>
                    !logged ? <Login /> : <UserList />
                }
            </UserDataContext.Consumer>
        )
    }
}
