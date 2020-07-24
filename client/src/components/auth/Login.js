import React, { Fragment, useContext, useEffect } from 'react';
import { Formik, Form } from 'formik';

import AlertContext from '../../context/alert/alertContext';
import AuthContext from '../../context/auth/authContext';

import { loginSchema } from 'utils/validationSchema';

import doAlert from "utils/doAlert";

import { TextInput } from '../Input';
import Button from 'components/Button';
import { ButtonSpinner } from 'components/loader';

const Login = (props) => {
    const alertContext = useContext(AlertContext);
    const authContext = useContext(AuthContext);

    const { setAlert } = alertContext;
    const { login, error, clearErrors, isAuthenticated } = authContext;

    useEffect(() => {
        if (isAuthenticated) {
            props.history.push('/');
        }

        if (error === 'Invalid Credentials') {
            doAlert(error, 'error')
            clearErrors();
        }
        // eslint-disable-next-line
    }, [error, isAuthenticated, props.history]);

    const initialValues = {
        email: '',
        password: '',
    };

    const handleSubmit = (values, setSubmitting) => {
        setSubmitting(true);
        login({ ...values });
        setSubmitting(false);
    };

    return (
        <Fragment>
            <div className='form-container'>
                <h1>
                    <span className='text-primary'>Login</span>
                </h1>
                <Formik
                    initialValues={initialValues}
                    validationSchema={loginSchema}
                    onSubmit={(values, { setSubmitting }) => {
                        handleSubmit(values, setSubmitting);
                    }}>
                    {({ isSubmitting, dirty, isValid }) => (
                        <Form>
                            <TextInput name='email' label='Email' placeholder='Enter your email' />
                            <TextInput
                                name='password'
                                type='password'
                                label='Password'
                                placeholder='Enter your password'
                            />
                            <Button size='large' type='submit' disabled={!dirty || !isValid || isSubmitting}>
                                {isSubmitting ? (
                                    <p>
                                        <ButtonSpinner />
                                    </p>
                                ) : (
                                    'Login'
                                )}
                            </Button>
                        </Form>
                    )}
                </Formik>
            </div>
        </Fragment>
    );
};

export default Login;
