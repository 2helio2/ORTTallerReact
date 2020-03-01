import React, { Component } from 'react';
import { connect } from 'react-redux';
import { countCartItems } from '../../Utils/utils';
import  styles  from './styles.module.css';
import cartIcon from '../../Assets/Icons/buy.svg';

class Header extends Component {  
 
    countItems=(cart)=>{
        let count = countCartItems(cart);
       console.log(count);
        return countCartItems(cart)
    }

    render() { 
        return (
            <header  className={styles.mainHeader}>
                <div className={styles.cart}>
                    <img src={cartIcon} className={styles.cartIcon} alt=""/> 
                    <span className={styles.count}>{this.countItems(this.props.cartItems)}</span>
                </div>
            </header>
        );
    }
}
 
const mapStateToProps = state =>{
    return {
        cartItems: state.cart.cart
    }
}

export default connect(mapStateToProps)(Header);