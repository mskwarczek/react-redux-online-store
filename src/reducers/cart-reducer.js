import { ADD_TO_CART, REMOVE_FROM_CART, CLEAR_CART } from '../actions';

const cartReducer = (state = [], action) => {
    switch (action.type) {
        case ADD_TO_CART: {
            const itemIndex = state.findIndex(item => item.id === action.payload.id);
            if (itemIndex !== -1) {
                const newItem = { id: state[itemIndex].id, quantity: state[itemIndex].quantity + 1 };
                const newState = state.slice(0);
                newState.splice(itemIndex, 1, newItem);
                return newState;
            }
            else {
                const newItem = { id: action.payload.id, quantity: 1 };
                return [...state, newItem];
            }
        }
        case REMOVE_FROM_CART: {
            const itemIndex = state.findIndex(item => item.id === action.payload.id);
            if (itemIndex !== -1) {
                if (state[itemIndex].quantity > 1) {
                    const newItem = { id: state[itemIndex].id, quantity: state[itemIndex].quantity - 1 };
                    const newState = state.slice(0);
                    newState.splice(itemIndex, 1, newItem);
                    return newState;
                }
                else {
                    return state.filter((item, index) => index !== itemIndex)
                }
            }
            else return state;
        }
        case CLEAR_CART:
            return [];
        default: return state;
    }
};

export default cartReducer;
