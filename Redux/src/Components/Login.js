import React, { Component } from 'react';
import { handleLogIn } from '../actions';
import { connect } from 'react-redux';
import { Formik, Form, Field } from "formik";

/**
 * Component that renders the form to log in
 */
class Login extends Component {
    render() {
        const { handleLogIn } = this.props;
        return (
            <div className='form'>
                <h2>User Log In</h2>
                <Formik
                    onSubmit={values =>
                        handleLogIn(values)
                    }
                    initialValues={{
                        username: '',
                        password: ''
                    }}
                    render={({ handleChange, values }) =>
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
                    }
                />
            </div>
        )
    }
}

export default connect(null, {handleLogIn})(Login);
