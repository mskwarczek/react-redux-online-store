import React from 'react';

import CartList from '../containers/CartListContainer';

import productsData from '../data/products-data.json';

export default function Cart(props) {
    return (
        <div>
            <h2>My cart</h2>
            <CartList products={productsData} />
        </div>
    );
};