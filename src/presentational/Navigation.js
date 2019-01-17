import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import MiniCart from '../containers/MiniCartContainer';
import productsData from '../data/products-data.json';

export default class Navigation extends Component {

    constructor(props) {
        super(props);
        this.state = {
            toggle: 'off'
        };

        this.toggleMenu = this.toggleMenu.bind(this);
    };

    toggleMenu() {
        this.setState(() => {
            const newState = this.state.toggle === 'on' ? 'off' : 'on';
            return { toggle: newState };
        });
    };

    render() {
        return (
            <nav>
                <div className='menu-button button' onClick={() => this.toggleMenu()}>Menu</div>
                <ul className={this.state.toggle === 'on' ? 'navigation visible' : 'navigation'}>
                    <li className='navigation__list-item'><NavLink className='navigation__link' to='/'>Home</NavLink></li>
                    <li className='navigation__list-item'><NavLink className='navigation__link' to='/store'>Store</NavLink></li>
                    <ul className='mini-cart-wrapper'>
                        <li className='navigation__list-item'><NavLink className='navigation__link' to='/cart'>Cart</NavLink></li>
                        <li><MiniCart products={productsData} /></li>
                    </ul>
                </ul>
            </nav>
        );
    };
};
