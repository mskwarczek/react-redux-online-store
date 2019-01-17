import React from 'react';
import PropTypes from 'prop-types';

import { productShape, cartItemShape } from '../utilities/custom-prop-types';

export default function ProductListItem(props) {
    return (
        <div className='products-list-item'>
            <h3 className='products-list-item__title'>{props.product.name}</h3>
            <img 
                className='products-list-item__picture'
                src={`products/${ props.product.image }`}
                title={props.product.name}
                alt={props.product.name} />
            <div className='products-list-item__description'>
                {props.product.description }<br /><br />
                Price: {props.product.price} USD<br />
                In cart: {(props.cartItem && props.cartItem.quantity) || 0}
            </div>
            <div>
                <button className='button button--important' onClick={() => props.addToCart(props.product.id)}>Add to cart</button>
                {
                    props.cartItem
                        ? <button className='button' onClick={() => props.removeFromCart(props.product.id)}>Remove from cart</button>
                        : null
                }
            </div>
        </div>
    );
};

ProductListItem.propTypes = {
    product: productShape.isRequired,
    addToCart: PropTypes.func.isRequired,
    removeFromCart: PropTypes.func.isRequired,
    cartItem: cartItemShape
};

ProductListItem.defaultProps = {
    cartItem: null
};
