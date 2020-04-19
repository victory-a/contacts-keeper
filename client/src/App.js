import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { NavBar } from "./components/layout/NavBar";
import { Home } from "./components/pages/Home";
import { About } from "./components/pages/About";

import ContactState from "./context/contact/ContactState";
import "./App.css";

const App = () => {
    return (
        <ContactState>
            <Router>
                <Fragment>
                    <NavBar />
                    <div className="container">
                        <Switch>
                            <Route exact path="/" component={Home} />
                            <Route exact path="/about" component={About} />
                        </Switch>
                    </div>
                </Fragment>
            </Router>
        </ContactState>
    );
};

export default App;
