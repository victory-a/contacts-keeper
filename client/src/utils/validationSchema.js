import * as Yup from 'yup';

export const loginSchema = Yup.object().shape({
    email: Yup.string().email('enter a valid email').required('email is required'),
    password: Yup.string().min(4, 'must be up to 4 characters').required('password is required'),
});


export const registerSchema = Yup.object().shape({
    name: Yup.string().min(4, 'should be greater than 4').max(20, 'cannot exceed 20 characters').required('email is required'),
    email: Yup.string().email('enter a valid email').required('email is required'),
    password: Yup.string().min(4, 'must be up to 4 characters').max(255, 'cannot exceed 255').required('password is required'),
});
