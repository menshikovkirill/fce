import React, { FC, useCallback, useState } from 'react';
import { Switch, Route } from 'react-router';
import { Link, NavLink } from 'react-router-dom';

import { Home } from './pages/Home';
import { Tests } from './pages/Tests';
import { Dictionary } from './pages/Dictionary';
import { Manuals } from './pages/Manuals';

import {FormAdding} from './components/form-adding/';

export const Application = () => {
    return <>
        <div className="navbar-nav">
            <NavLink exact  className="nav-link" activeClassName="active" to="/">Home</NavLink>
            <NavLink className="nav-link" activeClassName="active" to="/dicionary">dicionary</NavLink>
            <NavLink className="nav-link" activeClassName="active" to="/tests">tests</NavLink>
            <NavLink className="nav-link" activeClassName="active" to="/manuals">manuals</NavLink>
        </div>

        <div className="container">
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/dicionary" exact component={Dictionary} />
                <Route path="/tests" component={Tests} />
                <Route path="/manuals" component={Manuals} />
                {/* <Route path="/catalog/:id" component={Product} /> */}
            </Switch>
            <FormAdding />
        </div>
    </>
};
