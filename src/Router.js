import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from './presentational/HomePage';
import StorePage from './presentational/StorePage';
import CartPage from './presentational/CartPage';
import ShipmentPage from './presentational/ShipmentPage';
import SummaryPage from './presentational/SummaryPage';
import ConfirmationPage from './presentational/ConfirmationPage';

const Router = () => (
    <Switch >
        <Route exact path='/' component={HomePage} />
        <Route exact path='/store' component={StorePage} />
        <Route exact path='/cart' component={CartPage} />
        <Route exact path='/shipment' component={ShipmentPage} />
        <Route exact path='/summary' component={SummaryPage} />
        <Route exact path='/confirmation' component={ConfirmationPage} />
    </Switch>
);

export default Router;