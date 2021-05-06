import React, { useReducer } from 'react';
import uuid from 'uuid';

import alertReducer from "./alertReducer";
import AlertContext from "./alertContext";
import { REMOVE_ALERT, SET_ALERT } from "../types";

const AlertState = props => {

    const initialState = [];

    const [state, dispatch] = useReducer(alertReducer, initialState);

    // Set Alerts
    const setAlert = (msg, type, timeout = 5000) => {
        const id = uuid.v4();
        dispatch({
            type: SET_ALERT,
            payload: { msg, type, id }
        });

        setTimeout(() => dispatch({type: REMOVE_ALERT, payload: id}), timeout);
    }

    // Remove Alert
    const removeAlert = (id) => {
        dispatch({
            type: REMOVE_ALERT,
            payload: id,
        });
    }

    return (
        <AlertContext.Provider value={{
            alerts: state,
            setAlert,
            removeAlert,
        }}>
            {props.children}
        </AlertContext.Provider>
    );
}

export default AlertState;
