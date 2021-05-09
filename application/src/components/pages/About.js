import React from 'react';

const About = () => {
    return (
        <div className="bg-white max-w-7xl mx-auto py-12 sm:px-6 lg:px-8 mt-12">
            <div className="max-w-7xl mx-auto py-12 px-4 sm:py-12 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-base font-semibold text-indigo-600 tracking-wide uppercase">About Us</h2>
                    <p className="mt-3 text-3xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-5xl">
                        The Best Way to Maintain Your Contacts
                    </p>
                    <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500">
                        Intuitive contact management for individuals, teams & small businesses.
                    </p>
                    <p className="lg:w-1/6 mt-5 mx-auto text-sm text-white bg-green-500 p-1 rounded sm:w-1/2">
                        Version: 1.0.0 (beta)
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;
