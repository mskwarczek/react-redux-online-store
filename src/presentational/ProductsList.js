import React from 'react';

import ProductListItem from './ProductsListItem';
import { compare } from '../utilities/utilities';

export default function ProductsList(props) {
    const products = [...props.products];
    switch(props.display.sortType) {
        case 'nameAscending': products.sort(compare('name')); break;
        case 'nameDescending': products.sort(compare('name', 'descending')); break;
        case 'priceAscending': products.sort(compare('price')); break;
        case 'priceDescending': products.sort(compare('price', 'descending')); break;
        default: break;
    };
    return (
        <div className='products-list'>
            {
                products.filter(product => 
                    product.name.toLowerCase().includes(props.display.name.toLowerCase())).map(product =>
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
