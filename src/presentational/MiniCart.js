import React from 'react';

export default function MiniCart(props) {
    return (
        <div className='mini-cart'>
            <h4 className='mini-cart__title'>Your cart</h4>
            <span>{props.cart.reduce((sum, item) => sum + item.quantity, 0)} items</span><br />
            <span>{props.cart.reduce((acc, item) => acc = acc + props.products.filter(product => product.id === item.id)[0].price * item.quantity, 0) } USD</span>
        </div>
    );
};