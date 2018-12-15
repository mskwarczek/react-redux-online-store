import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Navigation(props) {
    return (
        <nav>
            <ul className='navigation'>
                <li><NavLink className='navigation__link' to='/'>Home</NavLink></li>
                <li><NavLink className='navigation__link' to='/store'>Store</NavLink></li>
                <li><NavLink className='navigation__link' to='/cart'>Cart</NavLink></li>
            </ul>
        </nav>
    );
};