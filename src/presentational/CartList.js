import React from 'react';
import { NavLink } from 'react-router-dom';

import CartListItem from './CartListItem';

export default function CartList(props) {
    return (
        props.cart.length === 0
            ? <div className='cart-list__information'>
                <p>Your cart is empty!</p>
                <NavLink className='button button--big' to='/store'>Back to shop</NavLink>
            </div>
            : <table className='cart-list'>
                <thead>
                    <tr className='cart-list__row'>
                        <th>Item</th>
                        <th>Quantity</th>
                        <th>Unit price</th>
                        <th>Total price</th>
                        {
                            props.actionButtons === true
                            ? <th>Add / Remove</th>
                            : null
                        }
                    </tr>
                </thead>
                <tbody>
                    {
                        props.cart.map(item =>
                            <CartListItem 
                                key={item.id}
                                item={item}
                                products={props.products}
                                addToCart={props.addToCart}
                                removeFromCart={props.removeFromCart}
                                actionButtons={props.actionButtons} />)
                    }
                </tbody>
                <tfoot className='cart-list__summary'>
                    <tr className='cart-list__row'>
                        <td colSpan={5}>Total payment: {props.cart.reduce((acc, item) => acc = acc + props.products.filter(product => product.id === item.id)[0].price * item.quantity, 0) } USD</td>
                    </tr>
                    {
                        props.actionButtons === true
                        ? <tr className='cart-list__row'>
                            <td colSpan={5}>
                                <NavLink className='button' to='/store'>Back to store</NavLink>
                                <NavLink className='button' to='/shipment'>Order now</NavLink>
                            </td>
                        </tr>
                        : null
                    }
                </tfoot>
            </table>
    );
};