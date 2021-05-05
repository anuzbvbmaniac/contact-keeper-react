import React, { useContext } from 'react';

import ContactContext from '../../context/contact/contactContext';
import ContactItem from "./ContactItem";

const Contacts = () => {

    const contactContext = useContext(ContactContext);

    const { contacts, filtered } = contactContext;

    if (contacts.length === 0) return (
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
            <div className="mt-5 md:mt-0">
                <ul className="grid">

                    {filtered !== null
                        ? filtered.map((contact) => (
                            <ContactItem contact={contact} key={contact.id}/>
                        ))
                        : contacts.map((contact) => (
                            <ContactItem contact={contact} key={contact.id}/>
                        ))
                    }

                </ul>
            </div>
        </>
    );
};

export default Contacts;
