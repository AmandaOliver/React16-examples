import React, { Component } from 'react';
import UserDataContext from '../UserDataContext';


export default class UserList extends Component {
    renderCustomUserList(userList, currentUser) {
        let customUserList = []
        userList.reverse().map(user => {
            if (user !== currentUser) {
                customUserList.push(user);
            }
            return user;
        })
        return customUserList.length > 0 ? this.renderList(customUserList) : this.renderMessage();
    }
    renderList(customUserList) {
        return (
            <div>
                <h4>You need to be faster, this people were here before you: </h4>
                <ul>
                    {customUserList.map(user => <li key={user}>{user}</li>)}
                </ul>
            </div>
        )
    }
    renderMessage() {
        return (
            <div>
                <h4>You are the first one, congrats =) </h4>
            </div>
        )
    }
    render() {
        return (
            <UserDataContext.Consumer>
                {({ userList, currentUser }) =>
                    <div className="userlist">
                        <h1>{`Welcome ${currentUser}!`}</h1>
                        {this.renderCustomUserList(userList, currentUser)}
                    </div>
                }
            </UserDataContext.Consumer>

        )
    }
}
