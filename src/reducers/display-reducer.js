import { SET_PRODUCTS_FILTERS, RESET_PRODUCTS_FILTERS } from '../actions';

const initialState = {
    name: '',
    sortType: 'nameAscending'
};

const displayReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PRODUCTS_FILTERS:
            return action.payload.productsFiltersData;
        case RESET_PRODUCTS_FILTERS:
            return initialState;
        default: return state;
    }
};

export default displayReducer;
