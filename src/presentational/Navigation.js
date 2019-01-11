import React from 'react';
import { NavLink } from 'react-router-dom';

import MiniCart from '../containers/MiniCartContainer';
import productsData from '../data/products-data.json';
/*
export default function Navigation(props) {
    return (
        <nav>
            <ul className='navigation'>
                <li className='navigation__list-item'><NavLink className='navigation__link' to='/'>Home</NavLink></li>
                <li className='navigation__list-item'><NavLink className='navigation__link' to='/store'>Store</NavLink></li>
                <li className='navigation__list-item'><NavLink className='navigation__link' to='/cart'>Cart</NavLink></li>
            </ul>
            <NavLink to='/cart'>
                <MiniCart products={productsData}/>
            </NavLink>
        </nav>
    );
};
*/
export default function Navigation(props) {
    return (
        <nav>
            <ul className='navigation'>
                <li className='navigation__list-item'><NavLink className='navigation__link' to='/'>Home</NavLink></li>
                <li className='navigation__list-item'><NavLink className='navigation__link' to='/store'>Store</NavLink></li>
                <ul className='mini-cart-wrapper'>
                    <li className='navigation__list-item'><NavLink className='navigation__link' to='/cart'>Cart</NavLink></li>
                    <li><MiniCart products={productsData}/></li>
                </ul>
            </ul>
        </nav>
    );
};
