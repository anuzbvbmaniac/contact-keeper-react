import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import './assets/css/tailwind.css';

import Navbar from "./components/layout/Navbar";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import ContactState from "./context/contact/ContactState";
import AuthState from "./context/auth/AuthState";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import AlertState from "./context/alert/AlertState";
import Alerts from "./components/layout/Alerts";
import PrivateRoute from "./components/routing/PrivateRoute";

import setAuthToken from "./utils/setAuthToken";

if (localStorage.token) {
    setAuthToken(localStorage.token)
}

const App = () => {
    return (
        <AuthState>
            <ContactState>
                <AlertState>
                    <Router>
                        <div>
                            <Navbar/>
                            <main className={'bg-gray-50'}>
                                <Alerts/>

                                <Switch>
                                    <PrivateRoute exact path={'/'} component={Home}/>
                                    <Route exact path={'/about'} component={About}/>
                                    <Route exact path={'/register'} component={Register}/>
                                    <Route exact path={'/login'} component={Login}/>
                                </Switch>
                            </main>
                        </div>
                    </Router>
                </AlertState>
            </ContactState>
        </AuthState>
    );
};

export default App;
