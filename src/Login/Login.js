import React, { useContext } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import {loginSchema} from './login.schema'
import { login, me } from '../services/user.service';
import { UserContext } from '../App';
import { useHistory } from 'react-router-dom';

function Login() {
    const history = useHistory();
    const { setUser } = useContext(UserContext);

    async function submit(values) {
        try {
            const { token } = await login(values);
            localStorage.setItem('token', token);
            const loggedUser = await me();
            setUser(loggedUser);
            history.push('/');
        } catch (e) {
            console.log(e);
        }
    }
    return (
        <div className="Register">
            <h1 className="Register__title">Sign In</h1>
            <Formik 
                initialValues={{ username: '', password: '' }}
                validationSchema={loginSchema}
                onSubmit={submit}>
                <Form>
                    <div className="form-group">
                        <label htmlFor="username">Username:</label>
                        <Field id="username" name="username" placeholder="Username" />
                        <div className="error">
                            <ErrorMessage name="username" />
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="Password">Password:</label>
                        <Field type="password" id="password" name="password" placeholder="Password" />
                        <div className="error">
                            <ErrorMessage name="password" />
                        </div>
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn-register">Sign In</button>
                    </div>
                </Form>
            </Formik>
        </div>
    )

}

export default Login;