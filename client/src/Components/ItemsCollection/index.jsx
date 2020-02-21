import React, { Component } from 'react';
import { connect } from "react-redux";
import { getProducts } from '../../Services/services';
import { GET_PRODUCTS } from '../../redux/Actions/actionTypes';
import Item from '../Item';
import styles from './styles.module.css';

class ItemsCollection extends Component {
    constructor(props) {
        super(props);
        this.state = { }
    }

    componentDidMount () {
        getProducts().then(res => {
            this.props.dispatch({ type: GET_PRODUCTS, payload: res.data })
        });
    }

    render() { 
        return (<section className={styles.itemsCollection}>
            {this.props.itemsCollection ? this.props.itemsCollection.map(item => 
                <Item key={item._id} item={item} />
            ): 'loading'}
        </section>);
    }
}

const mapStateToProps = state => {
    return { itemsCollection: state.productsReducer.itemsCollection };
}
 
export default connect(mapStateToProps)(ItemsCollection);