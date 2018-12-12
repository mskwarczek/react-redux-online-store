import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Navigation(props) {
    return (
        <nav>
            <ul>
                <li><NavLink to='/'>Home Page</NavLink></li>
                <li><NavLink to='/cart'>Cart</NavLink></li>
            </ul>
        </nav>
    );
};