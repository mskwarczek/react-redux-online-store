import React from 'react';

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
                In cart: {(props.cart && props.cart.quantity) || 0}
            </div>
            <div>
                <button className='button button--important' onClick={() => props.addToCart(props.product.id)}>Add to cart</button>
                {
                    props.cart
                        ? <button className='button' onClick={() => props.removeFromCart(props.product.id)}>Remove from cart</button>
                        : null
                }
            </div>
        </div>
    );
};