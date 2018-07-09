import React from 'react'
import Login from './Login'
import PreviousUsersList from './PreviousUsersList'
import UserDataContext from '../UserDataContext'
import ErrorBoundary from './ErrorBoundary'

const fail = () => {
    throw new Error('I am evil!!');
}

// consumer uses render-props approach, so it receives a function as a child that receives the global state as a param
// in this example we are deconstructing it for simplicity
// As we are using Context API there is no need to pass down to Login the handle Login method as a prop
export default () => (
    <ErrorBoundary>
        <UserDataContext.Consumer>
            {({ logged, shouldFail }) =>{
                shouldFail && fail();
                return !logged ? <Login /> : <PreviousUsersList />
            }}
        </UserDataContext.Consumer>
    </ErrorBoundary>

)
