import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from './presentational/HomePage';
import Cart from './presentational/Cart';

const Router = () => (
    <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/cart'component={Cart} />
    </Switch>
);

export default Router;