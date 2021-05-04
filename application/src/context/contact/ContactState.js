import React, { useReducer } from 'react';
import uuid from 'uuid';
import ContactContext from './contactContext';
import contactReducer from './contactReducer';

import { FILTER_CONTACTS, ADD_CONTACT, DELETE_CONTACT, UPDATE_CONTACT, SET_CURRENT, CLEAR_CURRENT, CLEAR_FILTER } from "../types";

const ContactState = props => {

    const initialState = {
        contacts: [
            {
                id: 1,
                name: 'Anuz Pandey',
                email: 'anuzbvbmaniac123@gmail.com',
                phone: '111-111-1111',
                type: 'personal'
            },
            {
                id: 2,
                name: 'Monkey D. Luffy',
                email: 'monkey.luffy@gmail.com',
                phone: '500-000-000',
                type: 'professional'
            },
            {
                id: 3,
                name: 'Roronoa Zero',
                email: 'r.zoro@gmail.com',
                phone: '320-000-000',
                type: 'personal'
            },
        ],
        current: null,
        filtered: null,
    };

    const [state, dispatch] = useReducer(contactReducer, initialState);

    // Add Contact
    const addContact = contact => {
        contact.id = uuid.v4();
        dispatch({
            type: ADD_CONTACT,
            payload: contact
        });
    }

    // Delete Contact
    const deleteContact = id => {
        dispatch({
            type: DELETE_CONTACT,
            payload: id,
        });
    }

    // Set Current Contact
    const setCurrent = contact => {
        dispatch({
            type: SET_CURRENT,
            payload: contact,
        });
    }

    // Clear Current Contact
    const clearCurrent = () => {
        dispatch({
            type: CLEAR_CURRENT,
        });
    }

    // Update Contact
    const updateContact = contact => {
        dispatch({
            type: UPDATE_CONTACT,
            payload: contact,
        });
    }

    // Filter Contact
    const filterContacts = keywords => {
        dispatch({
            type: FILTER_CONTACTS,
            payload: keywords,
        });
    }

    // Clear Filter
    const clearFilter = () => {
        dispatch({
            type: CLEAR_FILTER,
        })
    }

    return (
        <ContactContext.Provider value={{
            contacts: state.contacts,
            current: state.current,
            filtered: state.filtered,
            addContact,
            deleteContact,
            setCurrent,
            clearCurrent,
            updateContact,
            filterContacts,
            clearFilter,
        }}>
            {props.children}
        </ContactContext.Provider>
    );
}

export default ContactState;

