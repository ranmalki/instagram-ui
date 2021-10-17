import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { registerSchema } from './register.schema';
import './Register.scss';
import {register} from '../services/user.service'

function Register() {
    async function submit(values) {
        try {
            const user = await register(values);
            console.log(user);
        } catch(e) {
            console.log(e);
        }
        
    }

    return (
     <div className='register'>
        <Formik  initialValues={{ username: '', email: '', password: '' }}
                 validationSchema={registerSchema}
                 onSubmit={submit}>
            <Form className="form">
                <h1>Registration</h1>

                <div className="entry">
                <label className="label" htmlFor="username"> Username:</label>
                <Field className="field" name='username' id="username" />
                <div className='error'>
                <ErrorMessage className="error" name="username"/>
                </div>
                </div>

                <div className="entry">
                <label className="label" htmlFor="email"> Email:</label>
                <Field className="field" name='email' type='email' id="email" />
                <div className='error'>
                <ErrorMessage className='error' name="email" />
                </div>
                </div>

                <div className="entry">
                <label className="label" htmlFor="password"> Password:</label>
                <Field className="field" name='password' type='password' id='password' />
                <div className='error'>
                <ErrorMessage className='error' name="password" />
                </div>
                </div>

                <button type="submit" className='button'>Register</button>
            </Form>
        </Formik> 
     </div>
    );
}

export default Register;