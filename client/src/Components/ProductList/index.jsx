import React, { Component } from 'react';
import { connect } from 'react-redux';
import { GET_PRODUCTS } from '../../Redux/Actions/actionTypes';
import { getProducts } from '../../Services/services';
import ItemsCollection from '../ItemsCollection';
import Cart from '../Cart';

class ProductList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            productsList: []
        }
    }

    componentWillMount() {
        if(this.props.user.loggedin) {
            this.props.history.push('/login');
        } else {
            getProducts().then(res => {
                this.props.dispatch({ type: GET_PRODUCTS, payload: res.data })
                this.setState({
                    productsList: res.data
                })
            });
        }
    }

    render() { 
        return (<>
            <h1>Product list</h1>
            <Cart />
            <ItemsCollection items={this.state.productsList} />
        </>);
    }
}

const mapStateToProps = state => {
    return {
        user: state.user,
        products: state.products
    }
}
 
export default connect(mapStateToProps)(ProductList);