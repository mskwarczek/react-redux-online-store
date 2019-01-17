import React, { Component } from 'react';

class ProductsFilters extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            sortType: 'nameAscending'
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleReset = this.handleReset.bind(this);
    };

    handleChange(event) {
        switch (event.target.name) {
            case 'name': this.setState({ name: event.target.value }); break;
            case 'sort': this.setState({ sortType: event.target.value }); break;
            default: break;
        };
    };

    handleSubmit(event) {
        this.props.setProductsFilters(this.state);
        event.preventDefault();
    };

    handleReset(event) {
        this.setState({ 
            name: '',
            sortType: 'fromAtoZ'
        });
        this.props.resetProductsFilters();
        event.preventDefault();
    };

    render() {
        return (
            <div className='products-filters-wrapper'>
                <form className='products-filters'
                    onSubmit={this.handleSubmit}
                    onReset={this.handleReset}>
                    <label className='product-filters__label'>Name: 
                        <input
                            className='products-filters__input'
                            name='name'
                            type='text'
                            value={this.state.productName}
                            onChange={this.handleChange} />
                    </label><br />
                    <label className='products-filters__label'>Sort by: 
                        <select 
                            className='products-filters__input'
                            name='sort'
                            onChange={this.handleChange}>
                            <option value='nameAscending'>name, A to Z</option>
                            <option value='nameDescending'>name, Z to A</option>
                            <option value='priceAscending'>price, ascending</option>
                            <option value='priceDescending'>price, descending</option>
                        </select>
                    </label>
                    <button className='button button--small'
                        type="submit">
                        Apply
                    </button>
                    <button className='button button--small'
                        type="reset">
                        Reset
                    </button>
                </form>
            </div>
        );
    };
};

export default ProductsFilters;