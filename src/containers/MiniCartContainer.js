import { connect } from 'react-redux';

import MiniCart from '../presentational/MiniCart';

const mapStateToProps = state => ({
    cart: state.cartReducer
});

export default connect(mapStateToProps)(MiniCart);