import React, { useContext, useEffect } from 'react';

import ContactContext from '../../context/contact/contactContext';
import ContactItem from "./ContactItem";
import Spinner from "../layout/Spinner";

const Contacts = () => {

    const contactContext = useContext(ContactContext);

    const { contacts, filtered, getContacts, loading } = contactContext;

    useEffect(() => {
        getContacts();
        // eslint-disable-next-line
    }, []);

    if (contacts !== null && contacts.length === 0 && !loading) return (
        <div className="mt-5 md:mt-0">
            <div className="shadow sm:rounded-md sm:overflow-hidden">
                <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
                    <h1>No Contacts found. Please add a contact.</h1>
                </div>
            </div>
        </div>
    );

    return (
        <>
            {contacts !== null && !loading ? (
                <div className="mt-5 md:mt-0">
                    <ul className="grid">
                        {filtered !== null
                            ? filtered.map((contact) => (
                                <ContactItem contact={contact} key={contact._id}/>
                            ))
                            : contacts.map((contact) => (
                                <ContactItem contact={contact} key={contact._id}/>
                            ))
                        }
                    </ul>
                </div>
            ) : <Spinner/>}
        </>
    );
};

export default Contacts;
