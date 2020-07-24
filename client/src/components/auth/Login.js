import React, { Fragment, useContext, useEffect } from 'react';
import { Formik, Form } from 'formik';

import AlertContext from '../../context/alert/alertContext';
import AuthContext from '../../context/auth/authContext';

import { loginSchema } from 'utils/validationSchema';

import { TextInput } from '../Input';
import Button from 'components/Button';
import { ButtonSpinner } from "components/loader";



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
            setAlert(error, 'danger');
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
    };

    return (
        <Fragment>
            <div className={'login-form-container'}>
            <Formik
                initialValues={initialValues}
                validationSchema={loginSchema}
                onSubmit={(values, { setSubmitting }) => {
                    handleSubmit(values, setSubmitting);
                }}>
                {({ isSubmitting }) => (
                    <Form>
                        <TextInput name='email' label='Email' placeholder='Enter your full email' />
                        <TextInput name='password' type='password' label='Password' placeholder='Enter your password' />
                        <Button size='large' type='submit' disabled={isSubmitting}>
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
