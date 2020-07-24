import React, { useState, useContext, useEffect } from 'react';
import ContactContext from '../../context/contact/contactContext';

const ContactForm = () => {
    const contactContext = useContext(ContactContext);

    const { addContact, updateContact, current, clearCurrent } = contactContext;

    useEffect(() => {
        if (current !== null) {
            setContact(current);
        } else {
            setContact({
                name: '',
                email: '',
                phone: '',
                type: 'personal',
            });
        }
    }, [contactContext, current]);

    const [contact, setContact] = useState({
        name: '',
        email: '',
        phone: '',
        type: 'personal',
    });

    const { name, email, phone, type } = contact;

    const onChange = (e) => setContact({ ...contact, [e.target.name]: e.target.value });

    const onSubmit = (e) => {
        e.preventDefault();
        if (current === null) {
            addContact(contact);
        } else {
            updateContact(contact);
        }

        // setContact({
        //     name: "",
        //     email: "",
        //     phone: "",
        //     type: "personal",
        // });
        clearAll();
    };

    const clearAll = () => {
        clearCurrent();
    };

    return (
        <form onSubmit={onSubmit}>
            <h2 className='text-primary'>{current ? 'Edit Contact' : 'Add Contact'}</h2>
            <div className='mb-3'>
                <input type='text' placeholder='Name' name='name' value={name} onChange={onChange} />
            </div>
            <div className='mb-3'>
                <input type='email' placeholder='Email' name='email' value={email} onChange={onChange} />
            </div>
            <div className='mb-3'>
                <input type='text' placeholder='Phone' name='phone' value={phone} onChange={onChange} />
            </div>
            <h6>Contact Type</h6>
            <div className='mb-3'>
                <input type='radio' name='type' value='personal' checked={type === 'personal'} onChange={onChange} />{' '}
                Personal{' '}
                <input
                    type='radio'
                    name='type'
                    value='professional'
                    checked={type === 'professional'}
                    onChange={onChange}
                />{' '}
                Professional
            </div>

            <div>
                <input
                    type='submit'
                    value={current ? 'Update Contact' : 'Add Contact'}
                    className='btn btn-primary btn-block'
                />
            </div>
            {current && (
                <div>
                    <button className='btn btn-light btn-block' onClick={clearAll}>
                        Clear
                    </button>
                </div>
            )}
        </form>
    );
};

export default ContactForm;
