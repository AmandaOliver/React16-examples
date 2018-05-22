import React, { Component } from 'react';
import { connect } from 'react-redux';


class UserList extends Component {
    _getCustomUserList() {
        let customUserList = []
        this.props.userList.reverse().map(user => {
            if (user !== this.props.username) {
                customUserList.push(user);
            }
            return user;
        })
        return customUserList;
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
        const { username } = this.props;
        const customUserList = this._getCustomUserList();
        return (
            <div className="userlist">
                <h1>{`Welcome ${username}!`}</h1>
                {customUserList.length > 0 ? this.renderList(customUserList) : this.renderMessage()}  
            </div>    
        )
    }
}

const mapStateToProps = state => ({
    userList: state.userList,
    username: state.currentUser
})

export default connect(mapStateToProps)(UserList)
