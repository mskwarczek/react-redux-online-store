import { connect } from 'react-redux';

import ProductsList from '../presentational/ProductsList';
import { addToCart, removeFromCart } from '../actions.js';

const mapStateToProps = state => ({
    cart: state.cartReducer,
    display: state.displayReducer
});

const mapDispatchToProps = dispatch => ({
    addToCart: id => dispatch(addToCart(id)),
    removeFromCart: id => dispatch(removeFromCart(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductsList);