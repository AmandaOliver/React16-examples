import React, { Component } from 'react'
import UserDataContext from '../UserDataContext'

export default class UserList extends Component {
    renderCustomUserList(userList, currentUser) {
        const customUserList = userList.reduce((newUserList, user) => {
            if (user !== currentUser)
                newUserList.push(<li key={user}>{user}</li>)
            return newUserList
        }, [])
        
        return customUserList.length > 0
            ? this.renderList(customUserList)
            : <h4>You are the first one, congrats =) </h4>
    }

    renderList = customUserList => (
        <div>
            <h4>You need to be faster, this people were here before you: </h4>
            <ul>
                {customUserList.reverse()}
            </ul>
        </div>
    )

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
