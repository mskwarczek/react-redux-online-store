import React from 'react';

import ProductsList from '../containers/ProductsListContainer';

import productsData from '../data/products-data.json';

export default function HomePage(props) {
    return (
        <div>
            <h2>Store Home Page</h2>
            <ProductsList products={productsData} />
        </div>
    );
};
