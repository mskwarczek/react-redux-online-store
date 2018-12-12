import React from 'react';

import ProductListItem from './ProductsListItem';

export default function ProductsList(props) {
    return (
        <div className='product-list'>
            {
                props.products.map( product => 
                    <ProductListItem
                        key={product.id}
                        product={product}
                        cart={props.cart}
                        addToCart={props.addToCart}
                        removeFromCart={props.removeFromCart} />
                )
            }
        </div>
    );
};