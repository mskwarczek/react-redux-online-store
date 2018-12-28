import { connect } from 'react-redux';

import ShipmentSummary from '../presentational/ShipmentSummary';
import { addOrder, clearCart } from '../actions.js';

const mapStateToProps = state => ({
    shipmentData: state.shipmentReducer,
    orderedProducts: state.cartReducer
});

const mapDispatchToProps = dispatch => ({
    addOrder: (shipmentData, orderedProducts) => dispatch(addOrder(shipmentData, orderedProducts)),
    clearCart: () => dispatch(clearCart())
});

export default connect(mapStateToProps, mapDispatchToProps)(ShipmentSummary);