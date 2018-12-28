import React from 'react';

import ShipmentForm from '../containers/ShipmentFormContainer';

export default function ShipmentPage(props) {
    return (
        <div className='page-container'>
            <h2 className='page-container__title'>Your shipment data</h2>
            <ShipmentForm />
        </div>
    );
};