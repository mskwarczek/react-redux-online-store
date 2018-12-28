import React from 'react';
import { NavLink } from 'react-router-dom';

export default function ShipmentSummary(props) {
    return (
        <table className='shipment-summary'>
            <tbody>
                <tr className='shipment-summary__row'>
                    <td className='shipment-summary__label'>First name:</td>
                    <td className='shipment-summary__value'>{props.shipmentData.firstName}</td>
                </tr>
                <tr className='shipment-summary__row'>
                    <td className='shipment-summary__label'>Last name:</td>
                    <td className='shipment-summary__value'>{props.shipmentData.lastName}</td>
                </tr>
                <tr className='shipment-summary__row'>
                    <td className='shipment-summary__label'>Country:</td>
                    <td className='shipment-summary__value'>{props.shipmentData.country}</td>
                </tr>
                <tr className='shipment-summary__row'>
                    <td className='shipment-summary__label'>Post code:</td>
                    <td className='shipment-summary__value'>{props.shipmentData.postCode}</td>
                </tr>
                <tr className='shipment-summary__row'>
                    <td className='shipment-summary__label'>City:</td>
                    <td className='shipment-summary__value'>{props.shipmentData.city}</td>
                </tr>
                <tr className='shipment-summary__row'>
                    <td className='shipment-summary__label'>Address:</td>
                    <td className='shipment-summary__value'>{props.shipmentData.address}</td>
                </tr>
                <tr className='shipment-summary__row'>
                    <td className='shipment-summary__label'>Phone number:</td>
                    <td className='shipment-summary__value'>{props.shipmentData.phoneNumber}</td>
                </tr>
                <tr className='shipment-summary__row'>
                    <td colSpan={2}><NavLink className='button button--important' 
                        to='/confirmation'
                        onClick={() => {
                            props.addOrder(props.shipmentData, props.orderedProducts);
                            props.clearCart();
                        }}>
                        Buy now!
                    </NavLink></td>
                </tr>
            </tbody>
        </table>
    );
};
