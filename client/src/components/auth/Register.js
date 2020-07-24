import React, { Fragment, useContext, useEffect } from 'react';
import { Formik, Form } from 'formik';

import AlertContext from '../../context/alert/alertContext';
import AuthContext from '../../context/auth/authContext';

import doAlert from "utils/doAlert";

import { registerSchema } from 'utils/validationSchema';
import { TextInput } from '../Input';
import Button from 'components/Button';
import { ButtonSpinner } from 'components/loader';

const Register = (props) => {
    const alertContext = useContext(AlertContext);
    const authContext = useContext(AuthContext);

    const { setAlert } = alertContext;
    const { register, error, clearErrors, isAuthenticated } = authContext;

    useEffect(() => {
        if (isAuthenticated) {
            props.history.push('/');
        }

        if (error === 'User already exists') {
            doAlert(error, 'error')
            clearErrors();
        }
        // eslint-disable-next-line
    }, [error, isAuthenticated, props.history]);

    const initialValues = {
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
    };

    const handleSubmit = (values, setSubmitting) => {
        setSubmitting(true);
        register({ ...values });
        setSubmitting(false);

    };

    return (
        <Fragment>
            <div className="form-container">
            <h1>
                <span className="text-primary">Register</span>
            </h1>
                <Formik
                    initialValues={initialValues}
                    validationSchema={registerSchema}
                    onSubmit={(values, { setSubmitting }) => {
                        handleSubmit(values, setSubmitting);
                    }}>
                    {({ isSubmitting }) => (
                        <Form>
                            <TextInput name='name' label='name' placeholder='Enter your name' />
                            <TextInput name='email' label='Email' placeholder='Enter your email' />
                            <TextInput
                                name='password'
                                type='password'
                                label='Password'
                                placeholder='Enter your password'
                            />
                            <TextInput
                                name='confirmPassword'
                                type='password'
                                label='Confirm Password'
                                placeholder='Enter your password'
                            />
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

export default Register;
