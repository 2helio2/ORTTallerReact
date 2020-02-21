import React, { Component } from 'react';
import { connect } from 'react-redux'; 

class Cart extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() {    
        return (<section>
            <h2>Cart</h2>
            {this.props.cart.map(cartItem => 
                <p>{cartItem.name} {cartItem.count}</p>
            )}
        </section>);
    }
}
 
const mapStateToProps = state => {
    return { cart: state.cartReducer.cart };
}
 
export default connect(mapStateToProps)(Cart);