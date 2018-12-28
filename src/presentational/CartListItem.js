import React from 'react';

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
                    <button className='button' onClick={() => props.addToCart(props.item.id)}> + </button>
                    <button className='button' onClick={() => props.removeFromCart(props.item.id)}> - </button>
                </td>
                : null
            }
        </tr>
    );
};