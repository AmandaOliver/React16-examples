import React, { Component } from 'react'
import { Formik, Form, Field } from "formik"
import UserDataContext from '../UserDataContext'

class Login extends Component {
    renderForm = ({ handleChange, values }) => (
        <Form >
            <span className='label'>User name:</span>
            <Field
                className='field'
                type="text"
                name="username"
                placeholder="Username"
                onChange={handleChange}
                required
                autoComplete="username"
                value={values.username}
            />
            <span className='label'>Password:</span>
            <Field
                className='field'
                type="password"
                name="password"
                placeholder="Password"
                onChange={handleChange}
                required
                value={values.password}
                autoComplete="current-password"
            />
            <button className='login' type="submit">Log In</button>
        </Form>
    )

    render() {
        return (
            <UserDataContext.Consumer>
                {({ handleLogin }) => (
                    <div className='form'>
                        <h2>User Log In</h2>
                        <Formik
                            onSubmit={values => handleLogin(values.username) }
                            initialValues={{
                                username: '',
                                password: ''
                            }}
                            render={props => this.renderForm(props)}
                        />
                    </div>
                )}
           </UserDataContext.Consumer>
        )
    }
}

export default Login
