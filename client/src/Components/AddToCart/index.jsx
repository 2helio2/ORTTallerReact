import React, { Component } from 'react';
import { addToCart } from '../../Utils/utils';
import { ADD_TO_CART } from '../../Redux/Actions/actionTypes';
import { connect } from 'react-redux';
import styles from './styles.module.css';

class AddToCart extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            quantity: 1
        }
    }

    handleClick = (e) => {
        e.preventDefault();
        
        const newCart = addToCart(this.props.cart, this.props.item, this.state.quantity);
        
        this.props.dispatch({ type: ADD_TO_CART, payload: newCart });
    }
    handleChangeQuantity = (e) =>{
        e.preventDefault();
        this.setState({
            quantity: e.target.value
        })
    }

    render() { 
        return (
            <>
                <input type="number" onChange={(e)=>this.handleChangeQuantity(e)}/>         
                <input className={styles.addToCartBtn} onClick={(e)=>this.handleClick(e)} type='button' value='Add to cart' />   
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