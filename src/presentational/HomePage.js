import React from 'react';
import { NavLink } from 'react-router-dom';

export default function HomePage(props) {
    return (
        <NavLink to='/store'>
            <div className='hero-wrapper'>
                <div className='hero-wrapper__animation'></div>
                    <header className='hero'>
                    <h1 className='hero__title'>Online store</h1>
                </header>
            </div>
        </NavLink>
    );
};
