import React from 'react';
import { NavLink } from 'react-router-dom';

export default function ConfirmationPage(props) {
    return (
        <div className='page-container confirmation'>
            <h2 className='page-container__title'>Thank You for your order!</h2>
            <NavLink className='button button--big' to='/store'>Back to shop</NavLink>
        </div>
    );
};