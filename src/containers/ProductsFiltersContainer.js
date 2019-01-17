import { connect } from 'react-redux';

import ProductsFilters from '../presentational/ProductsFilters';
import { setProductsFilters, resetProductsFilters } from '../actions.js';

const mapStateToProps = state => ({
    display: state.displayReducer
});

const mapDispatchToProps = dispatch => ({
    setProductsFilters: productsFiltersData => dispatch(setProductsFilters(productsFiltersData)),
    resetProductsFilters: () => dispatch(resetProductsFilters())
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductsFilters);