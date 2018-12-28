import React from 'react';

import CartList from '../containers/CartListContainer';
import ShipmentSummary from '../containers/ShipmentSummaryContainer';

import productsData from '../data/products-data.json';

export default function ShipmentPage(props) {
    return (
        <div className='page-container'>
            <h2 className='page-container__title'>Your order</h2>
            <CartList products={productsData} actionButtons={false}/>
            
            <h2 className='page-container__title'>Your shipment data</h2>
            <ShipmentSummary />
        </div>
    );
};