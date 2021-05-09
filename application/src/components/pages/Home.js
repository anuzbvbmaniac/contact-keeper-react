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
        <div className={'lg:max-w-7xl md:w-full mx-auto lg:py-12 md:px-6 md:px-8 px-4 pt-6'}>
            <div className={'grid lg:grid-cols-2 md:gap-6 md:grid-cols-1 md:gap-0 lg:p-0 sm:px-4'}>
                <ContactForm/>
                <Contacts/>
            </div>
        </div>
    )
};

export default Home;
