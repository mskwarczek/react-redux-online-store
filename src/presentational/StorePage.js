import React from 'react';

import ProductsList from '../containers/ProductsListContainer';

import productsData from '../data/products-data.json';

export default function StorePage(props) {
    return (
        <div className='page-container'>
            <h2 className='page-container__title'>Store Page</h2>
            <ProductsList products={productsData} />
        </div>
    );
};
