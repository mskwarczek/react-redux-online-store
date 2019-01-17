import React from 'react';
import PropTypes from 'prop-types';

import { productShape, cartItemShape } from '../utilities/custom-prop-types';

export default function CartListItem(props) {
    return (
        <tr className='cart-list__row'>
            <td>{props.products.filter(product => product.id === props.item.id)[0].name}</td>
            <td>{props.item.quantity}</td>
            <td>{props.products.filter(product => product.id === props.item.id)[0].price} USD</td>
            <td>{props.products.filter(product => product.id === props.item.id)[0].price * props.item.quantity} USD</td>
            {
                props.actionButtons === true
                ? <td>
                    <button className='button button--small' onClick={() => props.addToCart(props.item.id)}> + </button>
                    <button className='button button--small' onClick={() => props.removeFromCart(props.item.id)}> - </button>
                </td>
                : null
            }
        </tr>
    );
};

CartListItem.propTypes = {
    item: cartItemShape.isRequired,
    products: PropTypes.arrayOf(productShape).isRequired,
    actionButtons: PropTypes.bool,
    addToCart: PropTypes.func,
    removeFromCart: PropTypes.func
};

CartListItem.defaultProps = {
    actionButtons: false,
    addToCart: () => console.log('No function assigned'),
    removeFromCart: () => console.log('No function assigned')
};
