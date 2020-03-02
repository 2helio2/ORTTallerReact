import React, { Component } from 'react';
import { connect } from 'react-redux';
import { clearCart } from '../../Redux/Actions';
import { saveProducts } from '../../Redux/Actions';
import { getProducts } from '../../Services/services';
import ItemsCollection from '../ItemsCollection';
import Cart from '../Cart';
import Loader from '../Loader';
import styles from './styles.module.css';
import ProductSearch from '../ProductSearch';
import { filterProductsByName } from '../../Utils/utils';
import Header from '../Header';

class ProductList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            productsList: [],
            productsShow: []
        }
    }

    checkLogIn =  () => {
        if(!this.props.user.loggedin) {
            this.props.dispatch(clearCart());
            this.props.history.push('/login');
        } else {
            if(this.state.productsList.length === 0){
                getProducts().then(res => {
                    this.props.dispatch(saveProducts(res.data));
    
                    this.setState({
                        productsList: res.data
                    })
                });
            }   
        }
    }

    componentWillMount() {
        this.checkLogIn();
    }

    componentWillReceiveProps() {
        this.checkLogIn();
    }

    filterProducts = (productName)=>{
        productName.preventDefault();
        const products = filterProductsByName(this.props.products.itemsCollection, productName.target.value);

        this.setState({
            productsList: products
        });
    }

    render() { 
        return (
            <>
            <Header/>       
            <section className={styles.ProductList}>
                <ProductSearch filterProducts={this.filterProducts}/>
                <main>
                    <section className={styles.ItemsCollection}>
                        {this.state.productsList.length > 0 ? <ItemsCollection items={this.state.productsList} /> : <Loader /> }
                    </section>
                    <section className={styles.Cart}>
                        <Cart />
                    </section>
                </main>
            </section>
            </>
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