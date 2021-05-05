import React  from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import './assets/css/tailwind.css';

import Navbar from "./components/layout/Navbar";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import ContactState from "./context/contact/ContactState";
import ContactFilter from "./components/contacts/ContactFilter";
import Header from "./components/layout/Header";

const App = () => {
    return (
        <ContactState>
            <Router>
                <divht>
                    <Navbar/>
                    <main>
                        <div className="max-w-7xl mx-auto py-12 sm:px-6 lg:px-8">
                            <Switch>
                                <Route exact path={'/'} component={Home}/>
                                <Route exact path={'/about'} component={About}/>
                            </Switch>
                        </div>
                    </main>
                </divht>
            </Router>
        </ContactState>
    );
};

export default App;
