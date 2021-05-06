import React, { useReducer } from 'react';
import axios from "axios";

import authReducer from "./authReducer";
import AuthContext from "./authContext";
import { AUTH_ERROR, CLEAR_ERRORS, REGISTER_FAIL, REGISTER_SUCCESS, USER_LOADED } from "../types";

import setAuthToken from "../../utils/setAuthToken";

const AuthState = props => {

    const initialState = {
        token: localStorage.getItem('token'),
        isAuthenticated: null,
        loading: true,
        error: null,
    };

    const [state, dispatch] = useReducer(authReducer, initialState);

    // Load User
    const loadUser = async () => {

        if (localStorage.token) {
            setAuthToken(localStorage.token)
        }

        try {
            const response = await axios.get('/api/auth');

            dispatch({
                type: USER_LOADED,
                payload: response.data,
            });
        } catch (err) {
            console.log(err.message);
            dispatch({
                type: AUTH_ERROR
            });
        }
    }

    // Register User
    const register = async (formData) => {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        try {
            const response = await axios.post('/api/users', formData, config);

            dispatch({
                type: REGISTER_SUCCESS,
                payload: response.data,
            });
            await loadUser();
        } catch (err) {
            dispatch({
                type: REGISTER_FAIL,
                payload: err.response.data.msg,
            });
        }

    }

    // Login User
    const login = async () => {

    }

    // Logout
    const logout = () => {

    }

    // Clear Errors
    const clearErrors = () => {
        dispatch({
            type: CLEAR_ERRORS
        })
    }

    return (
        <AuthContext.Provider value={{
            token: state.token,
            isAuthenticated: state.isAuthenticated,
            loading: state.loading,
            user: state.user,
            error: state.error,
            register,
            loadUser,
            login,
            logout,
            clearErrors,
        }}>
            {props.children}
        </AuthContext.Provider>
    );
}

export default AuthState;
