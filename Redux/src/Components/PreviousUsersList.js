import React, { Component } from 'react'
import { connect } from 'react-redux'

class PreviousUsersList extends Component {
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
            <h4>Visit registry: </h4>
            <ul>
                {customPreviousUsersList.reverse()}
            </ul>
        </div>
    )

    render() {
        const { currentUser, previousUsersList } = this.props
        return (
            <div className="userlist">
                <h1>{`Welcome ${currentUser}!`}</h1>
                {this.renderCustomPreviousUsersList(previousUsersList, currentUser)}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    previousUsersList: state.previousUsersList,
    currentUser: state.currentUser
})

export default connect(mapStateToProps)(PreviousUsersList)
