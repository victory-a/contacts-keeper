import * as Yup from 'yup';

export const loginSchema = Yup.object().shape({
    email: Yup.string().email('enter a valid email').required('email is required'),
    password: Yup.string().required('password is required'),
});

export const registerSchema = Yup.object().shape({
    name: Yup.string()
        .min(4, 'should be greater than 4')
        .max(20, 'cannot exceed 20 characters')
        .required('name is required'),
    email: Yup.string().email('enter a valid email').required('email is required'),
    password: Yup.string()
        .min(6, 'must be up to 4 characters')
        .max(255, 'cannot exceed 255')
        .required('password is required'),
    confirmPassword: Yup.string()
        .oneOf([Yup.ref('password')], 'Password must match')
        .required('Confirm password is required'),
});
