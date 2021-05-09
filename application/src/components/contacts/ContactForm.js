import React, { useContext, useEffect, useState } from 'react';

import ContactContext from "../../context/contact/contactContext";

const ContactForm = () => {

    const contactContext = useContext(ContactContext);

    const { addContact, current, clearCurrent, updateContact } = contactContext;

    useEffect(() => {
        if (current !== null) {
            setContact(current);
        } else {
            setContact({
                name: '',
                email: '',
                phone: '',
                type: 'personal'
            }); // Empty the previous form values
        }
    }, [contactContext, current]);

    const [contact, setContact] = useState({
        name: '',
        email: '',
        phone: '',
        type: 'personal'
    });

    const { name, email, phone, type } = contact;

    const onChange = event => setContact({
        ...contact,
        [event.target.name]: event.target.value
    });

    const onSubmit = event => {
        event.preventDefault();

        if (current === null) {
            addContact(contact);
        } else {
            updateContact(contact)
        }
        clearAll();
    }

    // Clear current state values, resulting, clearing Input Fields values
    const clearAll = () => {
        clearCurrent();
    }

    return (
        <form onSubmit={onSubmit}>
            <div className="shadow sm:rounded-md sm:overflow-hidden">
                <div className="px-4 py-5 bg-white space-y-6 sm:px-4 rounded">

                    <h1 className="order-1 text-gray-900 text-3xl font-extrabold tracking-tight">{current ? 'Edit Contact' : 'Add Contact'}</h1>

                    <div className="grid">
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                            Name
                        </label>
                        <div className="mt-1 flex rounded-md shadow-sm">
                            <input
                                type="text"
                                name="name"
                                id="name"
                                className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-md sm:text-sm border-gray-300"
                                placeholder="John Doe"
                                value={name}
                                onChange={onChange}
                            />
                        </div>
                    </div>

                    <div className="grid">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                            Email
                        </label>
                        <div className="mt-1 flex rounded-md shadow-sm">
                            <input
                                type="text"
                                name="email"
                                id="email"
                                className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-md sm:text-sm border-gray-300"
                                placeholder="example@mail.com"
                                value={email}
                                onChange={onChange}
                            />
                        </div>
                    </div>

                    <div className="grid">
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                            Phone Number
                        </label>
                        <div className="mt-1 flex rounded-md shadow-sm">
                            <input
                                type="text"
                                name="phone"
                                id="phone"
                                className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-md sm:text-sm border-gray-300"
                                placeholder="XXXX-XXX-XXX"
                                value={phone}
                                onChange={onChange}
                            />
                        </div>
                    </div>

                    <div className="grid">
                        <div>
                            <legend className="block text-sm font-medium text-gray-700">Contact Type</legend>
                        </div>
                        <div className="mt-4 flex flex-row">
                            <div className="flex items-center mr-4">
                                <input
                                    id="push_everything"
                                    name="type"
                                    type="radio"
                                    className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                                    value={'personal'}
                                    checked={type === 'personal'}
                                    onChange={onChange}
                                />
                                <label htmlFor="push_everything" className="ml-3 block text-sm font-medium text-gray-700">
                                    Personal
                                </label>
                            </div>
                            <div className="flex items-center">
                                <input
                                    id="push_email"
                                    name="type"
                                    type="radio"
                                    className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                                    value={'professional'}
                                    checked={type === 'professional'}
                                    onChange={onChange}
                                />
                                <label htmlFor="push_email" className="ml-3 block text-sm font-medium text-gray-700">
                                    Professional
                                </label>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="px-4 py-3 bg-gray-50 sm:px-6">
                    <button
                        type="submit"
                        className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        {current ? 'Update Contact' : 'Add Contact'}
                    </button>
                    {current && <button
                        className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                        onClick={clearAll}
                    >
                        Clear
                    </button>}
                </div>
            </div>
        </form>
    );
};

export default ContactForm;
