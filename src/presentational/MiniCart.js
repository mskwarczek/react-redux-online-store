import React from 'react';
import PropTypes from 'prop-types';

import { productShape, cartItemShape } from '../utilities/custom-prop-types';

export default function MiniCart(props) {
    return (
        <div className='mini-cart'>
            <span>{props.cart.reduce((sum, item) => sum + item.quantity, 0)} items</span><br />
            <span>{props.cart.reduce((acc, item) => acc = acc + props.products.filter(product => product.id === item.id)[0].price * item.quantity, 0) } USD</span>
        </div>
    );
};

MiniCart.propTypes = {
    cart: PropTypes.arrayOf(cartItemShape).isRequired,
    products: PropTypes.arrayOf(productShape).isRequired
};
