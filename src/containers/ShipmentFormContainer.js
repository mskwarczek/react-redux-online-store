import { connect } from 'react-redux';

import ShipmentForm from '../presentational/ShipmentForm';
import { addShipmentData } from '../actions.js';

const mapStateToProps = state => ({
    shipmentData: state.shipmentReducer
});

const mapDispatchToProps = dispatch => ({
    addShipmentData: shipmentData => dispatch(addShipmentData(shipmentData)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ShipmentForm);