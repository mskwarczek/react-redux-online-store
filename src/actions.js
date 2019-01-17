export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const CLEAR_CART = 'CLEAR_CART';
export const ADD_SHIPMENT_DATA = 'ADD_SHIPMENT_ADDRESS';
export const REMOVE_SHIPMENT_DATA = 'REMOVE_SHIPMENT_DATA';
export const ADD_ORDER = 'ADD_ORDER';
export const REMOVE_ORDER ='REMOVE_ORDER';
export const SET_PRODUCTS_FILTERS = 'SET_PRODUCTS_FILTERS';
export const RESET_PRODUCTS_FILTERS = 'RESET_PRODUCTS_FILTERS';

export function addToCart(id) {
    return {
        type: ADD_TO_CART,
        payload: {
            id
        }
    };
};

export function removeFromCart(id) {
    return {
        type: REMOVE_FROM_CART,
        payload: {
            id
        }
    };
};

export function clearCart() {
    return {
        type: CLEAR_CART
    };
};

export function addShipmentData(shipmentData) {
    return {
        type: ADD_SHIPMENT_DATA,
        payload: {
            shipmentData
        }
    };
};

export function removeShipmentData() {
    return {
        type: REMOVE_SHIPMENT_DATA
    };
};

export function addOrder(shipmentData, orderedProducts) {
    return {
        type: ADD_ORDER,
        payload: {
            shipmentData,
            orderedProducts
        }
    };
};

export function removeOrder() {
    return {
        type: REMOVE_ORDER
    }
};

export function setProductsFilters(productsFiltersData) {
    return {
        type: SET_PRODUCTS_FILTERS,
        payload: {
            productsFiltersData,
        }
    };
};

export function resetProductsFilters() {
    return {
        type: RESET_PRODUCTS_FILTERS
    }
};