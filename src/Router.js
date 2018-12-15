import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from './presentational/HomePage';
import StorePage from './presentational/StorePage';
import CartPage from './presentational/CartPage';

const Router = () => (
    <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/store' component={StorePage} />
        <Route exact path='/cart'component={CartPage} />
    </Switch>
);

export default Router;