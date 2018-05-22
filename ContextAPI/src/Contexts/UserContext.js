import React, { Component, createContext } from 'react';

export const {Consumer, Provider} = createContext();

export class UserDataProvider extends Component {
    state = {
        logged: false,
        // currentUser: '',
        // userList: []
    }

    // this was our action USER_LOGIN in the redux version
    handleLogin = username => {
        this.setState({logged: true})
        // let newState = {
        //   userList: this.state.userList,
        //   logged: true,
        //   currentUser: username
        // };
        // this.setState(newState);
    };

    //this was our action USER_LOGOUT in the redux version
    handleLogout = () => {
        this.setState({ logged: false })
        // let newState = {
        //   userList: this.state.userList,
        //   logged: false
        // };
        // if (!newState.userList.includes(this.state.currentUser)) {
        //   newState.userList.push(this.state.currentUser);
        // };
        // this.setState(newState);
    };
    
    render() {
        return (
            <Provider value={{
                ...this.state,
                handleLogin: this.handleLogin,
                handleLogout: this.handleLogout
            }}>
                {this.props.children}
            </Provider>
        )
    }
}

