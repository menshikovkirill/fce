import React, { FC, useCallback, useState } from 'react';
import { Switch, Route } from 'react-router';
import { Link, NavLink } from 'react-router-dom';

import { Home } from './pages/Home';
import { Materials } from './pages/Materials';
import { Dictionary } from './pages/Dictionary';
import { Articles } from './pages/Articles';

import {FormAdding} from './components/form-adding/';

export const Application = () => {
    return (<div className="fce-sait">
        <div className="header">
            <div className="title">
                <NavLink exact  className="nav-link" activeClassName="active" to="/"><h1>FCE EXAM WITH FUN</h1></NavLink>
            </div>
            <div className="navbar-nav">
                <NavLink exact  className="nav-link" activeClassName="active" to="/">Home</NavLink>
                <NavLink className="nav-link" activeClassName="active" to="/dicionary">Dicionary</NavLink>
                <NavLink className="nav-link" activeClassName="active" to="/materials">Materials</NavLink>
                <NavLink className="nav-link" activeClassName="active" to="/articles">Articles</NavLink>
            </div>
        </div>

        <div className="container">
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/dicionary" exact component={Dictionary} />
                <Route path="/materials" component={Materials} />
                <Route path="/articles" component={Articles} />
            </Switch>
            {/* <FormAdding /> */}
        </div>
    </div>)
};
