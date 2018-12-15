import React from 'react';

import ProductListItem from './ProductsListItem';

export default function ProductsList(props) {
    return (
        <div className='products-list'>
            {
                props.products.map( product => 
                    <ProductListItem
                        key={product.id}
                        product={product}
                        cart={props.cart.filter(cartItem => cartItem.id === product.id)[0]}
                        addToCart={props.addToCart}
                        removeFromCart={props.removeFromCart} />
                )
            }
        </div>
    );
};