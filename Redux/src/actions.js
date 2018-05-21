export function handleLogIn(user) {
    return {
      type: 'USER_LOGIN',
      user
    }
  }
export function handleLogOut(user) {
    return {
      type: 'USER_LOGOUT',
      user
    }
}
