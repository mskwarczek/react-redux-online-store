import React from 'react';

import CartList from '../containers/CartListContainer';

import productsData from '../data/products-data.json';

export default function CartPage(props) {
    return (
        <div className='page-container'>
            <h2 className='page-container__title'>Shopping cart</h2>
            <CartList products={productsData} actionButtons={true}/>
        </div>
    );
};