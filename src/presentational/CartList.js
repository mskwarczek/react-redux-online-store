import React from 'react';

export default function CartList(props) {
    return (
        props.cart.length === 0
            ? <div className='cart-list__information'>Your cart is empty!</div>
            : <table className='cart-list'>
                <thead>
                    <tr className='cart-list__row'>
                        <th>Item</th>
                        <th>Quantity</th>
                        <th>Unit price</th>
                        <th>Total price</th>
                        <th>Add / Remove</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.cart.map(item =>
                            <tr className='cart-list__row' key={item.id}>
                                <td>{props.products.filter(product => product.id === item.id)[0].name}</td>
                                <td>{item.quantity}</td>
                                <td>{props.products.filter(product => product.id === item.id)[0].price} USD</td>
                                <td>{props.products.filter(product => product.id === item.id)[0].price * item.quantity} USD</td>
                                <td>
                                    <button className='button' onClick={() => props.addToCart(item.id)}> + </button>
                                    <button className='button' onClick={() => props.removeFromCart(item.id)}> - </button>
                                </td>
                            </tr>)
                    }
                </tbody>
                <tfoot className='cart-list__summary'>
                    <tr className='cart-list__row'>
                        <td colSpan={5}>Total payment: {props.cart.reduce((acc, item) => acc = acc + props.products.filter(product => product.id === item.id)[0].price * item.quantity, 0) } USD</td>
                    </tr>
                </tfoot>
            </table>
    );
};