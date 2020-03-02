import React from 'react';
import styles  from './styles.module.css';
import { countCartItems } from '../../Utils/utils';
import { connect } from 'react-redux';
import cartIcon from '../../Assets/Icons/buy.svg';

const CartIcon = (props) => {
    return(
        <div className={styles.cart}>
            <img src={cartIcon} className={styles.cartIcon} alt=""/> 
            <span className={styles.count}>{countCartItems(props.cartItems)}</span>
        </div>
    );
}

const mapStateToProps = state =>{
    return {
        cartItems: state.cart.cart
    }
}

export default connect(mapStateToProps)(CartIcon);