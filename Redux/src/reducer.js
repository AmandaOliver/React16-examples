const initialState = {
    logged: false,
    currentUser: '',
    userList: []
}

export default (action, state = initialState) => {
	switch (action.type) {
        case 'USER_LOGIN':
            return {
                ...state,
                logged: true,
                currentUser: action.username
            };
        case 'USER_LOGOUT':
            const { userList } = state
            const { username } = action
            return {
                logged: false,
                currentUser: '',
                userList: !userList.includes(username) ? userList.concat(username) : userList,
            }
        default:
            return state
    }
}
