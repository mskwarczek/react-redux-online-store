import { ADD_SHIPMENT_DATA, REMOVE_SHIPMENT_DATA } from '../actions';

const initialState = {
    firstName: '',
    lastName: '',
    country: '',
    postCode: '',
    city: '',
    address: '',
    phoneNumber: ''
}

const shipmentReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_SHIPMENT_DATA:
            return action.payload.shipmentData;
        case REMOVE_SHIPMENT_DATA:
            return initialState;
        default: return state;
    }
};

export default shipmentReducer;
