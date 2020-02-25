import React, { Component } from 'react';
import { connect } from 'react-redux';
import { GET_PRODUCTS } from '../../Redux/Actions/actionTypes';
import { getProducts } from '../../Services/services';
import ItemsCollection from '../ItemsCollection';
import Cart from '../Cart';
import Loader from '../Loader';
import styles from './styles.module.css';

class ProductList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            productsList: []
        }
    }

    componentWillMount() {
        if(!this.props.user.loggedin) {
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
        return (
            <section className={styles.ProductList}>
                <h1>Product list</h1>
                <main>
                    <section className={styles.ItemsCollection}>
                        {this.state.productsList.length > 0 ? <ItemsCollection items={this.state.productsList} /> : <Loader /> }
                    </section>
                    <section className={styles.Cart}>
                        <Cart />
                    </section>
                </main>
            </section>
        );
    }
}

const mapStateToProps = state => {
    return {
        user: state.user,
        products: state.products
    }
}
 
export default connect(mapStateToProps)(ProductList);