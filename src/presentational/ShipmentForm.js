import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import { shipmentDataShape } from '../utilities/custom-prop-types';

class ShipmentForm extends Component {

    constructor(props) {
        super(props);
        this.state = this.props.shipmentData;

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    };

    handleChange(event) {
        switch (event.target.name) {
            case 'firstName': this.setState({ firstName: event.target.value }); break;
            case 'lastName': this.setState({ lastName: event.target.value }); break;
            case 'country': this.setState({ country: event.target.value }); break;
            case 'postCode': this.setState({ postCode: event.target.value }); break;
            case 'city': this.setState({ city: event.target.value }); break;
            case 'address': this.setState({ address: event.target.value }); break;
            case 'phoneNumber': this.setState({ phoneNumber: event.target.value }); break;
            default: break;
        };
    };

    handleSubmit(event) {
        this.props.addShipmentData(this.state);
        this.props.history.push('/summary');
        event.preventDefault();
    };

    render() {
        return (

            <form className='shipment-form' onSubmit={this.handleSubmit}>
                <label className="shipment-form__label">First name:
                    <input className="shipment-form__input"
                        name='firstName'
                        type='text'
                        value={this.state.firstName}
                        onChange={this.handleChange}
                        required />
                </label><br />
                <label className="shipment-form__label">Last name:
                    <input className="shipment-form__input"
                        name='lastName'
                        type='text'
                        value={this.state.lastName}
                        onChange={this.handleChange}
                        required />
                </label><br />
                <label className="shipment-form__label">Country: 
                    <input className="shipment-form__input"
                        name='country'
                        type='text'
                        value={this.state.country}
                        onChange={this.handleChange}
                        required />
                </label><br />
                <label className="shipment-form__label">Post code:
                    <input className="shipment-form__input"
                        name='postCode'
                        type='text'
                        value={this.state.postCode}
                        onChange={this.handleChange}
                        required />
                </label><br />
                <label className="shipment-form__label">City: 
                    <input className="shipment-form__input"
                        name='city'
                        type='text'
                        value={this.state.city}
                        onChange={this.handleChange}
                        required />
                </label><br />
                <label className="shipment-form__label">Address:
                    <input className="shipment-form__input"
                        name='address'
                        type='text'
                        value={this.state.address}
                        onChange={this.handleChange}
                        required />
                </label><br />
                <label className="shipment-form__label">Phone number:
                    <input className="shipment-form__input"
                        name='phoneNumber'
                        type='text'
                        value={this.state.phoneNumber}
                        onChange={this.handleChange}
                        required />
                </label><br />
                <button className='button button--important'
                    type="submit">
                    Continue
                </button>
            </form>
        );
    };
};

export default withRouter(ShipmentForm);

ShipmentForm.propTypes = {
    addShipmentData: PropTypes.func.isRequired,
    shipmentData: shipmentDataShape.isRequired
};
