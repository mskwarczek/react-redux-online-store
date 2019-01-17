import { combineReducers } from 'redux';

import cartReducer from './cart-reducer';
import shipmentReducer from './shipment-reducer';
import orderReducer from './order-reducer';
import displayReducer from './display-reducer';

const reducers = combineReducers({
    cartReducer,
    shipmentReducer,
    orderReducer,
    displayReducer
})

export default reducers;