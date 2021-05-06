import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import { BellIcon } from "@heroicons/react/outline";
import { Disclosure } from "@headlessui/react";

const Navbar = () => {

    const navigation = ['Dashboard', 'Team', 'Projects', 'Calendar', 'Reports'];
    const profile = ['Your Profile', 'Settings', 'Sign out'];

    return (
        <Disclosure as="nav" className="bg-white">
            {({ open }) => (
                <>
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex items-center justify-between h-16">
                            <div className="flex items-center">
                                <div className="flex-shrink-0">
                                    <img
                                        className="h-8 w-8"
                                        src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                                        alt="Workflow"
                                    />
                                </div>
                                <div className="hidden md:block">
                                    <div className="ml-10 flex items-baseline space-x-4">
                                        <Link
                                            to="/"
                                            className="text-indigo-700 px-3 py-2 rounded-md text-sm font-medium"
                                        >
                                            Home
                                        </Link>
                                        <Link
                                            to="/about"
                                            className="text-gray-400 hover:text-indigo-700 px-3 py-2 rounded-md text-sm font-medium"
                                        >
                                            About
                                        </Link>
                                    </div>
                                </div>
                            </div>

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


                        </div>
                    </div>

                    <Disclosure.Panel className="md:hidden">
                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                            {navigation.map((item, itemIdx) =>
                                itemIdx === 0 ? (
                                    <Fragment key={item}>
                                        {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
                                        <Link to='/login' className="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium">
                                            {item}
                                        </Link>
                                    </Fragment>
                                ) : (
                                    <Link
                                        to='/login'
                                        key={item}
                                        className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                                    >
                                        {item}
                                    </Link>
                                )
                            )}
                        </div>
                        <div className="pt-4 pb-3 border-t border-gray-700">
                            <div className="flex items-center px-5">
                                <div className="flex-shrink-0">
                                    <img
                                        className="h-10 w-10 rounded-full"
                                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                        alt=""
                                    />
                                </div>
                                <div className="ml-3">
                                    <div className="text-base font-medium leading-none text-white">Tom Cook</div>
                                    <div className="text-sm font-medium leading-none text-gray-400">tom@example.com</div>
                                </div>
                                <button className="ml-auto bg-gray-800 flex-shrink-0 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                                    <span className="sr-only">View notifications</span>
                                    <BellIcon className="h-6 w-6" aria-hidden="true"/>
                                </button>
                            </div>
                            <div className="mt-3 px-2 space-y-1">
                                {profile.map((item) => (
                                    <Link
                                        key={item}
                                        className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700"
                                    >
                                        {item}
                                    </Link>
                                ))}
                            </div>
                        </div>
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
