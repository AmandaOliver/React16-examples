import React, { Component } from 'react'
import UserDataContext from '../UserDataContext';

export default class Logout extends Component {
    render() {
        return (
            <UserDataContext.Consumer>
                {({currentUser, handleLogout}) => 
                    <button className='logout' onClick={()=>handleLogout(currentUser)}>
                          Logout
                    </button>
                }
            </UserDataContext.Consumer>
        );
    }
}
