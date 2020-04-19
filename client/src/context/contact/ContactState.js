import React, { useReducer } from "react";
import { v4 as uuidv4 } from "uuid";
import ContactContext from "./contactContext";
import contactReducer from "./contactReducer";
import {
    ADD_CONTACT,
    DELETE_CONTACT,
    SET_CURRENT,
    CLEAR_CURRENT,
    UPDATE_CONTACT,
    FILTER_CONTACTS,
    CLEAR_FILTER,
} from "../types";

const ContactState = ({ children }) => {
    const initialState = {
        contacts: [
            {
                id: 1,
                name: "Jack Bawer",
                email: "jack@gmail.com",
                phone: "111-111-1111",
                type: "personal",
            },
            {
                id: 2,
                name: "Sarah John",
                email: "sarah@gmail.com",
                phone: "222-222-2222",
                type: "personal",
            },
            {
                id: 3,
                name: "Bob Foden",
                email: "bob@gmail.com",
                phone: "333-333-3333",
                type: "professional",
            },
        ],
    };

    const [state, dispatch] = useReducer(contactReducer, initialState);

    // Add contact
    const addContact = (contact) => {
        contact.id = uuidv4();
        dispatch({ type: ADD_CONTACT, payload: contact });
    };

    // Delete contact
    const deleteContact = (id) => {
        dispatch({ type: DELETE_CONTACT, payload: id });
    };
    // Set Current contact

    // Clear Current contact

    // Update contact

    // Filter contact

    // Clear Filter

    return (
        <ContactContext.Provider value={{ contacts: state.contacts, addContact, deleteContact }}>
            {children}
        </ContactContext.Provider>
    );
};

export default ContactState;
