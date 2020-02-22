import React, { Component } from 'react';
import { addToCart } from '../../Utils/utils';
import { ADD_TO_CART } from '../../Redux/Actions/actionTypes';
import { connect } from 'react-redux';

class AddToCart extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    handleClick = (e) => {
        e.preventDefault();
        
        const newCart = addToCart(this.props.cart, this.props.item);
        
        this.props.dispatch({ type: ADD_TO_CART, payload: newCart });
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
    return {
        cart: state.cart.cart
    }
}
export default connect(mapStateToProps)(AddToCart);