import React, { Fragment, useContext } from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/solid";

import AuthContext from "../../context/auth/authContext";
import ContactContext from "../../context/contact/contactContext";

const Navbar = () => {

    const authContext = useContext(AuthContext);
    const contactContext = useContext(ContactContext);

    const { isAuthenticated, logout, user } = authContext;
    const { clearContacts } = contactContext;

    const onLogout = () => {
        logout();
        clearContacts();
    }

    const authLinks = (
        <div className="hidden md:block">
            <div className="ml-4 flex items-center md:ml-6">

                {/* Profile dropdown */}
                <Menu as="div" className="ml-3 relative">
                    {({ open }) => (
                        <>
                            <div>
                                <Menu.Button className="max-w-xs flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white">
                                    <span className="sr-only">Open user menu</span>
                                    <p>{user && user.name} <ChevronDownIcon className="w-5 h-5 float-right"/></p>
                                </Menu.Button>
                            </div>
                            <Transition
                                show={open}
                                as={Fragment}
                                enter="transition ease-out duration-100"
                                enterFrom="transform opacity-0 scale-95"
                                enterTo="transform opacity-100 scale-100"
                                leave="transition ease-in duration-75"
                                leaveFrom="transform opacity-100 scale-100"
                                leaveTo="transform opacity-0 scale-95"
                            >
                                <Menu.Items
                                    static
                                    className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                                >
                                    <Link
                                        to="/"
                                        className={'block px-4 py-2 text-sm text-gray-700'}
                                    >
                                        Profile
                                    </Link>
                                    <a
                                        href="#!"
                                        onClick={onLogout}
                                        className={'block px-4 py-2 text-sm text-gray-700'}
                                    >
                                        Logout
                                    </a>
                                </Menu.Items>
                            </Transition>
                        </>
                    )}
                </Menu>
            </div>
        </div>
    );

    const guestLinks = (
        <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
            <Link
                to={'/login'}
                className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900"
            >
                Sign in
            </Link>
            <Link
                to={'/register'}
                className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
            >
                Sign up
            </Link>
        </div>
    );

    const authMobileLink = (
        <div className="pt-4 pb-3 border-t border-gray-700">
            <div className="flex items-center px-5">
                <div>
                    <div className="text-base font-medium leading-none text-black">{user && user.name}</div>
                    <div className="text-sm font-medium leading-none text-gray-400">{user && user.email}</div>
                </div>
            </div>
            <div className="mt-3 px-2 space-y-1">
                <Link
                    to="/"
                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700"
                >
                    Profile
                </Link>
                <a
                    href="#!"
                    onClick={onLogout}
                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700"
                >
                    Logout
                </a>
            </div>
        </div>
    );

    const guestMobileLink = (
        <div className="pb-3 border-gray-700">
            <div className="px-2 space-y-1">
                <Link
                    to="/login"
                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-indigo-700"
                >
                    Sign in
                </Link>
                <Link
                    to="/register"
                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-indigo-700"
                >
                    Sign up
                </Link>
            </div>
        </div>
    );

    return (
        <Disclosure as="nav" className="bg-white">
            {({ open }) => (
                <>
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex items-center justify-between h-16">
                            <div className="flex items-center">
                                <div className="flex-shrink-0">
                                    <div className="flex">
                                        <img
                                            className="h-8 w-8"
                                            src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                                            alt="Workflow"
                                        />
                                        <p className={'ml-3 text-lg text-indigo-500 font-bold mt-0.5'}>Contact <span className={'text-lg text-indigo-500 font-'}>Keeper</span></p>
                                    </div>
                                </div>
                            </div>

                            {isAuthenticated ? authLinks : guestLinks}


                            <div className="-mr-2 flex md:hidden">
                                {/* Mobile menu button */}
                                <Disclosure.Button className="bg-white inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-indigo-700 focus:outline-none focus:ring-white">
                                    <span className="sr-only">Open main menu</span>
                                    {open ? (
                                        <XIcon className="block h-6 w-6" aria-hidden="true"/>
                                    ) : (
                                        <MenuIcon className="block h-6 w-6" aria-hidden="true"/>
                                    )}
                                </Disclosure.Button>
                            </div>

                        </div>
                    </div>

                    <Disclosure.Panel className="md:hidden">
                        {isAuthenticated ? authMobileLink : guestMobileLink}
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    );
};

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string,
}

Navbar.defaultProps = {
    title: 'Contact Keeper',
    icon: 'fas fa-id-card-alt'
}

export default Navbar;
