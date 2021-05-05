import React, { useContext } from 'react';

import ContactContext from '../../context/contact/contactContext';
import ContactItem from "./ContactItem";

const Contacts = () => {

    const contactContext = useContext(ContactContext);

    const { contacts, filtered } = contactContext;

    if (contacts.length === 0) return <h4>Please add a contact.</h4>;

    return (
        <>
            <div className="mt-5 md:mt-0">
                <ul className="grid grid-cols-2 gap-2">

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
