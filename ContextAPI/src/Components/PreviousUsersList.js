import React, { Component } from 'react';
import UserDataContext from '../UserDataContext';

export default class PreviousUsersList extends Component {
    renderCustomPreviousUsersList(previousUsersList, currentUser) {
        const customPreviousUsersList = previousUsersList.reduce((newPreviousUsersList, user) => {
            newPreviousUsersList.push(<li key={user}>{user !== currentUser ? user : 'You'}</li>)
            return newPreviousUsersList
        }, [])

        return customPreviousUsersList.length > 0
            ? this.renderList(customPreviousUsersList)
            : <h4>You are the first one, congrats =) </h4>
    }

    renderList = customPreviousUsersList => (
        <div>
            <h4>You need to be faster, this people were here before you: </h4>
            <ul>
                {customPreviousUsersList.reverse()}
            </ul>
        </div>
    )

    render() {
        return (
            <UserDataContext.Consumer>
                {({ previousUsersList, currentUser }) =>
                    <div className="userlist">
                        <h1>{`Welcome ${currentUser}!`}</h1>
                        {this.renderCustomPreviousUsersList(previousUsersList, currentUser)}
                    </div>
                }
            </UserDataContext.Consumer>
        )
    }
}
