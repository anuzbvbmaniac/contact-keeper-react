import React from 'react';
import Contacts from "../contacts/Contacts";
import ContactForm from "../contacts/ContactForm";

const Home = () => {
    return (
        <div className={'max-w-7xl mx-auto py-12 sm:px-6 lg:px-8'}>
            <div className={'grid grid-cols-2 gap-6'}>
                <ContactForm/>
                <Contacts/>
            </div>
        </div>
    )
};

export default Home;
