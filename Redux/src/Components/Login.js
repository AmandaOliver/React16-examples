import React, { Component } from 'react'
import { handleLogin } from '../actions'
import { connect } from 'react-redux'
import { Formik, Form, Field } from "formik"

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
        const { handleLogin } = this.props
        return (
            <div className='form'>
                <h2>User Log In</h2>
                <Formik
                    onSubmit={values => handleLogin(values.username)}
                    initialValues={{
                        username: '',
                        password: ''
                    }}
                    render={(props) => this.renderForm(props)}
                />
            </div>
        )
    }
}

export default connect(null, {handleLogin})(Login)
