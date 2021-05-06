import React, { useContext } from 'react';

import AlertContext from "../../context/alert/alertContext";
import { CheckCircleIcon, XIcon, XCircleIcon } from "@heroicons/react/solid";

const Alerts = () => {

    const alertContext = useContext(AlertContext);

    return (
        alertContext.alerts.length > 0 && alertContext.alerts.map(alert => (
            <>
                <div className="flex justify-center pt-6" key={alert.id}>
                    <div className={`rounded-md bg-${alert.type === 'danger' ? 'red-50' : 'green-50'} p-4 w-1/2`}>
                        <div className="flex">
                            <div className="flex-shrink-0">
                                {alert.type === 'success'
                                    ? (<CheckCircleIcon className="h-5 w-5 text-green-400" aria-hidden="true"/>)
                                    : (<XCircleIcon className="h-5 w-5 text-red-400" aria-hidden="true"/>)
                                }
                            </div>
                            <div className="ml-3">
                                <p className={`text-sm font-medium text-${alert.type === 'danger' ? 'red-800' : 'green-800'}`}>There are {alertContext.alerts.length} errors with your submission.</p>

                                <ul className="list-disc pl-5 space-y-1 mt-2 text-sm text-red-700">
                                    <li>{alert.msg}</li>
                                </ul>
                            </div>
                            <div className="ml-auto pl-3">
                                <div className="-mx-1.5 -my-1.5">
                                    <button
                                        type="button"
                                        className={`inline-flex bg-${alert.type === 'danger' ? 'red-50' : 'green-50'} rounded-md p-1.5 text-${alert.type === 'danger' ? 'red-500' : 'green-500'} hover:bg-${alert.type === 'danger' ? 'red-100' : 'green-100'} focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-${alert.type === 'danger' ? 'red-50' : 'green-50'} focus:ring-${alert.type === 'danger' ? 'red-600' : 'green-600'}`}
                                        onClick={() => alertContext.removeAlert(alert.id)}
                                    >
                                        <span className="sr-only">Dismiss</span>
                                        <XIcon className="h-5 w-5" aria-hidden="true"/>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </>
        ))
    );
};

export default Alerts;
