import React from 'react';
import PropTypes from 'prop-types';

import ProductListItem from './ProductsListItem';
import { productShape, cartItemShape, displayShape } from '../utilities/custom-prop-types';
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
                        cartItem={props.cart.filter(cartItem => cartItem.id === product.id)[0]}
                        addToCart={props.addToCart}
                        removeFromCart={props.removeFromCart} />
                )
            }
        </div>
    );
};

ProductsList.propTypes = {
    products: PropTypes.arrayOf(productShape).isRequired,
    display: displayShape.isRequired,
    cart: PropTypes.arrayOf(cartItemShape).isRequired,
    addToCart: PropTypes.func.isRequired,
    removeFromCart: PropTypes.func.isRequired
};
