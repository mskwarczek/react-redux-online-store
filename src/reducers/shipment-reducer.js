import { ADD_SHIPMENT_DATA, REMOVE_SHIPMENT_DATA } from '../actions';

const shipmentReducer = (state = {}, action) => {
    switch (action.type) {
        case ADD_SHIPMENT_DATA:
            return action.payload.shipmentData;
        case REMOVE_SHIPMENT_DATA:
            return {};
        default: return state;
    }
};

export default shipmentReducer;
