import { connect } from 'react-redux';

import CartList from '../presentational/CartList';
import { addToCart, removeFromCart } from '../actions.js';

const mapStateToProps = state => ({
    cart: state.cartReducer
});

const mapDispatchToProps = dispatch => ({
    addToCart: id => dispatch(addToCart(id)),
    removeFromCart: id => dispatch(removeFromCart(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(CartList);