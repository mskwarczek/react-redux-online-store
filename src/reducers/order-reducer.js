import { ADD_ORDER, REMOVE_ORDER } from '../actions';

const orderReducer = (state = {}, action) => {
    switch (action.type) {
        case ADD_ORDER:
            const newOrder = {
                shipmentData: action.payload.shipmentData,
                orderedProducts: action.payload.orderedProducts
            };
            return newOrder;
        case REMOVE_ORDER:
            return {};
        default: return state;
    }
};

export default orderReducer;
