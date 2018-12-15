import React from 'react';

export default function CartList(props) {
    return (
        <table>
            <thead>
                <tr>
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
                        <tr key={item.id}>
                            <td>{props.products.filter(product => product.id === item.id)[0].name}</td>
                            <td>{item.quantity}</td>
                            <td>{props.products.filter(product => product.id === item.id)[0].price}</td>
                            <td>{props.products.filter(product => product.id === item.id)[0].price * item.quantity}</td>
                            <td>
                                <button onClick={() => props.addToCart(item.id)}> + </button>
                                <button onClick={() => props.removeFromCart(item.id)}> - </button>
                            </td>
                        </tr>)
                }
            </tbody>
            <tfoot>
                <tr>
                    <td colSpan={3}>Total payment</td>
                    <td colSpan={2}>{props.cart.reduce((acc, item) => acc = acc + props.products.filter(product => product.id === item.id)[0].price * item.quantity, 0)}</td>
                </tr>
            </tfoot>
        </table>
    );
};