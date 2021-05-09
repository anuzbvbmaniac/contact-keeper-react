import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import ContactContext from "../../context/contact/contactContext";
import { PencilAltIcon, TrashIcon, MailIcon, PhoneIcon } from "@heroicons/react/solid";

const ContactItem = ({ contact }) => {

    const contactContext = useContext(ContactContext);
    const { deleteContact, setCurrent, clearCurrent } = contactContext;

    const { _id, name, email, phone, type } = contact;

    const onDelete = () => {
        deleteContact(_id);
        clearCurrent();
    }

    return (
        <li className="col-span-1 bg-white rounded-lg shadow divide-y divide-gray-200 mb-3">
            <div className="w-full flex items-center justify-between p-6 space-x-6">
                <div className="flex-1 truncate">
                    <div className="flex items-center space-x-3">
                        <h3 className="text-gray-900 text-lg font-bold truncate">{name}</h3>
                        <span className={'flex-shrink-0 inline-block px-2 py-0.5 text-xs font-medium rounded-full ' + (type === 'professional' ? 'text-green-800 bg-green-100' : 'text-red-800 bg-red-100')}>
                          {type.charAt(0).toUpperCase() + type.slice(1)}
                        </span>
                    </div>

                    {email && (<p className="mt-1 text-gray-500 text-sm truncate">
                        <MailIcon className="w-5 h-5 text-gray-500 float-left mr-2" aria-hidden="true"/>{email}
                    </p>)}

                    {phone && (<p className="mt-1 text-gray-500 text-sm truncate">
                        <PhoneIcon className="w-5 h-5 text-gray-500 float-left mr-2" aria-hidden="true"/>{phone}
                    </p>)}

                </div>
            </div>
            <div>
                <div className="-mt-px flex divide-x divide-gray-200">
                    <div className="w-0 flex-1 flex">
                        <button
                            onClick={() => setCurrent(contact)}
                            className="relative -mr-px w-0 flex-1 inline-flex items-center justify-center py-3 text-sm text-gray-700 font-medium border border-green-500 rounded-bl-lg bg-green-500 hover:bg-green-600 focus:outline-none"
                        >
                            <PencilAltIcon className="w-5 h-5 text-white" aria-hidden="true"/>
                            <span className="ml-3 text-white">Edit</span>
                        </button>
                    </div>
                    <div className="-ml-px w-0 flex-1 flex">
                        <button
                            onClick={onDelete}
                            className="relative w-0 flex-1 inline-flex items-center justify-center py-3 text-sm text-gray-700 font-medium border border-red-500 rounded-br-lg hover:text-gray-500 bg-red-500 hover:bg-red-600 focus:outline-none"
                        >
                            <TrashIcon className="w-5 h-5 text-white" aria-hidden="true"/>
                            <span className="ml-3 text-white">Delete</span>
                        </button>
                    </div>
                </div>
            </div>
        </li>
    );
};

ContactItem.propTypes = {
    contact: PropTypes.object.isRequired,
}

export default ContactItem;
