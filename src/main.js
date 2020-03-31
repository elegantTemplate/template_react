import React from 'react'
import {render} from 'react-dom'
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';

import Home from './pages/home/home'
import Vendor from './pages/vendor/vendor'

const routerPath = "LG_CONFIG_ROUTERPATH"
const getRouter = () => (
    <Router>
        <Link to={routerPath + "/home"}>home</Link>
        &nbsp;
        <Link to={routerPath + "/vendor"}>vendor</Link>
        <Switch>
            <Route exact path={routerPath + "/home"} component={Home}/>
            <Route path={routerPath + "/vendor"} component={Vendor}/>
        </Switch>
    </Router>
);

render(
    getRouter(),
    document.getElementById('app')
)