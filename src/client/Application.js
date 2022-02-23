import React, { FC, useCallback, useState } from 'react';
import { Switch, Route } from 'react-router';
import { Link, NavLink } from 'react-router-dom';

import { Home } from './pages/Home';
import { Tests } from './pages/Tests';
import { Dictionary } from './pages/Dictionary';
import { Articles } from './pages/Articles';

import {FormAdding} from './components/form-adding/';

export const Application = () => {
    return <div className="fce-sait">
        <div className="header">
            <div className="title">
                <h1>Fce exam with fun</h1>
            </div>
            <div className="navbar-nav">
                <NavLink exact  className="nav-link" activeClassName="active" to="/">Home</NavLink>
                <NavLink className="nav-link" activeClassName="active" to="/dicionary">Dicionary</NavLink>
                <NavLink className="nav-link" activeClassName="active" to="/tests">Tests</NavLink>
                <NavLink className="nav-link" activeClassName="active" to="/articles">Articles</NavLink>
            </div>
        </div>

        <div className="container">
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/dicionary" exact component={Dictionary} />
                <Route path="/tests" component={Tests} />
                <Route path="/articles" component={Articles} />
                {/* <Route path="/catalog/:id" component={Product} /> */}
            </Switch>
            {/* <FormAdding /> */}
        </div>
    </div>
};
