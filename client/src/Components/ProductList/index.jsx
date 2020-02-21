import React, { Component } from 'react';
import ItemsCollection from '../ItemsCollection';
import Cart from '../Cart';

class ProductList extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (<>
        <h1>Product list</h1>
        <ItemsCollection />
        <Cart />
        </>);
    }
}
 
export default ProductList;