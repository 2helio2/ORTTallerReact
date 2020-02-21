import React, { Component } from 'react';
import { addToCart } from '../../Utils/utils';
import { ADD_TO_CART } from '../../redux/Actions/actionTypes';
import { connect } from 'react-redux';

class AddToCart extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    handleClick = e => {
        e.preventDefault();
        const item = this.props.item;
        const cart = this.props.cart;
        const newCart = addToCart(cart, item);
        this.props.dispatch({type: ADD_TO_CART, payload: newCart});
    }
    
    render() { 
        return (
            <>
                <input onClick={(e)=>this.handleClick(e)} type='button' value='Add to cart' />
            </>
        );
    }
}
 
const mapStateToProps = state => {
    return { cart: state.cartReducer.cart };
}
 
export default connect(mapStateToProps)(AddToCart);