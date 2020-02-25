import React, { Component } from 'react';

class CartItem extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (<>
        {this.props.name}
        {this.props.count}
        </>);
    }
}
 
export default CartItem;