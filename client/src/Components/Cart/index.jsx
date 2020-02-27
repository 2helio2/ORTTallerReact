import React, { Component } from 'react';
import { connect } from 'react-redux';
import CartItem from '../CartItem';
import { countCartTotalAmount, countCartItems } from '../../Utils/utils';
import { REMOVE_FROM_CART } from '../../Redux/Actions/actionTypes';
import styles from './styles.module.css';

class Cart extends Component {   
    deleteCartItem = (id) =>{
        const newCart = this.props.cartItems.filter(cartItem => cartItem._id !== id);
        this.props.dispatch({type: REMOVE_FROM_CART, payload: newCart});
    }

    amount = (cart) => {
        const total = countCartTotalAmount(cart);
        
        return {
            subtotal: total.subtotal,
            iva: total.iva,
            total: total.total
        }
    }
    countItems=(cart)=>{
        return countCartItems(cart)
    }

    render() { 
        return (
            <article className={styles.CartWrapper}>
                <h1>Cart</h1>
                {this.props.cartItems.map(cartItem =>
                        <CartItem key={cartItem._id} id={cartItem._id} name={cartItem.name} count={cartItem.count} deleteCartItem={this.deleteCartItem}/>                            
                )}
                <div>
                    <p>Subtotal: {this.amount(this.props.cartItems).subtotal}</p>
                    <p>Iva: {this.amount(this.props.cartItems).iva}</p>
                    <p>Total: {this.amount(this.props.cartItems).total}</p>
                </div>
                <div>
                    <p>Carrito:{this.countItems(this.props.cartItems)}</p>
                </div>
            </article>
        );
    }
}
 
const mapStateToProps = state =>{
    return {
        cartItems: state.cart.cart
    }
}

export default connect(mapStateToProps)(Cart);