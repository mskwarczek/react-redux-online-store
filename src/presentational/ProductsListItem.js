import React from 'react';

export default function ProductListItem(props) {
    return (
        <div className='product-list-item'>
            <h3>{props.product.name}</h3>
            <img 
                className='product-picture-small'
                src={`products/${ props.product.image }`}
                title={props.product.name}
                alt={props.product.name} />
            <div>
                {props.product.description }
            </div>
            <p>Price: {props.product.price} USD</p>
            <p>In cart: {(props.cart && props.cart.quantity) || 0}</p>
            <div>
                <button onClick={() => props.addToCart(props.product.id)}>Add to cart</button>
                {
                    props.cart
                        ? <button onClick={() => props.removeFromCart(props.product.id)}>Remove from cart</button>
                        : null
                }
            </div>
        </div>
    );
};