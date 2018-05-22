import React, { Component } from 'react';
import Login from './Login'
import UserList from './UserList';
import { Provider, Consumer } from '../Contexts/UserContext';

export default class Content extends Component {
    render() {
        return (
            <Consumer>
                {({ logged }) => 
                    // !logged ? <Login /> : <UserList />
                    <Login/>
                }
            </Consumer>
        )
    }
}