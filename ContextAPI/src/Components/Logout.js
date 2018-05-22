import React, { Component } from 'react'
import { Provider, Consumer } from '../Contexts/UserContext';

export default class Logout extends Component {
    render() {
        return (
            <Consumer>
                {({ handleLogout, currentUser }) =>
                    <button className='logout' onClick={()=>handleLogout()}>Logout</button>
                }
            </Consumer>
        )
    }
}

