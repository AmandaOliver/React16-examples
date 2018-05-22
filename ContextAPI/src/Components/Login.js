import React, { Component } from 'react';
import { Formik, Form, Field } from "formik";
import { Provider, Consumer } from '../Contexts/UserContext';

/**
 * Component that renders the form to log in
 */
class Login extends Component {
    renderForm({ handleChange, values }) {
        return (
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
                    value={values.user} />
                <span className='label'>Password:</span>
                <Field
                    className='field'
                    type="password"
                    name="password"
                    placeholder="Password"
                    onChange={handleChange}
                    required
                    value={values.password}
                    autoComplete="current-password" />
                <button className='login' type="submit">
                    Log In
                </button>
            </Form>
        )
    }

    render() {
        return (
            <Consumer>
                {({ handleLogin }) => (
                    <div className='form'>
                        <h2>User Log In</h2>
                        <Formik
                            onSubmit={values => 
                                handleLogin(values.username)
                            }
                            initialValues={{
                                username: '',
                                password: ''
                            }}
                            render={(props) => this.renderForm(props)}
                        />
                    </div>
                )}
           </Consumer>    
        )
    }
}

export default Login;