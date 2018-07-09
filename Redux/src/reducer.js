const initialState = {
    logged: false,
    currentUser: '',
    previousUsersList: []
}

export default (state = initialState, action) => {
	switch (action.type) {
        case 'USER_LOGIN':
            return {
                ...state,
                logged: true,
                currentUser: action.username
            };
        case 'USER_LOGOUT':
            const { previousUsersList } = state
            const { username } = action
            return {
                logged: false,
                currentUser: '',
                previousUsersList: !previousUsersList.includes(username) ? previousUsersList.concat(username) : previousUsersList,
            }
        default:
            return state
    }
}
