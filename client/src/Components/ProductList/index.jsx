import React, { Component } from 'react';
import { connect } from 'react-redux';
import { GET_PRODUCTS } from '../../Redux/Actions/actionTypes';
import { getProducts } from '../../Services/services';
import ItemsCollection from '../ItemsCollection';
import Cart from '../Cart';
import Loader from '../Loader';
import styles from './styles.module.css';
import ProductSearch from '../ProductSearch';
import { filterProductsByName } from '../../Utils/utils';

class ProductList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            productsList: [],
            productsShow: []
        }
    }

    componentWillMount() {
        if(this.props.user.loggedin) {
            this.props.history.push('/login');
        } else {
            getProducts().then(res => {
                this.props.dispatch({ type: GET_PRODUCTS, payload: res.data })
                this.setState({
                    productsList: res.data,
                    productsShow: res.data
                })
            });
        }
    }
    filterProducts = (productName)=>{
        productName.preventDefault();
        const allProducts =this.state.productsList;
        if(productName.target.value){
            const products = filterProductsByName(allProducts, productName.target.value);
            this.setState({
                productsShow: products
            });
        } 
        else
        this.setState({
            productsShow: allProducts
        })
    }

    render() { 
        return (
            <section className={styles.ProductList}>
                <h1>Product list</h1>
                <ProductSearch filterProducts={this.filterProducts}/>
                <main>
                    <section className={styles.ItemsCollection}>
                        {this.state.productsShow.length > 0 ? <ItemsCollection items={this.state.productsShow} /> : <Loader /> }
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