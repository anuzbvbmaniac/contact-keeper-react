import React from 'react';
import Contacts from "../contacts/Contacts";
import ContactForm from "../contacts/ContactForm";

const Home = () => {
    return (
        <>
            <div className={'grid grid-cols-2 gap-6'}>
                <ContactForm/>
                <Contacts/>
            </div>
        </>
    )
};

export default Home;
