import React, { useContext, useRef, useEffect } from 'react';

import ContactContext from "../../context/contact/contactContext";

const ContactFilter = () => {

    const contactContext = useContext(ContactContext);

    const { filterContacts, clearFilter, filtered } = contactContext;

    const keywords = useRef('');

    useEffect(() => {
        if (filtered === null) {
            keywords.current.value = '';
        }
    }, [contactContext]);

    const onChange = (event) => {
        if (keywords.current.value !== '') {
            filterContacts(event.target.value)
        } else {
            clearFilter();
        }
    }

    return (
        <form>
            <input type="text" ref={keywords} placeholder={'Search Contacts...'} onChange={onChange}/>
        </form>
    );
};

export default ContactFilter;
