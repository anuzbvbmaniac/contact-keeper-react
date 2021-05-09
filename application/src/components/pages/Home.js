import React, { useContext, useEffect } from 'react';
import Contacts from "../contacts/Contacts";
import ContactForm from "../contacts/ContactForm";
import AuthContext from "../../context/auth/authContext";

const Home = () => {

    const authContext = useContext(AuthContext);

    useEffect(() => {
        authContext.loadUser();
        // eslint-disable-next-line
    }, []);

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
