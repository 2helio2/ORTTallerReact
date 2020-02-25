import React, { Component } from 'react';
import { connect } from 'react-redux';
import CartItem from '../CartItem';
import { countCartTotalAmount } from '../../Utils/utils';

class Cart extends Component {
    constructor(props) {
        super(props);
        this.state = {  }

    }

    
    handleDelete=(key)=>{
        console.log(key)
    }
    amount=(cart)=>{
        const Total = countCartTotalAmount(cart);
        console.log(Total.total)
        return `Subtotal: ${Total.subtotal} Iva: ${Total.iva} Total: ${Total.total}`
    }

    render() { 
        return (<>
        <h1>cart</h1>
        <ul>
        {this.props.cartItems.map(cartItem =>
        <li key={cartItem.name}><CartItem name={cartItem.name}/> <CartItem count={cartItem.count}/> <button onClick={this.handleDelete(cartItem.name)}>X</button></li>)}
        </ul>
        <div><p>{this.amount(this.props.cartItems)}</p></div>
        </>);
    }
}
 
const mapStateToProps = state =>{
    return {
        cartItems: state.cart.cart
    }
}

export default connect(mapStateToProps)(Cart);